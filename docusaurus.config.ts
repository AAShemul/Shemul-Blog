import { themes as prismThemes } from 'prism-react-renderer'
import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'

const config: Config = {
	title: 'Shemul\'s Blog',
	tagline: 'Md. Ashraful Alam Shemul',
	favicon: 'favicon.ico',

	// Set the production url of your site here
	url: 'https://blog.shemul.com.bd',
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it often is '/<projectName>/'
	baseUrl: '/',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'STechBD', // Usually your GitHub org/user name.
	projectName: 'Shemul-Blog', // Usually your repo name.

	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: [ 'en' ],
	},

	presets: [
		[
			'classic',
			{
				docs: false,
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						'https://github.com/AAShemul/Shemul-Blog/',
				},
				theme: {
					customCss: './src/css/custom.css',
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		// Replace with your project's social card
		image: 'img/docusaurus-social-card.jpg',
		navbar: {
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
		footer: {
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
			copyright: `© 2013-${ new Date().getFullYear().toString().slice(-2) } <a href="https://www.shemul.com.bd" target="_blank"><strong>Md. Ashraful Alam Shemul</strong></a>. All rights reserved. Powered by <a href="https://www.stechbd.net" target="_blank"><strong>S Technologies</strong></strong></a>.`,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
	} satisfies Preset.ThemeConfig,

	plugins: [
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
	],
}

export default config
