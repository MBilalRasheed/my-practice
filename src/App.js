
import React from 'react';
import {Provider} from './Context';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Contacts from './components/Contacts';
import AddContact from './components/AddContacts';
import EditContact from './components/EditContact';
import About from './components/Pages/About';
import Header from './components/Header';
import NotFound from './components/Pages/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
  
<Provider>
    
    <Router>
      <Header branding='Contact Manager' />      
      <Switch>

      <Route exact path='/' component={AddContact}/>
      <Route exact path='/contact/contacts' component={Contacts}/>
      <Route exact path='/about/:name' component={About}/>
      <Route exact path='/contact/EditContact/:id' component={EditContact}/>
      <Route component={NotFound}/>
        

      </Switch>
    <div className="App">
    
  
    </div>

    </Router>
</Provider>   
  
  );
}

export default App;
