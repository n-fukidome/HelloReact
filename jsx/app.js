// React.render(
//   <h1>Hello, world!</h1>, document.body
// );

var Hello = React.createClass({
  render: function() {
    return (
      <div className="container">Hello {this.props.name}</div>
    );
  }
})

React.render(
  <Hello name="React" />, document.body
);