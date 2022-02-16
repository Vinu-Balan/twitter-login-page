import React,{ Component } from 'react';
import Home from './HomeComponent';
import LoginPage from './LoginPageComponent';
import { Switch,Route,Redirect} from 'react-router-dom';

class Main extends Component{
    render(){
        return (
            <div>
               <Switch>
               <Route exact path='/home' component={Home} />
               <div className="mr-4">
               <Route exact path='/loginPage' component={LoginPage} />
               <Redirect to='/loginPage' />
               </div>
                </Switch>
            </div>
            
        );
    }
}

export default Main
