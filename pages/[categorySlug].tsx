import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'

import styles from '../styles/Home.module.css'
import { categoryNameToSlug } from '../utils'
import { attributes } from '../content/home.md'

import { Category } from '../types/cms'
import Link from 'next/link'
import Services from '../components/services'

type Params = {
    categorySlug: string
}

type Props = {
    category: Category
}

const { categories } = attributes as { categories: Array<Category> }
const categoriesBySlug = categories.reduce(
    (accum, category) => ({ ...accum, [categoryNameToSlug(category.name)]: category }),
    {} as { [slug: string]: Category }
)

export const getStaticPaths: GetStaticPaths<Params> = async () => {
    return {
        paths: Object.keys(categoriesBySlug).map((categorySlug) => {
            return { params: { categorySlug } }
        }),
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps<Props, Params> = ({ params }) => {
    if (!params?.categorySlug) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            category: categoriesBySlug[params.categorySlug],
        },
    }
}

const CategoryPage: NextPage<Props> = ({ category }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>RESPECT</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <div>
                    <Link href="/">
                        <a>back</a>
                    </Link>
                </div>

                <div>{category.name}</div>
                <div>{category.description}</div>
                <Services category={category} />
            </main>

            <footer className={styles.footer}></footer>
        </div>
    )
}

export default CategoryPage