export const imports = {
  'src/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-index" */ 'src/index.mdx'
    ),
  'src/components/DetailsView/DetailsView.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-components-details-view-details-view" */ 'src/components/DetailsView/DetailsView.mdx'
    ),
  'src/components/Labels/Label.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-components-labels-label" */ 'src/components/Labels/Label.mdx'
    ),
  'src/components/Labels/Title.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-components-labels-title" */ 'src/components/Labels/Title.mdx'
    ),
}
