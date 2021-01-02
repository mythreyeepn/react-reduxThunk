import React from 'react';
import{ BrowserRouter as Router ,Switch ,Route } from 'react-router-dom';
import UsersList from './components/usersList';
import AddUser from './components/AddUser';


 const RouterManager =() =>{
    return(
        <Router> 
        <div className="App"> 
         <Switch> 
           <Route exact path='/' component={UsersList}></Route> 
            <Route exact path='/addUser' component={AddUser}></Route> 
            <Route exact path='/Users' component={UsersList}></Route>
           {/*<Route exact path='/contact' component={Contact}></Route>  */}
         </Switch> 
       </div> 
    </Router>
    )
 }

 export default RouterManager;

 
