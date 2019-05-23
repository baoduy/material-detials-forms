import { css } from 'docz-plugin-css';

export default {
  //src: ['./src', './node_modules/@material-ui'],
  title: 'Material-UI Form Generation',
  wrapper: '.docz/wrapper/index.tsx',
  codeSandbox: true,
  typescript: true,
  plugins: [
    css({
      preprocessor: 'less',
      cssmodules: true
    })
  ]
};
