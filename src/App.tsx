import React, { useState } from 'react'
import './App.css'
import {Helmet} from 'react-helmet'
import { CollectionComponent } from './components/collection/collection.component'
import { Collection } from './models/Collection'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <Helmet>
        <title>OnBuJo: Home</title>
      </Helmet>
      <header className="App-header"> 
        <h1>OnBuJo</h1>
      </header>
      
      <CollectionComponent collection={new Collection("d8157cd8-5c8e-4ae0-a24d-d131740aeb37", "My Collection")}/>
      
    </div>
  )
}

export default App
