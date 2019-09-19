import React, { Component } from 'react'
import './selectmap.css'

export default class SelectMap extends Component {
    render() {

        return (
            <div id='mymap' style={{ width: '100%', height: "100%" }}>
<input type="text" id="keyword" name="keyword" placeholder="请输入关键字：(选定后搜索)"/>
            </div>
        )
    }
    componentDidMount() {
        var map = new window.AMap.Map('mymap', {
            resizeEnable: true,
            center: [104.07, 30.67],//地图中心点
            zoom: 13,//地图显示的缩放级别
            keyboardEnable: false
        });
        window.AMap.plugin(['AMap.Autocomplete','AMap.PlaceSearch'],function(){
            var autoOptions = {
              city: "成都", //城市，默认全国
              input: "keyword"//使用联想输入的input的id
            };
            window.autocomplete= new window.AMap.Autocomplete(autoOptions);
            var placeSearch = new window.AMap.PlaceSearch({
                  city:'成都',
                  map:map
            })
            window.AMap.event.addListener(window.autocomplete, "select", function(e){
               //TODO 针对选中的poi实现自己的功能
               placeSearch.setCity(e.poi.adcode);
               placeSearch.search(e.poi.name)
            });
          });
    }
}

