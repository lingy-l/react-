import React, { Component } from 'react'
import { InputItem, WhiteSpace, WingBlank, Checkbox, Button, Toast } from 'antd-mobile'
import { Link } from 'react-router-dom'
import './reg.css'
import { reg, valitecode } from '../../api/api'

export default class Reg extends Component {
    constructor() {
        super()
        this.state = {
            acc: '',
            pwd: '',
            code: '',
            newcode: '',
            checked: false
        }
    }
    render() {
        return (
            <div>
                <WhiteSpace size="lg" />
                <WingBlank>
                    <InputItem
                        clear
                        placeholder="请输入手机"
                        value={this.state.acc}
                        onChange={val => {
                            this.setState({ acc: val })
                        }}
                    />
                    <InputItem
                        clear
                        type='password'
                        placeholder="请输入密码"
                        value={this.state.pwd}
                        onChange={val => {
                            this.setState({ pwd: val })
                        }}
                    />
                    <InputItem
                        type='number'
                        clear
                        extra='获取验证码'
                        onExtraClick={this.valite.bind(this)}
                        placeholder="请输入验证码"
                        value={this.state.newcode}
                        onChange={val => { this.setState({ newcode: val }) }}
                    />
                    <WhiteSpace size="lg" />

                    <Checkbox checked={this.state.checked} onChange={() => {
                        this.setState({
                            checked: !this.state.checked
                        })
                    }}>
                        我已同意<span>《用户服务协议》及《隐私权政策》</span>
                    </Checkbox>

                    <WhiteSpace size="lg" />

                    <Button style={{ backgroundColor: '#FF9651', color: '#fff' }} onClick={this.newReg.bind(this)}>注册</Button>
                    <WhiteSpace size="lg" />
                    <Link to='/login'>已有账号</Link>

                </WingBlank>

            </div>
        )
    }
    //获取验证码
    valite() {
        valitecode().then(result => {
            // console.log(result)
            this.setState({
                code: result
            })
        })
    }
    // 用户注册
    newReg() {
        let { acc, pwd, code, newcode } = this.state;
        console.log(acc, pwd, code, newcode)
        if (code == newcode && newcode > 1e5) {
            reg(acc, pwd).then(result => {
                if (result === 'ok') {
                    Toast.success('注册成功，请登录！！！', 1, () => { this.props.history.push('/login') });

                }
            })
        }

    }
    // successToast() {
    //     Toast.success('注册成功，请登录！！！', 1,()=>{this.props.history.push('/login')});
    //   }
}
