export type Category = {
    name: string
    description: string
    providers: Array<ServiceProvider>
}

export type ServiceProvider = {
    description: string,
    name: string,
    address: string,
    phone: number,
    email: string,
    website: string,
    offeredServices: string,
}