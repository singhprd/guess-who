var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('./components/Main.jsx');
var Card = require('./models/Card.js');

var url = "https://s-media-cache-ak0.pinimg.com/736x/4b/53/55/4b53554766a2ed8fe948c08b09f37b1b.jpg";
var cardArray = [];
var peterCard = new Card("Peter", false, url);
var jimBobCard = new Card("JimBob", true, url);
var batmanCard = new Card("Batman", false, url);
cardArray.push(peterCard);
cardArray.push(jimBobCard);
cardArray.push(batmanCard);

window.onload = function(){
  ReactDOM.render(
    <Main cardArray={cardArray}></Main>,
    document.getElementById('app')
  );
}
