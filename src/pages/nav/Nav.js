import React, { Component } from 'react'
import { TabBar } from 'antd-mobile'
import './nav.css'
import Index from './index/Index'
import History from './history/History'
import Chat from './chat/Chat'
import My from './my/My'

export default class Nav extends Component {
    constructor() {
        super();
        this.state = {
            selectedTab: 'Index',
            hidden: false,
            iconlists: [
                { title: '首页', key: 'Index', icon: 'icon_index.png', selectedicon: 'icon_index_s.png', },
                { title: '微聊', key: 'Chat', icon: 'icon_chat.png', selectedicon: 'icon_chat_s.png', },
                { title: '足迹', key: 'History', icon: 'icon_his.png', selectedicon: 'icon_his_s.png', },
                { title: '我的', key: 'My', icon: 'icon_my.png', selectedicon: 'icon_my_s.png', },
            ]
        }
    }
    render() {
        return (
            < div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}  >
                <TabBar
                    //未选中的字体颜色
                    unselectedTintColor="#949494"
                    // 选中的字体颜色
                    tintColor="#FF9651"
                    // 背景色
                    barTintColor="white"
                // 默认在底部
                // tabBarPosition='bottom'
                >

                    {this.state.iconlists.map(obj => <TabBar.Item
                        // 标题文字
                        title={obj.title}
                        // 唯一标识
                        key={obj.key}
                        // 默认展示图片
                        icon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: `url(${require('../../assets/images/' + obj.icon)}) center center /  21px 21px no-repeat`
                        }}
                        />
                        }
                        // 选中的展示图片
                        selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: `url(${require('../../assets/images/' + obj.selectedicon)})  center center /  21px 21px no-repeat`
                        }}
                        />
                        }
                        // 是否选中
                        selected={this.state.selectedTab === obj.key}
                        // 徽标数
                        // badge={1}
                        // bar 点击触发，需要自己改变组件 state & selecte={true}
                        onPress={() => {
                            this.setState({
                                selectedTab: obj.key,
                            });
                        }}
                    >
                         {this.renderContent()}
                    </TabBar.Item>)}
                </TabBar>
            </div >
        )
    }
    renderContent(){
        switch(this.state.selectedTab){
            case 'Index':return <Index h={this.props.history}/>
            case 'Chat':return <Chat/>
            case 'History':return <History/>
            case 'My':return <My h={this.props.history} change={this.changeTab.bind(this)}/>
        }
    }
    changeTab(state){
        // console.log(state)
        this.setState({
            selectedTab:state
        })
    }
}


