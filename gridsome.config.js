// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

function combineDescription(node) {
  
  desc = node.description + "\n\n" 
  
  links = node.stuff.filter((e) => {
    return e.text != "Episode:"
  });

  for (const e of links) {
    desc += e.text + "\n" + e.url + "\n\n"
  }

  return desc

}


module.exports = {
  siteName: 'A S M a R x',
  siteUrl: 'https://www.asmarx.xyz',
  pathPrefix: '/',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: './src/episodes_json/*.json',
        typeName: 'Episode'
      }
    },
    {
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'Episode',
        feedOptions: {
          title: 'ASMaRx',
          feed_url: 'https://asmarx.xyz/rss.xml',
          site_url: 'https://asmarx.xyz',
          image: 'https://storage.googleapis.com/asmarx_episodes/thumb.png'
        },
        feedItemOptions: node => ({
          title: node.title,
          description: combineDescription(node),
          url: 'https://asmarx.xyz/episode/' + node.id,
          image: node.thumb,
          author: 'Rokas G',
          date: new Date([node.date.split("-")[1],node.date.split("-")[0], node.date.split("-")[2]]).getTime()
        }),
        output: {
          dir: './static/',
          name: 'rss'
        }
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
