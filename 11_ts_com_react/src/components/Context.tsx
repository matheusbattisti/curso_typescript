import React, {useContext} from 'react'

import { AppContext } from '../App'

const Context = () => {

    const details  = useContext(AppContext)

    return (
        <>
        {details && (
            <div>
            <h2>Linguagem: {details.language}</h2>
            <h4>FW: {details.framework}</h4>
            <p>Qtd: {details.projects}</p>
            </div>
        )}
        </>
    )
}

export default Context
