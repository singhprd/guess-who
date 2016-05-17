var React = require('react');

var Card = React.createClass({
  getInitialState: function() {
    return {isHidden: false}
  },
  handleClick: function(e){
    this.setState({isHidden: true});
  },
  unhideCard: function() {
    this.setState({isHidden: false});
  },
  render: function() {
    var card = this.props.data;

    if(this.state.isHidden) {
      return (
        <div className="Card">
          <button className="pure-button" onClick={this.unhideCard}>UnHide</button>
        </div>
        )
    } else {
    return (
      <div className="Card">
        <h3>{card.name}</h3>
        <img className="CardImage" src={card.imageUrl}/>
        <button className="pure-button pure-button-primary" onClick={this.handleClick}>Hide</button>
      </div>
      )
  }
  }
});

module.exports = Card;
