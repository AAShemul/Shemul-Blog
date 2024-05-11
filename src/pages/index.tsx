import React, { JSX } from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import Head from '@docusaurus/Head'
import styles from './index.module.css'


/**
 * Homepage Header component.
 * This is the main header section of the homepage.
 *
 * @returns { JSX.Element } The JSX element for the homepage header.
 * @since 1.0.0
 */
function HomepageHeader(): JSX.Element {
	const { siteConfig } = useDocusaurusContext()
	return (
		<header className={ clsx('hero hero--primary', styles.heroBanner) }>
			<div className="container">
				<div className="center">
					<img
						className="shemul"
						src="/img/Md. Ashraful Alam Shemul (St. Martin's Island - October 16, 2023).webp"
						alt="Md. Ashraful Alam Shemul at St. Martin's Island on October 16, 2023"
					/>
				</div>
				<h1 className="hero__title">
					{ siteConfig.title }
				</h1>
				<p className="hero__subtitle">
					Notebook of <strong>{ siteConfig.tagline }</strong>
				</p>
				<div className={ styles.buttons }>
					<Link className="button button--secondary button--lg" to="https://www.shemul.com.bd">
						About Shemul
					</Link>
				</div>
			</div>
		</header>
	)
}


/**
 * Gap component.
 * This is a component to create a gap between two elements.
 *
 * @returns { JSX.Element } The JSX element for the gap.
 * @since 1.0.0
 */
function Gap(): JSX.Element {
	return (
		<div><br/><br/><br/></div>
	)
}


/**
 * Blog List Home component.
 * This is the main blog list section of the homepage.
 *
 * @returns { JSX.Element } The JSX element for the blog list home.
 * @since 1.0.0
 */
function BlogListHome(): JSX.Element {
	const sections = [
		{
			title: 'Note',
			image: '/img/Note.webp',
			description: 'Shemul\'s Notebook',
			link: '/note'
		},
		{
			title: 'Story',
			image: '/img/Story.webp',
			description: 'Shemul\'s Stories',
			link: '/story'
		},
		{
			title: 'Islam',
			image: '/img/Islam.webp',
			description: 'Shemul\'s Islamic Thoughts',
			link: '/islam'
		},
		{
			title: 'Religion',
			image: '/img/Religion.webp',
			description: 'Shemul\'s Religious Thoughts',
			link: '/religion'
		},
		{
			title: 'Science',
			image: '/img/Science.webp',
			description: 'Shemul\'s Scientific Discussion',
			link: '/science'
		},
		{
			title: 'Technology',
			image: '/img/Technology.webp',
			description: 'Shemul\'s Technological Ideas',
			link: '/technology'
		},
		{
			title: 'Programming',
			image: '/img/Programming.webp',
			description: 'Shemul\'s Programming Tutorials',
			link: '/programming'
		},
		{
			title: 'Politics',
			image: '/img/Politics.webp',
			description: 'Shemul\'s Political Thoughts',
			link: '/politics'
		},
		{
			title: 'Economics',
			image: '/img/Economics.webp',
			description: 'Shemul\'s Economical Analysis',
			link: '/economics'
		}
	]

	return (
		<div className="blog-list-home">
			<div className="container">
				<div className="row">
					<div className="c-r">
						<h2 className="hero__title" id="get-started">
							Get Started
						</h2>
					</div>
				</div>
				<div className="row">
					<div className="c-r">
						<h3 className="hero__subtitle">
							Read the latest articles!
						</h3>
					</div>
				</div>
				<div className="row">
					{ sections.map((section, index) => (
						<div key={ index } className="col col--4 m-t m-b">
							<div className="card">
								<div className="card__header center">
									<h3>
										<Link to={ section.link }>
											{ section.title }
										</Link>
									</h3>
								</div>
								<div className="card__image">
									<img src={ section.image } alt={ section.title }/>
								</div>
								<div className="card__body">
									<p>
										{ section.description }
									</p>
								</div>
								<div className="card__footer">
									<Link to={ section.link }>
										Read Articles
									</Link>
								</div>
							</div>
						</div>
					)) }
				</div>
			</div>
		</div>
	)
}

// ${siteConfig.title} can be used to get the title of the website


/**
 * Home component.
 * This is the main component of the homepage.
 *
 * @returns { JSX.Element } The JSX element for the homepage.
 * @since 1.0.0
 */
