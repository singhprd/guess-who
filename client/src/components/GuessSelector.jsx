var React = require('react');

var GuessSelector = React.createClass({
  getInitialState: function() {
    return {selected: 0, guessResult: null};
  },
  createDropDown: function(){
    var cardData = this.props.cardData;
    var optionArray = [];
    for(var each of cardData) {    
      var index = cardData.indexOf(each);
      optionArray.push(<option key={index} value={index} >{each.name}</option>);
    }
    return optionArray;
  },
  handleOnChange: function(e){
    e.preventDefault();
    this.setState({selected: e.target.value});
  },
  handleClick: function(){
    var guessResult = this.props.checkGuess(this.state.selected);
    if (guessResult) {
      this.setState({guessResult: "You have guessed wrong, your punishment is Java"});
    } else {
      this.setState({guessResult: "You guessed correctly, puppies rain from the sky!"});
    }
  },
  render: function(){
    return (
      <div>
        <select onChange={this.handleOnChange}>
          {this.createDropDown()};
        </select>
        <button className="pure-button pure-button-primary" onClick={this.handleClick}>Guess Who!</button>
        <h1>{this.state.guessResult}</h1>
      </div>
      )
  }
});

module.exports = GuessSelector;