import React from 'react'
import {BrowserRouter as Router, Switch,Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import {Provider } from 'react-redux'
import { createStore } from 'redux'
import userReducer from './Store/Reducer/User'
import style from './App.module.css'

const store = createStore(userReducer)

const App = () => {
  return (
    <div className={style.app}>
   <Provider store={store} >
        <Router>
      <Switch>
        <Route exact path='/' component={Home}></Route>
      </Switch>
    </Router> 

    </Provider>
    </div>
 
  
  )
}

export default App
