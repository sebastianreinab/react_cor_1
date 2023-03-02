import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Componente_1 from './Componente_1'
import Props from './Props'
import Ejer from './Ejer'
import Eventos from './Eventos'
import './index.css'
import PrimerHook from './hooks/UseEstate'
import UseState from './hooks/UseState'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
    <Componente_1 saludar="hola Aru"/>
    <Props nombre={'Sebastián'} edad={24}/>
    <Ejer value={5}/>
    <Eventos />
    <PrimerHook />
    <UseState />
  </React.StrictMode>,
)
