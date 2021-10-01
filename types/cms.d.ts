export type Category = {
    categoryName: string
}

export type ServiceProvider = {
    organisationType: string,
    name: string,
    address: string,
    phone: number,
    email: string,
    website: string,
    offeredServices: string,
    category: Array<Category>,
}