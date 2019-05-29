export const imports = {
  'src/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-index" */ 'src/index.mdx'
    ),
  'src/components/DetailsView/DetailsView.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-components-details-view-details-view" */ 'src/components/DetailsView/DetailsView.mdx'
    ),
  'src/components/DetailsView/SectionDetailsView.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-components-details-view-section-details-view" */ 'src/components/DetailsView/SectionDetailsView.mdx'
    ),
  'src/components/DetailsView/SingleDetailsView.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-components-details-view-single-details-view" */ 'src/components/DetailsView/SingleDetailsView.mdx'
    ),
  'src/components/EditForm/EditView.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-components-edit-form-edit-view" */ 'src/components/EditForm/EditView.mdx'
    ),
  'src/components/Labels/Label.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-components-labels-label" */ 'src/components/Labels/Label.mdx'
    ),
  'src/components/Labels/Title.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-components-labels-title" */ 'src/components/Labels/Title.mdx'
    ),
  'src/components/EditForm/EditField/DateTimeField.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-components-edit-form-edit-field-date-time-field" */ 'src/components/EditForm/EditField/DateTimeField.mdx'
    ),
  'src/components/EditForm/EditField/TextField.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-components-edit-form-edit-field-text-field" */ 'src/components/EditForm/EditField/TextField.mdx'
    ),
  'src/components/EditForm/EditField/SelectField.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-components-edit-form-edit-field-select-field" */ 'src/components/EditForm/EditField/SelectField.mdx'
    ),
}
