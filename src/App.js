//Importando los componentes
import React from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import { ToDoList } from './components/ToDoList/ToDoList'
import { CountriesView } from './views/CountriesView'
import { CitiesView } from './views/CityView'
import { OrgView } from './views/OrgView'
import { NavbarToDo } from './components/ToDoList/NavbarToDo'
import { NotFoundView } from './views/NotFoundView'


const App = () => {
  return(
    <>
      <NavbarToDo />
      <div className="container">
        <Switch>
            <Route path="/" exact component={ToDoList}/>
            <Route path="/countries" exact component={CountriesView} />
            <Route path="/cities" exact component={CitiesView}/>
            <Route path="/org" exact component={OrgView}/>
            <Route component={NotFoundView} />
          </Switch>
      </div>
    </>
  )
}
  

export default App;
