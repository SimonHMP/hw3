import React, { Component } from "react";

export default class Quote extends Component {
  state = {
    liked: "",
    divStyle: ""
  };

  likeFunc = () => {
    this.setState({ liked: true, divStyle: "green" });
    //console.log(this.state.liked);
  };
  dislikeFunc = () => {
    this.setState({ liked: false, divStyle: "red" });
    //console.log(this.state.liked);
  };
  render() {
    let styler = {
      color: this.state.divStyle
    };
    return (
      <div style={styler}>
        {this.props.quoteText}
        <button onClick={this.likeFunc}>Lik</button>
        <button onClick={this.dislikeFunc}>dislik</button>
        <div>By:{this.props.quoteAuthor}</div>
      </div>
    );
  }
}
//style={this.state.divStyle}