export default function Home(): JSX.Element {
	const { siteConfig } = useDocusaurusContext()

	return (
		<Layout
			title="Hello from Md. Ashraful Alam Shemul"
			description="Shemul's Blog is a content sharing website of Md. Ashraful Alam Shemul. Md. Ashraful Alam Shemul is a Bangladeshi Author, teacher and software developer. He is studying Marine Fisheies in Bangabandhu Sheikh Mujibur Rahman Maritime University."
		>
			<Head>
				<link rel="apple-touch-icon" sizes="57x57" href="/icon/apple-icon-57x57.png"/>
				<link rel="apple-touch-icon" sizes="60x60" href="/icon/apple-icon-60x60.png"/>
				<link rel="apple-touch-icon" sizes="72x72" href="/icon/apple-icon-72x72.png"/>
				<link rel="apple-touch-icon" sizes="76x76" href="/icon/apple-icon-76x76.png"/>
				<link rel="apple-touch-icon" sizes="114x114" href="/icon/apple-icon-114x114.png"/>
				<link rel="apple-touch-icon" sizes="120x120" href="/icon/apple-icon-120x120.png"/>
				<link rel="apple-touch-icon" sizes="144x144" href="/icon/apple-icon-144x144.png"/>
				<link rel="apple-touch-icon" sizes="152x152" href="/icon/apple-icon-152x152.png"/>
				<link rel="apple-touch-icon" sizes="180x180" href="/icon/apple-icon-180x180.png"/>
				<link rel="icon" type="image/png" sizes="192x192" href="/icon/android-icon-192x192.png"/>
				<link rel="icon" type="image/png" sizes="32x32" href="/icon/favicon-32x32.png"/>
				<link rel="icon" type="image/png" sizes="96x96" href="/icon/favicon-96x96.png"/>
				<link rel="icon" type="image/png" sizes="16x16" href="/icon/favicon-16x16.png"/>
				<link rel="manifest" href="/manifest.json"/>
				<meta name="msapplication-TileColor" content="#ffffff"/>
				<meta name="msapplication-TileImage" content="/icon/ms-icon-144x144.png"/>
				<meta property="og:site_name" content="Shemul's Blog"/>
				<meta property="og:type" content="website"/>
				<meta property="og:title" content="Hello from Md. Ashraful Alam Shemul | Shemul's Blog"/>
				<meta
					property="og:description"
					content="Shemul's Blog is a content sharing website of Md. Ashraful Alam Shemul. Md. Ashraful Alam Shemul is a Bangladeshi Author, teacher and software developer. He is studying Marine Fisheies in Bangabandhu Sheikh Mujibur Rahman Maritime University."
				/>
				<meta property="og:url" content="https://blog.shemul.com.bd"/>
				<meta property="og:image" content="https://blog.shemul.com.bd/img/Homepage.webp"/>
				<meta property="og:image:secure_url" content="https://blog.shemul.com.bd/img/Homepage.webp"/>
				<meta property="og:image:width" content="1200"/>
				<meta property="og:image:height" content="628"/>
				<meta property="profile:first_name" content="Md. Ashraful Alam"/>
				<meta property="profile:last_name" content="Shemul"/>
				<meta property="profile:gender" content="male"/>
				<meta property="profile:username" content="AAShemul"/>
				<meta property="article:publisher" content="https://www.facebook.com/TheAAShemul"/>
				<meta property="article:author" content="https://www.facebook.com/AAShemul"/>
				<meta name="twitter:card" content="summary_large_image"/>
				<meta name="twitter:site" content="@AAShemul"/>
				<meta name="twitter:domain" content="blog.shemul.com.bd"/>
				<meta name="twitter:title" content="Hello from Md. Ashraful Alam Shemul | Shemul's Blog"/>
				<meta
					name="twitter:description"
					content="Shemul's Blog is a content sharing website of Md. Ashraful Alam Shemul. Md. Ashraful Alam Shemul is a Bangladeshi Author, teacher and software developer. He is studying Marine Fisheies in Bangabandhu Sheikh Mujibur Rahman Maritime University."
				/>
				<meta name="twitter:creator" content="@AAShemul"/>
				<meta name="twitter:image" content="https://blog.shemul.com.bd/img/Homepage.webp"/>
			</Head>
			<HomepageHeader/>
			<main>
				<Gap/>
				<BlogListHome/>
				<Gap/>
			</main>
		</Layout>
	)
}
