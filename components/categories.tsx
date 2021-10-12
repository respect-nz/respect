import Link from 'next/link'
import { Category } from '../types/cms'
import { categoryNameToSlug } from '../utils'

type CategoriesProps = {
    categories: Array<Category>
}

export const Categories = ({ categories }: CategoriesProps) => {
    return (
        <ul>
            {categories.map((cat, k) => (
                <li key={k}>
                    <Link href={`/${categoryNameToSlug(cat.name)}`}>
                        <a>{cat.name}</a>
                    </Link>
                </li>
            ))}
        </ul>
    )
}
