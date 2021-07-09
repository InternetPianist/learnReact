import React, {Component} from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import News from './News'
import Message from './Message'
import MyNavLink from '../../components/MyNavLink'

export default class Home extends Component {
    render(){
        // console.log('Home路由组件的props是：',this.props)
        return (
            <div>
                <div>Home</div>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            <MyNavLink to="/home/news">News</MyNavLink>
                        </li>
                        <li>
                            <MyNavLink to="/home/message">Message</MyNavLink>
                        </li>
                    </ul>
                    <div>
                        <Switch>
                            <Route path="/home/news" component={News}/>
                            <Route path="/home/message" component={Message}/>
                            <Redirect  to="/home/news"/>
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}