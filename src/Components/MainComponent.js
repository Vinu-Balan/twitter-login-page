import React,{ Component } from 'react';
import Login from './LoginComponent';
import Footer from './FooterComponent';

class Main extends Component{
    render(){
        return (
            <div>
                <Login />
                <Footer />
            </div>
        );
    }
}

export default Main
