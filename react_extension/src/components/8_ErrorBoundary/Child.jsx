import React, { Component } from 'react'

export default class Child extends Component {
    state = {
        users: '111'
        // users:[
        //     {id:'001',name:'dearv',age:20},
        //     {id:'002',name:'dearv',age:20},
        //     {id:'003',name:'dearv',age:20}
        // ]
    }
    render() {
        return (
            <div>
                <h2>我是Child组件</h2>
                {
                    this.state.users.map(userObj => {
                        return <h4 key={userObj.id}>{userObj.name}----{userObj.age}</h4>
                    }) 
                }
            </div>
        )
    }
}
