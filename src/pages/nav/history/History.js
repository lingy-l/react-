import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Flex } from 'antd-mobile';
import { IP } from '../../../api/api'

class History extends Component {

    render() {
        var show = this.props.h.length==0?"block":"none"
        return (
            <div style={{backgroundColor:'#fff',height:'100%'}}>
                <ul className='like'>
                    <li style={{borderBottom:'1px solid #eee'}}>
                        <h2>历史记录</h2>
                    </li>
                    <li style={{display:show,fontSize:42,textAlign:'center'}}>空空如也</li>
                    {this.props.h.map(val =>
                        <li key={val.id}>
                            <Flex align='center'>
                                <img src={IP + '/imgs/' + val.id + '.jpg'} />
                                <Flex.Item>
                                    <h3>{val.name} </h3>
                                    <p>{val.area}&emsp;{val.range}</p>
                                    <p>{val.type}&emsp;{val.point}m<sup>2</sup></p>
                                </Flex.Item>
                                <p className='price'>{val.price}/平</p>
                            </Flex>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
    componentDidMount() {
        console.log(this.props.h)
    }
}
export default connect(({ historyArr }) => {
    return { h: historyArr }
})(History)