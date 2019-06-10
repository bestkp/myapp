import * as React from 'react'
import './Header.scss'

export default class Header extends React.Component{
  public render() {
    return (
      <div className="Header">React Music, {process.env.REACT_APP_URL}</div>
    )
  }
}
