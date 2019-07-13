import { css } from 'docz-plugin-css';

export default {
  //src: ['./src', './node_modules/@material-ui'],
  theme: 'docz-theme-ztopia',
  title: 'Material-UI Form Generation',
  wrapper: '.docz/wrapper/index.tsx',
  codeSandbox: false,
  typescript: true,
  host: '0.0.0.0',
  plugins: [
    css({
      preprocessor: 'less',
      cssmodules: true
    })
  ]
};
