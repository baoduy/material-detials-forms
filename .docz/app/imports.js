export const imports = {
  'src/components/Label/Label.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-components-label-label" */ 'src/components/Label/Label.mdx'
    ),
}
