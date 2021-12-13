import React from 'react'
import SecondComponent from './SecondComponent'

interface Props {
    title: string,
    content: string,
    commentsQty: number,
    tags: string[]
    // 8 - enum
    category: Category
}

// 8 - enum
export enum Category {
    JS = "JavaScript",
    TS = "TypeScript",
    P = "Python",
}

const Destructuring = ({title, content, commentsQty, tags, category}:Props):JSX.Element => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{content}</p>
            <p>Quantidade de comentários: {commentsQty}</p>
            <div>
                {tags.map(tag => (
                    <span>#{tag}</span>
                ))}
            </div>
            <h4>Categoria: {category}</h4>
        </div>
    )
}

export default Destructuring
