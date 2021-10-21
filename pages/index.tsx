import type { NextPage } from 'next'
import Head from 'next/head'

import { attributes, react as HomeContent } from '../content/home.md'

// import styles from '../styles/pages/Home.module.scss'

import { Category } from '../types/cms'

import { Categories } from '../components/categories'

const Home: NextPage = () => {
    const { title, categories } = attributes as { title: string; categories: Array<Category> }

    return (
        <>
            <Head>
                <title>Respect</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="u-content-width rich-text">
                <h1>{title}</h1>
                <HomeContent />
                <p>Our services:</p>
                <Categories categories={categories} />
            </main>
        </>
    )
}

export default Home
