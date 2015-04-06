// React.render(
//   <h1>Hello, world!</h1>, document.body
// );

var Hello = React.createClass({
  getDefaultProps() {
    return{
      name: 'React'
    };
  },
  render() {
    return <div className="container">Hello {this.props.name}</div>
  }
});

React.render(
  <Hello />, document.body
);