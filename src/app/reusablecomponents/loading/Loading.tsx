import React, {Component} from 'react'
import loadingGif from './loading.gif'
import './Loading.scss'

interface LoadingProps {
  text?: string
}

const Loading: React.SFC<LoadingProps> = ({text = '加载中'}) => (
  <div className="loading">
    <img src={loadingGif} className="loading-img"/>
    <p className="loading-text">{text}</p>
  </div>
)

export default Loading

