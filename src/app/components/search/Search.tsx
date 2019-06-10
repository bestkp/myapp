import * as React from 'react'
import Loading from 'reuse/loading/Loading'
import './Search.scss'

export default class Search extends React.Component{
  public render() {
    return (
      <div className="Search">Hello Search
        <Loading/>
      </div>
    )
  }
}
