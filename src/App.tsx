import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Helmet} from 'react-helmet'
import { BulletService } from './services/bullet.service'
import { PageComponent } from './components/page.component'
import { Page } from './models/Page'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <Helmet>
        <title>OnBuJo: Home</title>
      </Helmet>
      <header className="App-header"> 
        <h1>OnBuJo</h1>
        <h2>Collection Name</h2>
        <PageComponent page={new Page(1, "My Page","")}/>
      </header>
    </div>
  )
}

export default App
