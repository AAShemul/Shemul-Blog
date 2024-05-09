import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import styles from './index.module.css';


function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={ clsx('hero hero--primary', styles.heroBanner) }>
            <div className="container">
                <div className="center"><img className="shemul" src="/img/AAShemul.webp"
                                             alt="Md. Ashraful Alam Shemul at Jahangirnagar University (May 28, 2022)"/>
                </div>
                <h1 className="hero__title">{ siteConfig.title }</h1>
                <p className="hero__subtitle">Notebook of <strong>{ siteConfig.tagline }</strong></p>
                <div className={ styles.buttons }>
                    <Link className="button button--secondary button--lg" to="https://www.shemul.gq">About Shemul</Link>
                </div>
            </div>
        </header>
    );
}

function Gap() {
    return (
        <div><br/><br/><br/></div>
    );
}

function BlogListHome() {
    return (
        <div className="blog-list-home">
            <div className="container">
                <div className="row">
                    <div className="c-r"><h2 className="hero__title" id="get-started">Get Started</h2></div>
                </div>
                <div className="row">
                    <div className="c-r"><h3 className="hero__subtitle">Read the latest articles!</h3></div>
                </div>
                <div className="row">
                    <div className="col col--4 m-t m-b">
                        <div className="card">
                            <div className="card__header center">
                                <h3><Link to="/note">Note</Link></h3>
                            </div>
                            <div className="card__image">
                                <img src="/img/Note.webp" alt="Note"/>
                            </div>
                            <div className="card__body">
                                <p>Shemul's Notebook</p>
                            </div>
                            <div className="card__footer">
                                <Link to="/note">Read Articles</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col col--4 m-t m-b">
                        <div className="card">
                            <div className="card__header center">
                                <h3><Link to="/story">Story</Link></h3>
                            </div>
                            <div className="card__image">
                                <img src="/img/Story.webp" alt="Story"/>
                            </div>
                            <div className="card__body">
                                <p>Shemul's Stories</p>
                            </div>
                            <div className="card__footer">
                                <Link to="/story">Read Articles</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col col--4 m-t m-b">
                        <div className="card">
                            <div className="card__header center">
                                <h3><Link to="/islam">Islam</Link></h3>
                            </div>
                            <div className="card__image">
                                <img src="/img/Islam.webp" alt="Islam"/>
                            </div>
                            <div className="card__body">
                                <p>Shemul's Islamic Thoughts</p>
                            </div>
                            <div className="card__footer">
                                <Link to="/islam">Read Articles</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col col--4 m-t m-b">
                        <div className="card">
                            <div className="card__header center">
                                <h3><Link to="/religion">Religion</Link></h3>
                            </div>
                            <div className="card__image">
                                <img src="/img/Religion.webp" alt="Religion"/>
                            </div>
                            <div className="card__body">
                                <p>Shemul's Religious Thoughts</p>
                            </div>
                            <div className="card__footer">
                                <Link to="/religion">Read Articles</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col col--4 m-t m-b">
                        <div className="card">
                            <div className="card__header center">
                                <h3><Link to="/science">Science</Link></h3>
                            </div>
                            <div className="card__image">
                                <img src="/img/Science.webp" alt="Science"/>
                            </div>
                            <div className="card__body">
                                <p>Shemul's Scientific Discussion</p>
                            </div>
                            <div className="card__footer">
                                <Link to="/science">Read Articles</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col col--4 m-t m-b">
                        <div className="card">
                            <div className="card__header center">
                                <h3><Link to="/technology">Technology</Link></h3>
                            </div>
                            <div className="card__image">
                                <img src="/img/Technology.webp" alt="Technology"/>
                            </div>
                            <div className="card__body">
                                <p>Shemul's Technological Ideas</p>
                            </div>
                            <div className="card__footer">
                                <Link to="/technology">Read Articles</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col col--4 m-t m-b">
                        <div className="card">
                            <div className="card__header center">
                                <h3><Link to="/programming">Programming</Link></h3>
                            </div>
                            <div className="card__image">
                                <img src="/img/Programming.webp" alt="Programming"/>
                            </div>
                            <div className="card__body">
                                <p>Shemul's Programming Tutorials</p>
                            </div>
                            <div className="card__footer">
                                <Link to="/programming">Read Articles</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col col--4 m-t m-b">
                        <div className="card">
                            <div className="card__header center">
                                <h3><Link to="/politics">Politics</Link></h3>
                            </div>
                            <div className="card__image">
                                <img src="/img/Politics.webp" alt="Politics"/>
                            </div>
                            <div className="card__body">
                                <p>Shemul's Political Thoughts</p>
                            </div>
                            <div className="card__footer">
                                <Link to="/politics">Read Articles</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col col--4 m-t m-b">
                        <div className="card">
                            <div className="card__header center">
                                <h3><Link to="/economics">Economics</Link></h3>
                            </div>
                            <div className="card__image">
                                <img src="/img/Economics.webp" alt="Economics"/>
                            </div>
                            <div className="card__body">
                                <p>Shemul's Economical Analysis</p>
                            </div>
                            <div className="card__footer">
                                <Link to="/economics">Read Articles</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ${siteConfig.title} can be used to get the title of the website

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title="Hello from Md. Ashraful Alam Shemul"
            description="Shemul's Blog is a content sharing website of Md. Ashraful Alam Shemul. Md. Ashraful Alam Shemul is a Bangladeshi Author, teacher and tech-enthusiastic. He is studying Marine Fisheies in Bangabandhu Sheikh Mujibur Rahman Maritime University.">
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
                <meta property="og:description"
                      content="Shemul's Blog is a content sharing website of Md. Ashraful Alam Shemul. Md. Ashraful Alam Shemul is a Bangladeshi Author, teacher and tech-enthusiastic. He is studying Marine Fisheies in Bangabandhu Sheikh Mujibur Rahman Maritime University."/>
                <meta property="og:url" content="https://blog.shemul.gq"/>
                <meta property="og:image" content="https://blog.shemul.gq/img/Homepage.webp"/>
                <meta property="og:image:secure_url" content="https://blog.shemul.gq/img/Homepage.webp"/>
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
                <meta name="twitter:domain" content="blog.shemul.gq"/>
                <meta name="twitter:title" content="Hello from Md. Ashraful Alam Shemul | Shemul's Blog"/>
                <meta name="twitter:description"
                      content="Shemul's Blog is a content sharing website of Md. Ashraful Alam Shemul. Md. Ashraful Alam Shemul is a Bangladeshi Author, teacher and tech-enthusiastic. He is studying Marine Fisheies in Bangabandhu Sheikh Mujibur Rahman Maritime University."/>
                <meta name="twitter:creator" content="@AAShemul"/>
                <meta name="twitter:image" content="https://blog.shemul.gq/img/Homepage.webp"/>
            </Head>
            <HomepageHeader/>
            <main>
                <Gap/>
                <BlogListHome/>
                <Gap/>
            </main>
        </Layout>
    );
}