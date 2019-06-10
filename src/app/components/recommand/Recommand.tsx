import { Carousel } from 'antd';
import * as React from 'react'
import './Recommand.scss'
function onChange(a:number):void {
  console.log(a);
}
export default class Recommand extends React.Component{
  public render() {
    return (
      <div className="Recommand">
        <Carousel afterChange={onChange}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
        </Carousel>
      </div>
    )
  }
}
