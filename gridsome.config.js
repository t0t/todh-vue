// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: 'gridsome-source-google-sheets',
      options: {
        sheetId: '192ClZReVWxNYCnuSGb5_41fD4IKfpmVCFBmUYdIhUA0', 
        apiKey: 'AIzaSyDUZxhFOfKrjKQG3GUiZNcVDMBJrN9BWtg',
        // type: 'TYPE_NAME', //Optional - default is googleSheet. Used for graphql queries.
      }
    }
  ],
  siteUrl: 'https://t0t.github.io',
  pathPrefix: '/todh-vue',
}
