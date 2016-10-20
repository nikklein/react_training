var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'Use default props'
    };
  },
  render: function () {
    var name = this.props.name;
    var message = this.props.message;

    return (
      <div>
        <h1>!Hello {name}!</h1>
        <p>{message}</p>
      </div>
    );
  }
});

ReactDOM.render(
  <Greeter name="John" message="Prop message"/>,
  document.getElementById('app')
);
