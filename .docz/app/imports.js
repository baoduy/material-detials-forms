export const imports = {
  'src/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-index" */ 'src/index.mdx'
    ),
  'src/components/DetailsView/DetailsView.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-components-details-view-details-view" */ 'src/components/DetailsView/DetailsView.mdx'
    ),
  'src/components/DetailsView/SingleDetailsView.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-components-details-view-single-details-view" */ 'src/components/DetailsView/SingleDetailsView.mdx'
    ),
  'src/components/DetailsView/SectionDetailsView.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-components-details-view-section-details-view" */ 'src/components/DetailsView/SectionDetailsView.mdx'
    ),
  'src/components/Labels/Label.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-components-labels-label" */ 'src/components/Labels/Label.mdx'
    ),
  'src/components/Labels/Title.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-components-labels-title" */ 'src/components/Labels/Title.mdx'
    ),
  'src/components/EditForm/EditView.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-components-edit-form-edit-view" */ 'src/components/EditForm/EditView.mdx'
    ),
  'src/components/EditForm/EditField/EditView.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-components-edit-form-edit-field-edit-view" */ 'src/components/EditForm/EditField/EditView.mdx'
    ),
}
