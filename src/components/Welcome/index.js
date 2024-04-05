// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: true}

  onSubscribe = () => {
    this.setState(preState => ({isSubscribed: !preState.isSubscribed}))
  }

  render() {
    const {isSubscribed} = this.state

    let subBtn
    if (isSubscribed) {
      subBtn = 'Subscribe'
    } else {
      subBtn = 'Subscribed'
    }

    return (
      <div className="bg-container">
        <div>
          <h1 className="heading">Welcome</h1>
          <p className="para">Thank you! Happy Learning</p>
          <div className="btn-container">
            <button className="button" type="button" onClick={this.onSubscribe}>
              {subBtn}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Welcome
