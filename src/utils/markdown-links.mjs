// Prefix site-root links at build time so Markdown stays portable.
export function prefixLinks({ base = '' } = {}) {
  return (tree) => {
    function visit(node) {
      if (node.type === 'element') {
        for (const key of ['href', 'src']) {
          const value = node.properties?.[key];
          if (typeof value === 'string' && value.startsWith('/') && !value.startsWith('//')) {
            node.properties[key] = base.replace(/\/$/, '') + value;
          }
        }
      }
      node.children?.forEach(visit);
    }
    visit(tree);
  };
}
