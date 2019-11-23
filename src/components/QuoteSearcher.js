import React, { Component } from "react";
import Quote from "./Quote";
export default class QuoteSearcher extends Component {
  state = {
    quotes: [],
    fetching: false,
    likedCounter: 0,
    dislikedCounter: 0
  };

  componentDidMount() {
    this.search();
  }

  search = () => {
    fetch(`https://quote-garden.herokuapp.com/quotes/search/tree`)
      .then(res => res.json())
      .then(data => {
        //console.log(data["results"][0]);
        this.setState({ quotes: data["results"], fetching: true });
        //console.log(this.state.quotes);
      })
      .catch(console.error);
  };

  addLikes = () => {
    let newLiked = this.state.likedCounter + 1;
    this.setState({
      likedCounter: newLiked
    });
  };

  addDislikes = () => {
    let newDisliked = this.state.dislikedCounter + 1;
    this.setState({
      dislikedCounter: newDisliked
    });
  };

  render() {
    return (
      <div>
        <input placeholder="Search here"></input>
        <button>Search</button>
        <div> Liked: {this.state.likedCounter}</div>
        <div> disliked: {this.state.dislikedCounter}</div>
        {!this.state.fetching && "Loading..."}
        {this.state.quotes.map(el => {
          return (
            <Quote
              quoteText={el.quoteText}
              quoteAuthor={el.quoteAuthor}
              addLikes={this.addLikes}
              addDislikes={this.addDislikes}
            />
          );
        })}
      </div>
    );
  }
}
