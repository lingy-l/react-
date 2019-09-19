import React, { Component } from 'react'
import { InputItem, WhiteSpace, WingBlank, Button } from 'antd-mobile'
import { valitecode } from '../../api/api'

export default class Forget extends Component {
    constructor() {
        super()
        this.state = {
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
                        type='number'
                        clear
                        extra='获取验证码'
                        onExtraClick={this.valite.bind(this)}
                        placeholder="请输入验证码"
                        value={this.state.newcode}
                        onChange={val => { this.setState({ newcode: val }) }}
                    />
                    <Button style={{ backgroundColor: '#FF9651', color: '#fff' }}>找回密码</Button>
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
}
