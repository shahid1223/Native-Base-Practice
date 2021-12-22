import React,{useState} from 'react'
import Context from './context'
const ContextState = (props) => {
    const [data , setData] = useState([
        {text:"Hello"},
        {text:"Hello"},
        {text:"Hello"},
        {text:"Hello"},
    ])
    const name = "Shahid"
    return (
        <Context.Provider value={{data , setData}}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextState
