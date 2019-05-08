export const imports = {
  'src/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-index" */ 'src/index.mdx'
    ),
  'src/components/Labels/Label.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-components-labels-label" */ 'src/components/Labels/Label.mdx'
    ),
}
