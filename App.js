import React from 'react';

/*** 01 HELLO WORLD - FIRST COMPONENT ***/

//class App extends React.Component {
//  render() {
//    return React.createElement('div', null, 'Hello world')
//  }
//}
//
//var App = React.createClass({
//  render: function () {
//    return <div> Hello world </div>
//  }
//});
//
//const App = () => <div> Hello world </div>
//
//export default App

/*** 02 INTRODUCTION TO PROPERTIES ***/

//import ReactDOM from 'react-dom';
//
//class App extends React.Component {
//  render() {
//    let txt = this.props.txt
//    return <div> { txt } </div>
//  }
//}
//
//App.propTypes = {
//  txt: React.PropTypes.string
//}
//
//App.defaultProps = {
//  txt: 'Summertime Sadness'
//}
//
//ReactDOM.render( <App /> , document.getElementById('app'))

/*** 03 STATES BASICS ***/

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      txt: 'Lana Del Rey'
    }
  }

  update(e) {
    this.setState({
      txt: e.target.value
    })
  }

  render() {
    return (
      <div>
        <input type="text" onChange={ this.update.bind(this) }/>
        <strong> { this.state.txt } </strong>
      </div>
    )
  }
}

export default App