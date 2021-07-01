
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug','3d6'),
  exact: true,
},
{
  path: '/__docusaurus/debug/config',
  component: ComponentCreator('/__docusaurus/debug/config','914'),
  exact: true,
},
{
  path: '/__docusaurus/debug/content',
  component: ComponentCreator('/__docusaurus/debug/content','c28'),
  exact: true,
},
{
  path: '/__docusaurus/debug/globalData',
  component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
  exact: true,
},
{
  path: '/__docusaurus/debug/metadata',
  component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
  exact: true,
},
{
  path: '/__docusaurus/debug/registry',
  component: ComponentCreator('/__docusaurus/debug/registry','0da'),
  exact: true,
},
{
  path: '/__docusaurus/debug/routes',
  component: ComponentCreator('/__docusaurus/debug/routes','244'),
  exact: true,
},
{
  path: '/blog',
  component: ComponentCreator('/blog','e8c'),
  exact: true,
},
{
  path: '/blog/hello-world',
  component: ComponentCreator('/blog/hello-world','07a'),
  exact: true,
},
{
  path: '/blog/Introducting Ohana',
  component: ComponentCreator('/blog/Introducting Ohana','33e'),
  exact: true,
},
{
  path: '/blog/introduction-to-kubernetes',
  component: ComponentCreator('/blog/introduction-to-kubernetes','390'),
  exact: true,
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','e13'),
  exact: true,
},
{
  path: '/blog/tags/cloud-computing',
  component: ComponentCreator('/blog/tags/cloud-computing','148'),
  exact: true,
},
{
  path: '/blog/tags/clusters',
  component: ComponentCreator('/blog/tags/clusters','91c'),
  exact: true,
},
{
  path: '/blog/tags/containerization',
  component: ComponentCreator('/blog/tags/containerization','9fc'),
  exact: true,
},
{
  path: '/blog/tags/containers',
  component: ComponentCreator('/blog/tags/containers','9f9'),
  exact: true,
},
{
  path: '/blog/tags/docker',
  component: ComponentCreator('/blog/tags/docker','7b6'),
  exact: true,
},
{
  path: '/blog/tags/docusaurus',
  component: ComponentCreator('/blog/tags/docusaurus','8a5'),
  exact: true,
},
{
  path: '/blog/tags/facebook',
  component: ComponentCreator('/blog/tags/facebook','2fe'),
  exact: true,
},
{
  path: '/blog/tags/hello',
  component: ComponentCreator('/blog/tags/hello','263'),
  exact: true,
},
{
  path: '/blog/tags/kubernetes',
  component: ComponentCreator('/blog/tags/kubernetes','a04'),
  exact: true,
},
{
  path: '/blog/tags/namespaces',
  component: ComponentCreator('/blog/tags/namespaces','a6b'),
  exact: true,
},
{
  path: '/blog/tags/ohana',
  component: ComponentCreator('/blog/tags/ohana','2fc'),
  exact: true,
},
{
  path: '/blog/welcome',
  component: ComponentCreator('/blog/welcome','015'),
  exact: true,
},
{
  path: '/markdown-page',
  component: ComponentCreator('/markdown-page','be1'),
  exact: true,
},
{
  path: '/meet-the-team',
  component: ComponentCreator('/meet-the-team','ff8'),
  exact: true,
},
{
  path: '/my-markdown-page',
  component: ComponentCreator('/my-markdown-page','81e'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','d86'),
  
  routes: [
{
  path: '/docs/getting-started/community',
  component: ComponentCreator('/docs/getting-started/community','e73'),
  exact: true,
},
{
  path: '/docs/getting-started/crash-course',
  component: ComponentCreator('/docs/getting-started/crash-course','f33'),
  exact: true,
},
{
  path: '/docs/getting-started/features',
  component: ComponentCreator('/docs/getting-started/features','643'),
  exact: true,
},
{
  path: '/docs/getting-started/setup',
  component: ComponentCreator('/docs/getting-started/setup','2bb'),
  exact: true,
},
{
  path: '/docs/more-resources',
  component: ComponentCreator('/docs/more-resources','ab5'),
  exact: true,
},
{
  path: '/docs/ohana',
  component: ComponentCreator('/docs/ohana','76f'),
  exact: true,
},
{
  path: '/docs/why-use-us',
  component: ComponentCreator('/docs/why-use-us','c4e'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
