var React = require('react');

var buttonStyle = {
  margin: '10px 10px 10px 0'
};

var Button = React.createClass({
  render: function () {
    return (
        <a href="" class="blockoPayBtn" data-toggle="modal" 
        data-uid="4da97d1e3a8311ea"><img width="160" src="./pay_with_bitcoin_medium.png"></img></a>
    );
  }
});

<script src="https://www.blockonomics.co/js/pay_button.js"></script>

module.exports = Button;