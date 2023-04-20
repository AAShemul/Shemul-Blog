// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config =
{
	title: 'Shemul\'s Blog',
	tagline: 'Md. Ashraful Alam Shemul',
	url: 'https://blog.shemul.gq',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: '/favicon.ico',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'STechBD', // Usually your GitHub org/user name.
	projectName: 'Shemul-Blog', // Usually your repo name.

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n:
	{
		defaultLocale: 'en',
		locales: ['en'],
	},

	presets:
	[
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				/*docs:
				{
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl: 'https://github.com/AAShemul/Shemul-Blog/',
				},*/
				docs: false,
				blog:
				{
					showReadingTime: true,
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl: 'https://github.com/AAShemul/Shemul-Blog/',
					blogTitle: 'Shemul\'s blog!',
					blogDescription: 'Articles for minds!',
				},
				theme:
				{
					customCss: require.resolve('./src/css/custom.css'),
				},
		}),
		],
	],

	themes:
	[
		[
			"@easyops-cn/docusaurus-search-local",
			{
				indexDocs: false,
				indexPages: true,
				blogRouteBasePath: ['note', 'story', 'islam', 'religion', 'science', 'technology', 'programming', 'politics', 'economics'],
				blogDir: ['note', 'story', 'islam', 'religion', 'science', 'technology', 'programming', 'politics', 'economics'],
				language: ['en'],
			},
		],
	],

	themeConfig:
	/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
	({
		metadata:
		[
			{
				name: 'keywords',
				content: 'shemul, md. ashraful alam shemul, shemul\'s blog, notebook, blog, note, website, islam, religion, politics, economics, society, support'
			}
		],
		navbar:
		{
			title: 'Shemul\'s Blog',
			logo:
			{
				alt: 'Logo of Md. Ashraful Alam Shemul',
				src: '/img/Logo_of_Md._Ashraful_Alam_Shemul.webp',
			},
			items:
			[
				{
					href: 'https://www.shemul.gq/',
					label: 'About Shemul',
					position: 'left'
				},
				{
					to: '/note',
					label: 'Note',
					position: 'left'
				},
				{
					to: '/story',
					label: 'Story',
					position: 'left'
				},
				{
					to: '/islam',
					label: 'Islam',
					position: 'left'
				},
				{
					to: '/religion',
					label: 'Religion',
					position: 'left'
				},
				{
					to: '/science',
					label: 'Science',
					position: 'left'
				},
				{
					to: '/technology',
					label: 'Technology',
					position: 'left'
				},
				{
					to: '/programming',
					label: 'Programming',
					position: 'left'
				},
				{
					to: '/politics',
					label: 'Politics',
					position: 'left'
				},
				{
					to: '/economics',
					label: 'Economics',
					position: 'left'
				},
				{
					href: 'https://www.stechbd.net/',
					label: 'STechBD.Net',
					position: 'right',
				},
			],
		},
		footer:
		{
			style: 'dark',
			links:
			[
				{
					title: 'Article',
					items:
					[
						{
							label: 'Note',
							to: '/note',
						},
						{
							label: 'Islam',
							to: '/islam',
						},
						{
							label: 'Story',
							to: '/story',
						},
						{
							label: 'Technology',
							to: '/technology',
						},
						{
							label: 'Programming',
							to: '/programming',
						},
					],
				},
				{
					title: 'Community',
					items:
					[
						{
							label: 'Facebook Page',
							href: 'https://www.facebook.com/TheAAShemul',
						},
						{
							label: 'Facebook Profile',
							href: 'https://www.facebook.com/AAShemul',
						},
						{
							label: 'Twitter',
							href: 'https://www.twitter.com/AAShemul',
						},
						{
							label: 'LinkedIn',
							href: 'https://www.linkedin.com/AAShemul',
						},
						{
							label: 'Instagram',
							href: 'https://www.instagram.com/TheAAShemul',
						},
					],
				},
				{
					title: 'More from Shemul',
					items:
					[
						{
							label: 'About Shemul',
							href: 'https://www.shemul.gq',
						},
						{
							label: 'শিমুলের পরিচিতি',
							href: 'https://www.shemul.gq/bn',
						},
						{
							label: 'Photo Gallery',
							href: 'https://www.shemul.gq/#gallery',
						},
						{
							label: 'Shemul Studios',
							href: 'https://studios.shemul.gq',
						},
						{
							label: 'Shemul\'s Classroom',
							href: 'https://classroom.shemul.gq',
						},
					],
				},
				{
					title: 'Company',
					items:
					[
						{
							label: 'S Technologies Limited',
							href: 'https://www.stechbd.net',
						},
						{
							label: 'Ulkaa',
							href: 'https://www.ulkaa.com',
						},
						{
							label: 'Shikkha Web',
							href: 'https://www.shikkhaweb.com',
						},
					],
				},
			],
			copyright: `© 2013-${new Date().getFullYear().toString().slice(-2)} <a href="https://www.shemul.gq" target="_blank"><strong>Md. Ashraful Alam Shemul</strong></a>. All rights reserved. Powered by <a href="https://www.stechbd.net" target="_blank"><strong>S Technologies Limited</strong></strong></a>.`,
		},
		prism:
		{
			theme: lightCodeTheme,
			darkTheme: darkCodeTheme,
		},
	}),

	plugins:
	[
		[
			'@docusaurus/plugin-content-blog',
			{
				id: 'note',
				routeBasePath: 'note',
				path: './note',
				blogTitle: 'Note',
				postsPerPage: 10,
				tagsBasePath: 'topic',
				blogSidebarTitle: 'Recent Articles',
			},
		],
		[
			'@docusaurus/plugin-content-blog',
			{
				id: 'story',
				routeBasePath: 'story',
				path: './story',
				blogTitle: 'Story',
				postsPerPage: 10,
				tagsBasePath: 'topic',
				blogSidebarTitle: 'Recent Articles',
			},
		],
		[
			'@docusaurus/plugin-content-blog',
			{
				id: 'islam',
				routeBasePath: 'islam',
				path: './islam',
				blogTitle: 'Story',
				postsPerPage: 10,
				tagsBasePath: 'topic',
				blogSidebarTitle: 'Recent Articles',
			},
		],
		[
			'@docusaurus/plugin-content-blog',
			{
				id: 'religion',
				routeBasePath: 'religion',
				path: './religion',
				blogTitle: 'Religion',
				postsPerPage: 10,
				tagsBasePath: 'topic',
				blogSidebarTitle: 'Recent Articles',
			},
		],
		[
			'@docusaurus/plugin-content-blog',
			{
				id: 'science',
				routeBasePath: 'science',
				path: './science',
				blogTitle: 'Science',
				postsPerPage: 10,
				tagsBasePath: 'topic',
				blogSidebarTitle: 'Recent Articles',
			},
		],
		[
			'@docusaurus/plugin-content-blog',
			{
				id: 'technology',
				routeBasePath: 'technology',
				path: './technology',
				blogTitle: 'Technology',
				postsPerPage: 10,
				tagsBasePath: 'topic',
				blogSidebarTitle: 'Recent Articles',
			},
		],
		[
			'@docusaurus/plugin-content-blog',
			{
				id: 'programming',
				routeBasePath: 'programming',
				path: './programming',
				blogTitle: 'Programming',
				postsPerPage: 10,
				tagsBasePath: 'topic',
				blogSidebarTitle: 'Recent Articles',
			},
		],
		[
			'@docusaurus/plugin-content-blog',
			{
				id: 'politics',
				routeBasePath: 'politics',
				path: './politics',
				blogTitle: 'Politics',
				postsPerPage: 10,
				tagsBasePath: 'topic',
				blogSidebarTitle: 'Recent Articles',
			},
		],
		[
			'@docusaurus/plugin-google-analytics',
			{
				trackingID: 'UA-227709687-1',
				anonymizeIP: false,
			},
		],
		[
			'@docusaurus/plugin-google-gtag',
			{
				trackingID: 'G-KH4ZHTHYLV',
				anonymizeIP: false,
			},
		],
		[
			'plugin-image-zoom',
			{
				// Options
			},
		],
	],
};

module.exports = config;
