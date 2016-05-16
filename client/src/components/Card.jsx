var React = require('react');

var Card = React.createClass({
  getInitialState: function() {
    return {isHidden: false, currrentHint: this.props.data.currrentHint}
  },
  handleClick: function(e){
    this.setState({isHidden: true});
  },
  unhideCard: function() {
    this.setState({isHidden: false});
  },
  render: function() {
    var card = this.props.data;
    console.log(this.state.currrentHint);

    if(this.state.isHidden) {
      return (
        <div className="Card">
          <button onClick={this.unhideCard}>UnHide</button>
        </div>
        )
    } else {
    return (
      <div className="Card">
        <h3>{card.name}</h3>
        <img className="CardImage" src={card.imageUrl}/>
        <button onClick={this.handleClick}>Hide</button>
      </div>
      )
  }
  }
});

module.exports = Card;
