// 4 - componente com extensão
import React from 'react'

interface Props {
    name: string
}

const SecondComponent = (props: Props) => {
    return (
        <div>
            <p>Meu segundo componente!</p>
            <p>Tem até uma prop: {props.name}</p>
        </div>
    )
}

export default SecondComponent
