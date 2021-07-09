import React, { Component } from 'react'
// import qs from 'querystring'
const DetailData = [
    {id:"01",content:"你好,中国"},
    {id:"02",content:"Hello,China"},
    {id:"03",content:"こんにちは中国"}
]
export default class Detail extends Component {
    render() {
        // 接收params参数
        // const {id,title} = this.props.match.params
        
        // 接收search参数
        // const {search} = this.props.location
        // const {id,title} = qs.parse(search.slice(1))

        // 接收state参数
        const {id,title} = this.props.location.state || {}
     
        const findDetail = DetailData.find(item => {
            return item.id === id
        }) || {}
        return (
            <ul>
                <li>Id:{id}</li>
                <li>Title:{title}</li>
                <li>Content:{findDetail.content}</li>
            </ul>
        )
    }
}
