import React, { Component } from 'react'
import { Flex, WhiteSpace, WingBlank, InputItem, Button,Toast } from 'antd-mobile'
import { Link } from 'react-router-dom'
import './login.css'
import { login } from '../../api/api'


export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            acc: '',
            pwd: '',
            oldPwd: '',
            oldAcc: ''
        }
    }
    render() {
        return (
            <div>
                {/* logo */}
                <WhiteSpace size="xl" />
                <Flex justify="center" align='center' direction='column' style={{ height: 170 }}>
                    <img src={require('../../assets/images/logo.png')} alt="logo" />
                    <WhiteSpace size="md" />
                    <img src={require('../../assets/images/title.png')} style={{ height: '60px' }} alt="title" />
                </Flex>

                <WhiteSpace size="md" />

                <WingBlank size="lg">

                    <InputItem
                        clear
                        placeholder="请输入用户名/电话/邮箱"
                        value={this.state.acc}
                        onChange={(val) => {
                            this.setState({ acc: val })
                        }}
                    >
                        <div style={{ backgroundImage: `url(${require('../../assets/images/icon_user.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                    <InputItem
                        clear
                        type='password'
                        placeholder="请输入密码"
                        value={this.state.pwd}
                        onChange={(val) => {
                            this.setState({ pwd: val })
                        }}
                    >
                        <div style={{ backgroundImage: `url(${require('../../assets/images/icon_pwd.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                    <WhiteSpace size="md" />
                    <Button style={{ backgroundColor: '#FF9651', color: '#fff' }} onClick={this.toNav.bind(this)} activeStyle={{ backgroundColor: '#EC6333', color: '#FF9651' }}>登录</Button>

                    <WhiteSpace size="lg" />

                    <Flex justify='between' className='link'>
                        <Link to='/reg'>手机快速注册</Link>
                        <Link to='/forget'>忘记密码</Link>
                    </Flex>
                </WingBlank>
                <footer className="footer">
                    登录/注册即代表同意《房英汇用户使用协议》
                </footer>


            </div>
        )
    }
    toNav() {
        // 解构所需变量
        let { acc, pwd, oldAcc, oldPwd } = this.state;
        //判断值是否改变
        if (acc === oldAcc && pwd === oldPwd) return
        //保存当前输入的值
        this.setState({
            oldAcc: acc,
            oldPwd: pwd
        })
        //发送请求
        login(acc, pwd).then(result => {
            if (result === "fail") {
                Toast.fail('登录失败，请确认用户名或密码是否正确', 1);
            } else if (result === 'ok') {
                
                localStorage.setItem('user',acc)

                Toast.success('登录成功，即将前往首页', 1,()=>{
                    this.props.history.push('/')
                });
            }
        })
    }

}