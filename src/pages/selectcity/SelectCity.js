import React, { Component } from 'react'
import citydata from '../../json/city.json'
import BScroll from 'better-scroll'

export default class SelectCity extends Component {

  componentDidMount() {
    this.scroll = new BScroll('#area', {})
  }
  render() {
    return <div style={{height:'100%'}}>
      <div id="area" style={{ backgroundColor: '#fff', height: '100%', overflow: 'scroll' }}>

        <ul className="content" style={{ listStyle: 'none', margin: '0 20px' }}>
          {
            citydata.city.map(obj => <div key={obj.title} id={obj.title}>
              <h2 style={{ paddingTop: 20 }}>{obj.title}</h2>
              {
                obj.lists.map(cn => <li key={cn} style={{ lineHeight: '40px', borderBottom: '1px solid #CCC' }}>{cn}</li>)
              }
            </div>)
          }

        </ul>
      </div>
      <div style={{ width: 15, position: 'fixed', lineHeight: '20px', right: 0, top: 100 }}>
        {
          citydata.city.map(obj =>
            <p onClick={this.changeCity.bind(this,obj.title)} key={obj.title}>{obj.title}</p>
          )
        }
      </div>
    </div>
  }
  changeCity(cn) {
    this.scroll.scrollToElement('#' + cn, 600)
  }

}


