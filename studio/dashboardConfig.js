export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5f64b5e46970f738e11752cb',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-t7b648re',
                  apiId: 'ad57653e-9bfe-4c8e-b3ca-5eb1902ef93a'
                },
                {
                  buildHookId: '5f64b5e4ee451d3036904b64',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-zbd6i1kp',
                  apiId: '7ed0dcfb-05ac-4530-a087-0ffbc3e3cbb6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/leslie-fi/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-zbd6i1kp.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
