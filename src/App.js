import React from 'react'
import './App.css'
import AppleItem from './AppleItem'
import { inject, observer } from 'mobx-react'

@inject('store')
@observer
class App extends React.Component {
  //unEaten apple
  getAppleItem() {
    let res = []

    this.props.store.apples.forEach(apple => {
      if (!apple.isEaten) {
        res.push(
          <AppleItem apple={apple} eatApple={this.props.store.eatApple} key={apple.id} />
        )
      }

      if (!res.length || res.length === 0) {
        res.push(
          <div className="empty-tip" key="empty">
            苹果篮子啥也没有
          </div>
        )
      }
    })

    return res
  }


  render() {
    let { status, isPicking, buttonText, pickApple } = this.props.store
    let {
      curApple: { quantity: notEatenQuantity, weight: notEatenWeight },
      eatenApple: { quantity: EatenQuantity, weight: EatenWeight },
    } = status
    return (
      <div className="appleBasket">
        <div className="title">苹果篮子</div>
        <div className="stats">
          <div className="section">
            <div className="head">当前</div>
            <div className="content">{notEatenQuantity}个苹果，{notEatenWeight}克
            </div>
          </div>
          <div className="section">
            <div className="head">已吃掉</div>
            <div className="content">{EatenQuantity}个苹果，{EatenWeight}克</div>
          </div>
          <div className="appleList">
            {this.getAppleItem()}
          </div>
          <div className="btn-div">
            <button className={isPicking ? 'disabled' : ''} onClick={() => pickApple()}>{buttonText}</button>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
