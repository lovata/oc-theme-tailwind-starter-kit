const mix = require('laravel-mix');

const jsFileList = [
  'assets/src/js/app',
  'pages/index/index'
];

let postCssPlugins = [
    require('tailwindcss'),
];

mix.setPublicPath('./');

mix.setResourceRoot('/themes/oc-theme-tailwind-starter-kit');

mix.webpackConfig(webpack =>({
  plugins:[
    new webpack.ProvidePlugin({
      $: require.resolve('jquery'),
      jQuery: require.resolve('jquery'),
      'window.jQuery': require.resolve('jquery'),
      'window.$': require.resolve('jquery'),
    })
  ]
}))

jsFileList.forEach(fileName => mix.js(`./${fileName}.js`, 'assets/dist/js'));

mix.postCss('assets/src/css/app.css', 'assets/dist/css', postCssPlugins);

mix.browserSync({
  proxy: '172.17.0.1',
  open: false,
  reloadDelay: 500,
  files: [
    './content/**/*.htm',
    './layouts/*.htm',
    './pages/**/*.htm',
    './pages/**/*.js',
    './partials/**/*.htm',
    './partials/**/*.js'
  ],
});

mix.sourceMaps(true, 'source-map');
mix.extract(['jquery']);
mix.version();
