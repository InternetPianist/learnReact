import React, { Component } from 'react'
// import axios from 'axios'
import PubSub from 'pubsub-js'
export default class Header extends Component {
    search = async () => {
        // // 获取用户的输入(连续解构赋值+重命名)
        const {keyWordElement:{value:keyWord}} = this //keyWordElement并没有定义
        // 发送请求前通知List更新状态
        PubSub.publish('updateAppState',{isLoading:true,isFirst:false})
       //#region  发送网络请求--使用axios发送
        // axios.get(`/api1/search/users?q=${keyWord}`).then(
        //     response => {
        //         // 请求成功后通知List更新状态
        //         PubSub.publish('updateAppState',{isLoading: false,users: response.data.items})
        //     },    
        //     error => {
        //         // 请求失败后通知List更新状态
        //         PubSub.publish('updateAppState',{isLoading:false,err: error.message})
        //     }
        // )
       //#endregion
        
       //#region 发送网络请求---使用fetch发送 (未优化)
    //    fetch(`api1/search/users2?q=${keyWord}`).then(
    //        response => {
    //            console.log('联系服务器成功了')
    //            return response.json()
    //         },
    //        error => {
    //            console.log('联系服务器失败了',error)
    //             return new Promise(() =>{})
    //         }
    //     ).then(
    //         response => {
    //             console.log('获取数据成功了',response)
    //         },
    //         error => {
    //             console.log('获取数据失败了',error)
    //         }
    //     )
    //#endregion
      
        //#region 发送网络请求---使用fetch发送 (优化---catch捕获错误)
        // fetch(`api1/search/users2?q=${keyWord}`).then(
        //     response => {
        //         console.log('联系服务器成功了')
        //         return response.json()
        //      }
        //  ).then(
        //      response => {
        //          console.log('获取数据成功了',response)
        //      }
        //  ).catch(err => {
        //      console.log('请求出错',err)
        //  })
        //#endregion
        
        //发送网络请求---使用fetc发送 (优化---async { await try{}catch(err){} }捕获错误 )
        try{
            const response = await fetch(`api1/search/users2?q=${keyWord}`)
            const data = await response.json()
            PubSub.publish('updateAppState',{isLoading:false,users:data.items})
            console.log(data)
        }catch(error) {
            console.log('请求出错',error)
            PubSub.publish('updateAppState',{isLoading:false,err:error.message})
        }
    }
    render() {
        return (
            <section className="jumbotron">
            <h3 className="jumbotron-heading">Search Github Users</h3>
            <div>
              <input ref={c => this.keyWordElement = c} type="text" placeholder="enter the name you search" />
              &nbsp;<button onClick={this.search}>Search</button>
            </div>
          </section>
        )
    }
}
