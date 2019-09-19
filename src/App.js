import React, { Component } from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'
import Login from './pages/login/Login'
import Reg from './pages/reg/Reg'
import Nav from './pages/nav/Nav'
import SelectCity from './pages/selectcity/SelectCity'
import SelectMap from './pages/map/SelectMap'
import Forget from './pages/forget/Forget'
import Error404 from './pages/error404/Error404'


// console.log(store.getState())
export default class App extends Component {
    render() {
        return (<Provider store={store}>
            <HashRouter>
            <Switch>
                <Route path='/' exact component={Nav} />
                <Route path='/login' component={Login} />
                <Route path='/reg' component={Reg} />
                <Route path='/selectcity' component={SelectCity} />
                <Route path='/forget' component={Forget} />
                <Route path='/selectmap' component={SelectMap} />
                <Route component={Error404} />
            </Switch>
        </HashRouter>
        </Provider>)
    }

}
