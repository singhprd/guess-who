var React = require('react');

var AskQuestion = React.createClass({
  getInitialState: function() {
    return {selected: this.props.clues[0], cluesLeft: 5, lastClue: ""}
  },
  handleClick: function() {
    if (this.state.cluesLeft == 0) {return}
    var newClues = this.state.cluesLeft - 1;
    this.setState({cluesLeft: newClues});
    this.props.checkHint()
    var a = this.props.checkHint(this.state.selected);
    this.setState({lastClue: a.toString()})
  },
  handleChange: function (e) {
    e.preventDefault();
    var selected = e.target.value;
    this.setState({selected: selected});
  },
  render: function(){  
    var cluesArray = [];
    var i = 0;
    for(var each of this.props.clues) {
      cluesArray.push(<option key={i++}>{each}</option>)
    };
    return (
      <div>
          <select onChange={this.handleChange}>
            {cluesArray}                
          </select>
          <button className="pure-button pure-button-primary" onClick={this.handleClick}>Ask?</button>
          <h2>{this.state.lastClue}</h2>
          <h3>Clues Left: {this.state.cluesLeft}</h3>
      </div>
      )
  }
});

module.exports = AskQuestion;