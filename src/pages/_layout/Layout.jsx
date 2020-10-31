import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Sidebar from '../../components/sidebar/Sidebar';
import Home from '../home/Home';
import YesOrNo from '../yes_or_no/YesOrNo';
import KayneWest from '../kanye_west/KayneWest';

import './Layout.css';

export default function Layout() {
    return <Router>
        <div>
            <Sidebar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/yesorno">
                    <YesOrNo />
                </Route>
                <Route path="/kaynewest">
                    <KayneWest />
                </Route>
            </Switch>
        </div>
    </Router>
}