// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {},
    // https://github.com/evrone/postcss-px-to-viewport/blob/master/README.md
    "postcss-px-to-viewport": {
      unitToConvert: 'px',
      viewportWidth: 375,
      unitPrecision: 5,
      propList: ['*'],
      viewportUnit: 'vw',
      fontViewportUnit: 'vw',
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: false,
      replace: true,
      exclude: /node_modules/i,
      include: undefined,
      // landscape: false,
      // landscapeUnit: 'vw',
      // landscapeWidth: 568
    }
  }
}
