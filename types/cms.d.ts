export type Category = {
    categoryName: string
}

export type ServiceProvider = {
    description: string,
    name: string,
    address: string,
    phone: number,
    email: string,
    website: string,
    offeredServices: string,
    category: Array<Category>,
}