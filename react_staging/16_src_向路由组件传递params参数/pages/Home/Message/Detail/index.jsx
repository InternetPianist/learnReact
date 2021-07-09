import React, { Component } from 'react'

const DetailData = [
    {id:"01",content:"你好,中国"},
    {id:"02",content:"Hello,China"},
    {id:"03",content:"こんにちは中国"}
]
export default class index extends Component {
    render() {
        // 接收params参数
        const {id,title} = this.props.match.params
        const findDetail = DetailData.find(item => {
            return item.id === id
        })
        return (
            <ul>
                <li>Id:{id}</li>
                <li>Title:{title}</li>
                <li>Content:{findDetail.content}</li>
            </ul>
        )
    }
}
