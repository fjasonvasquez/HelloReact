var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('Greeter');

var firstName = 'Jacob'

ReactDOM.render(
  <Greeter name={firstName}/>,
  document.getElementById('app')
);
