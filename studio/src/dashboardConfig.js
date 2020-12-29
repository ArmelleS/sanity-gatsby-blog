export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5feae84f92118cb1038bc6a5',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-shixpa7i',
                  apiId: '89d28344-781e-4a37-b777-2c0b98603a4d'
                },
                {
                  buildHookId: '5feae84f67f968b5706f4aa5',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-gjm1d7b6',
                  apiId: '1106d9e7-d35a-4557-b285-4df7aa5ea86d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ArmelleS/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-gjm1d7b6.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
