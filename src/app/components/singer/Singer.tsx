import {getBindingStatus} from 'api/api'
import * as React from 'react'
import './Singer.scss'

export default class Singer extends React.Component{
  public componentDidMount(): void {
    // getBindingStatus({username: 'admin'}).then((res: any) => {
    //   debugger
    // })
  }

  public render() {
    return (
      <div className="Singer">Hello Singer</div>
    )
  }
}
