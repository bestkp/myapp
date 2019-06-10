import React,{ Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Tab.scss'

class Tab extends Component{
  public render(){
    return (
      <div className="tab">
        <NavLink to="/recommand" className="tab-item" activeClassName="link-selected">
          <span className="tab-link">推荐</span>
        </NavLink>
        <NavLink to="/singer" className="tab-item" activeClassName="link-selected">
          <span className="tab-link">歌手</span>
        </NavLink>
        <NavLink to="/rank" className="tab-item" activeClassName="link-selected">
          <span className="tab-link">排行</span>
        </NavLink>
        <NavLink to="/search" className="tab-item" activeClassName="link-selected">
          <span className="tab-link">搜索</span>
        </NavLink>
      </div>
    )
  }
}

export default Tab;
