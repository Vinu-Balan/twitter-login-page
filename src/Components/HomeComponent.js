import React from 'react'
import { Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Posts from './Posts';
import './Home.css';
import Widgets from './Widgets';

function Home() {
    return (
        <div class="d-flex flex-row m-0 p-0">
        <div>
        <Sidebar />
        </div>
        <div class="d-flex flex-coloumn">
            <Feed class="tot-feed" />
        </div>
        <Widgets />
        </div>
    )
}

export default Home;