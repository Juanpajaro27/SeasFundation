import React from 'react'
import ReactDOM from 'react-dom/client'
import {Greeting} from "./Greeting"
import {Button} from "./Button"

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<div>
    <Greeting tittle="Hola"/>
    <Button text="Mi texto"/>
</div>)