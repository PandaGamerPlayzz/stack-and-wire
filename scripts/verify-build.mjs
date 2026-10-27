import { readdir, readFile, access } from 'node:fs/promises';
import { resolve, join, relative, sep } from 'node:path';
import assert from 'node:assert/strict';
import config from '../astro.config.mjs';

const base = config.base.replace(/\/$/, '');
const root = resolve('dist');
async function walk(dir) {
  const files = [];
  for (const item of await readdir(dir, { withFileTypes: true })) {
    const file = join(dir, item.name);
    files.push(...(item.isDirectory() ? await walk(file) : [file]));
  }
  return files;
}
const files = await walk(root);
const pages = files.filter(file => file.endsWith('.html'));
const expected = ['index.html','lab/index.html','learning/index.html','projects/index.html','projects/virtualized-opnsense/index.html','projects/remote-access/index.html'];
assert.deepEqual(pages.map(file => relative(root,file).split(sep).join('/')).sort(), expected.sort(), 'Unexpected published routes');
assert.ok(!files.some(file => /cat6a-spool-label|info-interview|hw-inventory|photos-checklist|photo-originals/i.test(file)), 'Private/reference file in build output');
let checked = 0;
for (const file of pages) {
  const html = await readFile(file, 'utf8');
  assert.match(html, /<title>.+?<\/title>/);
  assert.match(html, /name="description"/);
  assert.match(html, /<h1[ >]/);
  assert.match(html, /id="main"/);
  assert.ok(!html.includes('cat6a-spool-label'), 'Rejected image linked from public page');
  assert.ok(!['SERVER_A', 'NIC_A', 'SWITCH_A', 'TODO:', 'Starter draft', '/roadmap/', '/gallery/', '/about/'].some(value => html.includes(value)), 'Outdated starter content or route');
  const pathname = relative(root, file).split(sep).join('/').replace(/index\.html$/, '');
  const pageURL = 'https://local.test' + base + '/' + pathname;
  for (const [, attribute, value] of html.matchAll(/\b(href|src)="([^"]+)"/g)) {
    if (/^(https?:|mailto:|data:|tel:|\/\/)/.test(value)) {
      assert.equal(attribute, 'href', 'No external media should be needed');
      continue;
    }
    const url = new URL(value, pageURL);
    assert.ok(url.pathname.startsWith(base + '/'), 'Unprefixed URL: ' + value);
    let target = decodeURIComponent(url.pathname).slice(base.length).replace(/^\//, '');
    if (!target || target.endsWith('/')) target += 'index.html';
    const local = resolve(root, target);
    assert.ok(local.startsWith(root + sep), 'Path escaped build output');
    await access(local).catch(() => { throw Error(file + ': missing ' + value); });
    if (url.hash && target.endsWith('.html')) {
      const destination = await readFile(local, 'utf8');
      assert.ok(destination.includes('id="' + decodeURIComponent(url.hash.slice(1)) + '"'), 'Missing anchor: ' + value);
    }
    checked++;
  }
}
for (const file of files.filter(file => file.endsWith('.css'))) {
  const css = await readFile(file, 'utf8');
  for (const [, raw] of css.matchAll(/url\(([^)]+)\)/g)) {
    const value = raw.trim().replace(/^['"]|['"]$/g, '');
    if (value.startsWith('data:')) continue;
    assert.ok(!/^https?:/.test(value), 'Font or asset uses an external URL');
    const cssURL = 'https://local.test' + base + '/' + relative(root, file).split(sep).join('/');
    const url = new URL(value, cssURL);
    assert.ok(url.pathname.startsWith(base + '/'), 'Unprefixed CSS asset');
    await access(resolve(root, decodeURIComponent(url.pathname).slice(base.length + 1)));
    checked++;
  }
}
console.log(`Verified ${pages.length} pages and ${checked} local links, images, anchors, and font/CSS assets under ${base}/`);
