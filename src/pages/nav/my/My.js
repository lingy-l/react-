import React, { Component } from 'react'
import { List, WhiteSpace, Flex } from 'antd-mobile';
import './my.css'

export default class My extends Component {
    constructor() {
        super()
        this.state = {
            data: [
                { num: 0, icon: 'wallet.png', text: '钱包' },
                { num: 0, icon: 'discount.png', text: '优惠' },
                { num: 0, icon: 'integral.png', text: '积分' },
            ],
            lists: [
                { id: 1, icon: 'integral_b.png', title: '我的积分',path:'/integral' },
                { id: 2, icon: 'subscribe.png', title: '我的订阅' ,path:'/subscribe' },
                { id: 3, icon: 'icon_chat.png', title: '微聊联系人',path:'Chat'  },
                {},
                { id: 4, icon: 'counter.png', title: '房贷计算器' ,path:'/counter' },
                { id: 5, icon: 'myhouse.png', title: '我的房子' ,path:'/myhouse' },
                {},
                { id: 6, icon: 'record.png', title: '我的看房记录',path:'History'  },
                { id: 7, icon: 'qa.png', title: '我的问答' ,path:'/qa' },
                {},
                { id: 8, icon: 'set_b.png', title: '设置',path:'/set'  },
                { id: 9, icon: 'feedback.png', title: '意见反馈',path:'/feedback'  }
            ],
            msg:[{path:'/login',url:'登录/'},
            {path:'/reg',url:'注册'}]
        }
    }
    render() {
        return (
            <div>
                <div style={{ backgroundColor: 'rgb(255, 150, 81)', padding: '0 15px', color: '#fff' }}>
                    <WhiteSpace size="lg" />

                    <Flex algin='flex-start' justify='center'>
                        <img src={require('../../../assets/images/girl.png')} />
                        <Flex.Item>
                            <h2 className='topTitle'>

                                {this.state.msg.map(val=> <span key={val.url} onClick={this.changePath.bind(this, val.path)}>{val.url}</span>)}

                            </h2>
                            <p className='topTitle'>可以与经纪人发起聊天</p>
                        </Flex.Item>
                        <img src={require('../../../assets/images/set.png')} />
                    </Flex>
                    <WhiteSpace size="lg" />

                    <Flex className="money">
                        {this.state.data.map(val=><Flex.Item key={val.text}>
                            <p style={{ textAlign: 'center' }}>{val.num}</p>
                            <Flex algin='center' justify='center'><img src={require('../../../assets/images/'+val.icon)} /> <label>{val.text} </label></Flex>
                        </Flex.Item>)}
                    </Flex>
                    <WhiteSpace size="lg" />
                </div>

                <List renderHeader={() => ''}>
                    {this.state.lists.map(val => {
                        if (val.id) {
                            return <List.Item
                                key={val.id}
                                thumb={require('../../../assets/images/' + val.icon)}
                                arrow="horizontal"
                                onClick={this.changeUrl.bind(this,val.path)}
                            >{val.title}</List.Item>
                        } else {
                            return <div style={{ height: 10, backgroundColor: '#f5f5f5' }}></div>
                        }
                    })
                    }
                </List>
            </div>
        )
    }
    changePath(path) {
        if(!localStorage.getItem('user'))
        this.props.h.push(path)
    }
    changeUrl(url) {
        if(url.indexOf('/')===-1){//微聊和历史记录
            this.props.change(url)
        }else{
            window.location.href='http://fangd.sinaapp.com/'
        }
        console.log(this.props)
    }
    componentDidMount(){
        let user=localStorage.getItem('user');
        this.setState({
            msg:user?[{path:'',url:user}]:[{path:'/login',url:'登录/'},
            {path:'/reg',url:'注册'}]
        })
    }
}
