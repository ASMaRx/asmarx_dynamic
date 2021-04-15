// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'A S M a R x',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: './src/episodes_json/*.json',
        typeName: 'Episode'
      }
    }
  ],
  templates: {
    Episode: [
      {
        path: '/episode/:id',
        component: './src/templates/Episode.vue'
      }
    ]
  }

}
