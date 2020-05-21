import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "./style.css";

class ErrorToast extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    const { msg } = this.props
    return (
      <div>
        <div className="errorToast" ref={this.myRef} style={{opacity: 0}}>
          <div className="errorToast_text">
            {msg}
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    let _this = this;
    setTimeout(() => {
      _this.myRef.current.style.opacity = 1;
    }, 10);
    setTimeout(() => {
      _this.myRef.current.style.opacity = 0;
      this.destroy()
    }, 3000);
  }

  destroy() {
    const { div } = this.props;
    setTimeout(() => {
      document.body.removeChild(div);
    }, 2000);
    
  }
}

ErrorToast.showToast = function (msg) {
  let div = document.createElement('div');
  document.body.appendChild(div);
  ReactDOM.render(<ErrorToast msg={msg} div={div} />, div);
}

export default ErrorToast
