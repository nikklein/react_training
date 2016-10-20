var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'Use default props'
    };
  },
  getInitialState: function () {
    return {
      name: this.props.name
    }
  },
  onButtonClick: function (e) {
    e.preventDefault();

    var name = this.refs.name.value;
    this.refs.name.value = '';

    this.setState({
      name: name
    });
  },
  render: function () {
    var name = this.state.name;
    var message = this.props.message;

    return (
      <div>
        <h1>!Hello {name}!</h1>
        <p>{message}</p>

      <form onSubmit={this.onButtonClick}>
        <input type="text" ref="name"/>
        <button>Type Name</button>
      </form>
      </div>
    );
  }
});

ReactDOM.render(
  <Greeter name="John" message="Prop message"/>,
  document.getElementById('app')
);
