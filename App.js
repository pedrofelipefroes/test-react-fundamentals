import React from 'react';

/*** 02 HELLO WORLD - FIRST COMPONENT ***/

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

/*** 04 INTRODUCTION TO PROPERTIES ***/

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

/*** 05 STATES BASICS ***/

//class App extends React.Component {
//  constructor() {
//    super();
//
//    this.state = {
//      txt: 'Lana Del Rey'
//    }
//  }
//
//  update(e) {
//    this.setState({
//      txt: e.target.value
//    })
//  }
//
//  render() {
//    return (
//      <div>
//        <input type="text" onChange={ this.update.bind(this) }/>
//        <strong> { this.state.txt } </strong>
//      </div>
//    )
//  }
//}

/*** 06 OWNER OWNEE RELATIONSHIP ***/

//class App extends React.Component {
//  constructor() {
//    super();
//    
//    this.state = { txt: '' }
//    this.update = this.update.bind(this)
//  }
//  
//  update(e) {
//    this.setState({
//      txt: e.target.value
//    })
//  }
//  
//  render() {
//    return (
//      <div>
//        <Widget txt={ this.state.txt } update={ this.update }/>
//      </div>
//    );
//  }
//}
//
//const Widget = (props) => {
//  return (
//    <div>
//      <input type="text" onChange={ props.update }/>
//      <h1>{ props.txt }</h1>
//    </div>
//  );
//}
//
//export default App

/*** 07 USING REFS TO ACCESS COMPONENTS ***/

import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      red: 0,
      green: 0,
      blue: 0
    }
    this.update = this.update.bind(this)
  }
  
  update(e) {
    this.setState({
      red: ReactDOM.findDOMNode(this.refs.red.refs.slide).value,
      green: ReactDOM.findDOMNode(this.refs.green.refs.slide).value,
      blue: ReactDOM.findDOMNode(this.refs.blue.refs.slide).value
    })
  }
  
  render() {
    return (
      <div>
        <Slider ref="red" update={ this.update }/>
        { this.state.red }
        <br/>
        <Slider ref="green" update={ this.update }/>
        { this.state.green }
        <br/>
        <Slider ref="blue" update={ this.update }/>
        { this.state.blue }
        <br/>
      </div>
    );
  }
}

class Slider extends React.Component {
  render() {
    return (
      <div>
      <input ref="slide" type="range" min="0" max="255" onChange={ this.props.update }/>
      </div>
    );
  }
}

export default App