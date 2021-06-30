
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
  component: ComponentCreator('/blog','17b'),
  exact: true,
},
{
  path: '/blog/greetings',
  component: ComponentCreator('/blog/greetings','ca0'),
  exact: true,
},
{
  path: '/blog/hello-world',
  component: ComponentCreator('/blog/hello-world','07a'),
  exact: true,
},
{
  path: '/blog/hola',
  component: ComponentCreator('/blog/hola','6e6'),
  exact: true,
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','e13'),
  exact: true,
},
{
  path: '/blog/tags/docusaurus',
  component: ComponentCreator('/blog/tags/docusaurus','738'),
  exact: true,
},
{
  path: '/blog/tags/facebook',
  component: ComponentCreator('/blog/tags/facebook','2fe'),
  exact: true,
},
{
  path: '/blog/tags/greetings',
  component: ComponentCreator('/blog/tags/greetings','479'),
  exact: true,
},
{
  path: '/blog/tags/hello',
  component: ComponentCreator('/blog/tags/hello','263'),
  exact: true,
},
{
  path: '/blog/tags/hola',
  component: ComponentCreator('/blog/tags/hola','8b3'),
  exact: true,
},
{
  path: '/blog/welcome',
  component: ComponentCreator('/blog/welcome','015'),
  exact: true,
},
{
<<<<<<< HEAD
=======
  path: '/introduction',
  component: ComponentCreator('/introduction','ced'),
  exact: true,
},
{
>>>>>>> main
  path: '/markdown-page',
  component: ComponentCreator('/markdown-page','be1'),
  exact: true,
},
{
  path: '/meet-the-team',
<<<<<<< HEAD
  component: ComponentCreator('/meet-the-team','178'),
=======
  component: ComponentCreator('/meet-the-team','ff8'),
>>>>>>> main
  exact: true,
},
{
  path: '/my-markdown-page',
  component: ComponentCreator('/my-markdown-page','81e'),
  exact: true,
},
{
  path: '/docs',
<<<<<<< HEAD
  component: ComponentCreator('/docs','831'),
=======
  component: ComponentCreator('/docs','2d7'),
>>>>>>> main
  
  routes: [
{
  path: '/docs/hello',
  component: ComponentCreator('/docs/hello','bc1'),
  exact: true,
},
{
  path: '/docs/intro',
  component: ComponentCreator('/docs/intro','e84'),
  exact: true,
},
{
<<<<<<< HEAD
  path: '/docs/Introduction/community',
  component: ComponentCreator('/docs/Introduction/community','d03'),
  exact: true,
},
{
  path: '/docs/Introduction/crash-course',
  component: ComponentCreator('/docs/Introduction/crash-course','fa5'),
  exact: true,
},
{
  path: '/docs/Introduction/features',
  component: ComponentCreator('/docs/Introduction/features','4a7'),
  exact: true,
},
{
  path: '/docs/Introduction/how-it-works',
  component: ComponentCreator('/docs/Introduction/how-it-works','130'),
  exact: true,
},
{
  path: '/docs/Introduction/introduction-to-ohana',
  component: ComponentCreator('/docs/Introduction/introduction-to-ohana','0ea'),
  exact: true,
},
{
  path: '/docs/Introduction/more-resources',
  component: ComponentCreator('/docs/Introduction/more-resources','c63'),
  exact: true,
},
{
  path: '/docs/Introduction/why-use-us',
  component: ComponentCreator('/docs/Introduction/why-use-us','87c'),
=======
  path: '/docs/tutorial-basics/congratulations',
  component: ComponentCreator('/docs/tutorial-basics/congratulations','7ef'),
  exact: true,
},
{
  path: '/docs/tutorial-basics/create-a-blog-post',
  component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post','2c8'),
  exact: true,
},
{
  path: '/docs/tutorial-basics/create-a-document',
  component: ComponentCreator('/docs/tutorial-basics/create-a-document','f0d'),
  exact: true,
},
{
  path: '/docs/tutorial-basics/create-a-page',
  component: ComponentCreator('/docs/tutorial-basics/create-a-page','ca5'),
  exact: true,
},
{
  path: '/docs/tutorial-basics/deploy-your-site',
  component: ComponentCreator('/docs/tutorial-basics/deploy-your-site','508'),
  exact: true,
},
{
  path: '/docs/tutorial-basics/markdown-features',
  component: ComponentCreator('/docs/tutorial-basics/markdown-features','f90'),
>>>>>>> main
  exact: true,
},
{
  path: '/docs/tutorial-extras/manage-docs-versions',
  component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions','d64'),
  exact: true,
},
{
  path: '/docs/tutorial-extras/translate-your-site',
  component: ComponentCreator('/docs/tutorial-extras/translate-your-site','16a'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
