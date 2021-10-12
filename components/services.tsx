import React from 'react'
import { Category } from '../types/cms'

type Props = {
    category: Category
}

const Services: React.FC<Props> = ({ category }) => {
    return (
        <div>
            {category.providers.map((service, k) => (
                <div key={k}>
                    <p>{service.name}</p>
                    <p>{service.website}</p>
                    <p>{service.offeredServices}</p>
                </div>
            ))}
        </div>
    )
}

export default Services
