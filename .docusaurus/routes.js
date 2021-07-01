
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/blog',
  component: ComponentCreator('/blog','048'),
  exact: true,
},
{
  path: '/blog/introducing-ohana',
  component: ComponentCreator('/blog/introducing-ohana','296'),
  exact: true,
},
{
  path: '/blog/introduction-to-kubernetes',
  component: ComponentCreator('/blog/introduction-to-kubernetes','138'),
  exact: true,
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','e13'),
  exact: true,
},
{
  path: '/blog/tags/cloud',
  component: ComponentCreator('/blog/tags/cloud','932'),
  exact: true,
},
{
  path: '/blog/tags/containerization',
  component: ComponentCreator('/blog/tags/containerization','171'),
  exact: true,
},
{
  path: '/blog/tags/containers',
  component: ComponentCreator('/blog/tags/containers','9f9'),
  exact: true,
},
{
  path: '/blog/tags/docker',
  component: ComponentCreator('/blog/tags/docker','f67'),
  exact: true,
},
{
  path: '/blog/tags/kubernetes',
  component: ComponentCreator('/blog/tags/kubernetes','873'),
  exact: true,
},
{
  path: '/blog/tags/ohana',
  component: ComponentCreator('/blog/tags/ohana','2fc'),
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
  component: ComponentCreator('/docs','fb9'),
  
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
