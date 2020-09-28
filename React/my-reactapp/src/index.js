import React from 'react'
import ReactDom from 'react-dom'
import {createStore} from 'redux'
import './app.css'
import APP from './app'
import Reducer from './reducer'
import {BrowserRouter} from 'react-router-dom'

const store = createStore(Reducer)

const render = () => {
    ReactDom.render(
    <BrowserRouter>
       <APP store = {store}/>
    </BrowserRouter>
    , 
    document.querySelector('#root'))
}

render()
store.subscribe(render)