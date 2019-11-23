import React, { Component } from "react";
import Quote from "./Quote";
export default class QuoteSearcher extends Component {
  state = {
    quotes: [],
    fetching: false
  };

  componentDidMount() {
    fetch(`https://quote-garden.herokuapp.com/quotes/search/tree`)
      .then(res => res.json())
      .then(data => {
        //console.log(data["results"][0]);
        this.setState({ quotes: data["results"], fetching: true });
        //console.log(this.state.quotes);
      })
      .catch(console.error);
  }
  render() {
    return (
      <div>
        {!this.state.fetching && "Loading..."}
        {this.state.quotes.map(el => {
          return (
            <Quote quoteText={el.quoteText} quoteAuthor={el.quoteAuthor} />
          );
        })}
      </div>
    );
  }
}
