var React = require('react');
var Card = require('./Card');

var CardContainter = React.createClass({
  render: function() {
    var tableData = [];
    for(var each of this.props.cardData) {
      tableData.push(<td key={this.props.cardData.indexOf(each)}> <Card data={each}/> </td>);      
    };
    return (
      <div>
        <table className="showAll">
        <tbody>
            <tr>
              {tableData}
            </tr> 
          </tbody>
        </table>
      </div>
      )
  }
});

module.exports = CardContainter;