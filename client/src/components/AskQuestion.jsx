var React = require('react');

var AskQuestion = React.createClass({
  handleClick: function() {
    this.props.askForHint("hasGlasses");
  },
  render: function(){
    return (
      <div>
        <button onClick={this.handleClick}>Ask for hint</button>
      </div>
      )
  }
});

module.exports = AskQuestion;