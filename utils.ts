import slugify from 'slugify'

export const categoryNameToSlug = (name: string) =>
    slugify(name, {
        replacement: '-',
        lower: true,
        strict: true,
        locale: 'en',
        trim: true,
    })
