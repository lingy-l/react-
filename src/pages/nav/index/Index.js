import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Flex, InputItem, Icon, WhiteSpace, Carousel,  Grid  } from 'antd-mobile';
import './index.css'

import {gethouselist,IP} from '../../../api/api'

class Index extends Component {
  constructor() {
    super()
    this.state = {
      data: [{ id: 1, src: 'banner1.jpg' }, { id: 2, src: 'banner1.jpg' }],
      pickerValue: [],
      visible: false,
      imgHeight: 176,
      data1: [
        { icon: 'house1.png', text: '新房' },
        { icon: 'house2.png', text: '二手房' },
        { icon: 'house3.png', text: '租房' },
        { icon: 'house4.png', text: '商铺写字楼' },
        { icon: 'house5.png', text: '卖房' },
        { icon: 'house6.png', text: '海外房产' },
        { icon: 'house7.png', text: '小区房价' },
        { icon: 'house8.png', text: '问答' },
        { icon: 'house9.png', text: '小区房价' },
        { icon: 'house0.png', text: '问答' }
      ].map(val => {
        return { icon: require('../../../assets/images/' + val.icon), text: val.text }
      }),
      data2: [
        { icon: 'wiki1.png', text: '我要贷款' },
        { icon: 'wiki2.png', text: '房贷计算' },
        { icon: 'wiki3.png', text: '知识' },
        { icon: 'wiki4.png', text: '扫一扫' }
      ].map(val => {
        return { icon: require('../../../assets/images/' + val.icon), text: val.text }
      }),
      city:'定位中'

    }
  }

  render() {
    return (
      <div>
        {/* 顶部搜索栏 */}
        <Flex style={{ backgroundColor: 'rgb(255, 150, 81)', height: 46 }}>
          <div className='coutry' onClick={this.selectPath.bind(this,'selectcity')}>
            {this.state.city}
            ▼
          </div>


          <Flex.Item style={{ borderRadius: '20px' }}>
            <InputItem
              placeholder="找好房，上房英汇APP"
            >
              <Icon type="search" size='sm' color='#ccc' />
            </InputItem>
          </Flex.Item>

          <span className='map'><img src={require('../../../assets/images/map.png')}   onClick={this.selectPath.bind(this,'selectmap')}/></span>
        </Flex>



        {/* 轮播图 */}
        <Carousel
          autoplay={false}
          infinite
          autoplay
        >
          {this.state.data.map(val => (
            <a
              key={val.id}
              href="https://cd.focus.cn/zixun/f32133c5370395cd.html"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={require('../../../assets/images/' + val.src)}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>

        {/* 菜单 */}

        <Grid style={{backgroundColor:'#fff'}} data={this.state.data1} isCarousel hasLine={false} square={false} onClick={_el => console.log(_el)} />
        <WhiteSpace size="lg" />

        {/* 房产全百科 */}
        {/* <WingBlank> */}
          <Flex style={{backgroundColor:'#fff',padding:'5px 3% 0'}}><h3>房产全百科</h3><p style={{ color: '#aaa' }}>专业的买房攻略</p></Flex>

          <Grid data={this.state.data2} square={false} hasLine={false} onClick={_el => console.log(_el)} />
        {/* </WingBlank> */}
         <WhiteSpace size="lg" />

        {/* 猜你喜欢 */}

          <ul className='like'>
            <li>
              <p>猜你喜欢</p>
            </li>
            {this.props.houseInfo.map(val=>
            <li key={val.id} onClick={this.clickHouse.bind(this,val)}>
              <Flex align='center'>
                <img src={IP+'/imgs/'+val.id+'.jpg'} />
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
  //选择城市跳转
  selectPath(path) {
    // console.log(this.props)
    this.props.h.push('/'+path)
  }
  componentDidMount(){
    //只获取一次后台数据
    if(this.props.houseInfo.length===0){
      gethouselist().then(data=>{
        //保存到store中
      this.props.dispatch({
        type:'changeHouseInfo',
        house:data
      })
    })
    }
    

    const _this=this;
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: [{ id: 1, src: 'banner1.jpg' },
        { id: 2, src: 'banner2.jpg' },
        { id: 3, src: 'banner3.jpg' },
        { id: 4, src: 'banner4.jpg' }]
      });
    }, 100);

        //获取用户所在城市信息
        function showCityInfo() {
          //实例化城市查询类
          var citysearch = new window.AMap.CitySearch();
          //自动获取用户IP，返回当前城市
          citysearch.getLocalCity(function(status, result) {
              if (status === 'complete' && result.info === 'OK') {
                  if (result && result.city && result.bounds) {
                      var cityinfo = result.city;
                      // var citybounds = result.bounds;
                      //地图显示当前城市
                      // map.setBounds(citybounds);
                      _this.setState({city:cityinfo})
                  }
              } else {
                  _this.setState({city:result.info})

              }
          });
      }
      showCityInfo()
  }
  clickHouse(house){
      console.log(house)

      this.props.dispatch({
        type:'changeHouse',
        house
      })
  }
}

export default connect(({houseInfo})=>{
  return {houseInfo}
})(Index)