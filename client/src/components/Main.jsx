var React = require('react');
var Card = require('./Card');
var CardContainter = require('./CardContainter');
var GuessSelector = require('./GuessSelector');
var AskQuestion = require('./AskQuestion');

var Main = React.createClass({
  getInitialState: function() {
    var batmanCard = new Card("Batman", false, "url");

    var randomAnswer = this.props.cardArray[Math.floor(Math.random() * this.props.cardArray.length)];
    return {cardData: this.props.cardArray, answer: randomAnswer}
  },
  componentDidMount: function(){

  },
  checkGuess: function(indexOfGuess){
    var indexOfAnswer = this.state.cardData.indexOf(this.state.answer);
    if(indexOfAnswer == indexOfGuess) {
      return true;
    } else {
      return false;
    }
  },
  askForHint: function(item) {
    for( var each of this.state.cardData ) {
      if (each.item = true) { 
        each.currrentHint = true
      } else {
        each.currrentHint = false
      }
    };
  },
  render: function(){
    return(
      <div>
        <CardContainter cardData={this.state.cardData}/>
        <GuessSelector cardData={this.state.cardData} checkGuess={this.checkGuess}/>
        <AskQuestion askForHint={this.askForHint}/>
      </div>
    )
  }
})

module.exports = Main;
