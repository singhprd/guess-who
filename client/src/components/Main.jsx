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
  checkHint: function (attribute) {
    if (this.state.answer[attribute] == true ) {return true} else {return false}
  },
  getPotentialClues: function () {
    var answer = this.state.answer;
    var toReturn = [];
    for (var each in answer) {
      if(typeof(answer[each]) === "boolean"){toReturn.push(each)}
    }
    return toReturn;
  },
  render: function(){
    return(
      <div>
        <CardContainter cardData={this.state.cardData}/>
        <GuessSelector cardData={this.state.cardData} checkGuess={this.checkGuess}/>
        <AskQuestion checkHint={this.checkHint} clues={this.getPotentialClues()}/>
      </div>
    )
  }
})

module.exports = Main;
