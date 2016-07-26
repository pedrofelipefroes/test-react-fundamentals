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

//import ReactDOM from 'react-dom';
//
//class App extends React.Component {
//  constructor() {
//    super();
//    
//    this.state = {
//      red: 0,
//      green: 0,
//      blue: 0
//    }
//    this.update = this.update.bind(this)
//  }
//  
//  update(e) {
//    this.setState({
//      red: ReactDOM.findDOMNode(this.refs.red.refs.slide).value,
//      green: ReactDOM.findDOMNode(this.refs.green.refs.slide).value,
//      blue: ReactDOM.findDOMNode(this.refs.blue.refs.slide).value
//    })
//  }
//  
//  render() {
//    return (
//      <div>
//        <Slider ref="red" update={ this.update }/>
//        { this.state.red }
//        <br/>
//        <Slider ref="green" update={ this.update }/>
//        { this.state.green }
//        <br/>
//        <Slider ref="blue" update={ this.update }/>
//        { this.state.blue }
//        <br/>
//      </div>
//    );
//  }
//}
//
//class Slider extends React.Component {
//  render() {
//    return (
//      <div>
//      <input ref="slide" type="range" min="0" max="255" onChange={ this.props.update }/>
//      </div>
//    );
//  }
//}

/*** 11 COMPONENT LIFECYCLE - UPDATING ***/

//import ReactDOM from 'react-dom';
//
//class App extends React.Component {
//  constructor() {
//    super();
//    
//    this.update = this.update.bind(this)
//    this.state = { increase: false }
//  }
//  
//  update() {
//    ReactDOM.render(
//      <App val={ this.props.val + 1 }/>, document.getElementById("app")
//    );
//  }
//  
//  componentWillReceiveProps(nextProps) {
//    this.setState({ increase: nextProps.val > this.props.val })
//  }
//  
//  shouldComponentUpdate(nextProps, nextState) {
//    return nextProps.val % 5 === 0;
//  }
//  
//  render() {
//    console.log(this.state.increase);
//    return (
//      <button onClick={ this.update }>{ this.props.val }</button>
//    )
//  }
//}
//
//App.defaultProps = { val: 0 }

/*** 12 HIGHER ORDER COMPONENTS ***/

//let Mixin = InnerComponent => class extends React.Component {
//  constructor() {
//    super();
//    
//    this.update = this.update.bind(this)
//    this.state = { val: 0 }
//  }
//  
//  update() {
//    this.setState({ val: this.state.val + 1 })
//  }
//  
//  render() {
//    return (
//      <InnerComponent update={this.update} {...this.state} {...this.props}/>
//    )
//  }
//}
//
//const Button = (props) => <button onClick={props.update}>{props.txt}: {props.val}</button>
//const Label = (props) => <label onMouseMove={props.update}>{props.txt}: {props.val}</label>
//
//let ButtonMixed = Mixin(Button)
//let LabelMixed = Mixin(Label)
//
//class App extends React.Component {
//  render() {
//    return (
//      <div>
//        <LabelMixed txt="The Black Keys"/>
//        <ButtonMixed txt="Lana Del Rey"/>
//      </div>
//    )
//  }
//}

/*** 13 COMPOSABLE COMPONENTS ***/

//import ReactDOM from 'react-dom';
//
//class App extends React.Component {
//  constructor() {
//    super();
//    
//    this.state = {
//      red: 0,
//    }
//    this.update = this.update.bind(this)
//  }
//  
//  update(e) {
//    this.setState({
//      red: ReactDOM.findDOMNode(this.refs.red.refs.slide).value,
//    })
//  }
//  
//  render() {
//    return (
//      <div>
//        <Slider ref="red" type="range" min={0} max={255} step={1} val={+this.state.red} label="red" update={this.update}/>
//      </div>
//    );
//  }
//}
//
//class Slider extends React.Component {
//  render() {
//    return (
//      <div>
//      <input ref="slide" type={this.props.type} min={this.props.min} max={this.props.max} 
//             step={this.props.step} defaultValue={this.props.val} onChange={this.props.update}/>
//      {this.props.label}
//      <br/>
//      {this.props.val}
//      </div>
//    );
//  }
//}
//
//Slider.propTypes = {
//  min: React.PropTypes.number,
//  max: React.PropTypes.number,
//  step: React.PropTypes.number,
//  val: React.PropTypes.number,
//  label: React.PropTypes.string,
//  update: React.PropTypes.func.isRequired,
//  type: React.PropTypes.oneOf(['range', 'number'])
//}
//
//Slider.defaultProps = {
//  min: 0,
//  max: 255,
//  step: 1,
//  val: 0,
//  label: '',
//  type: 'range'
//}

/*** 14 DINAMICALLY GENERATED COMPONENTS ***/

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      data: [
        {id: 1, name: 'Bulbasaur'}, {id: 2, name: 'Ivysaur'}, {id: 3, name: 'Venusaur'},
        {id: 4, name: 'Charmander'}, {id: 5, name: 'Charmeleon'}, {id: 6, name: 'Charizard'},
        {id: 7, name: 'Squirtle'}, {id: 8, name: 'Wartortle'}, {id: 9, name: 'Blastoise'},
      ]
    }
  }
  
  render() {
    let rows = this.state.data.map(pokemon => {
      return <PokemonRow key={pokemon.id} data={pokemon}/>
    })
    
    return (
      <table>
        <tbody>{rows}</tbody>
      </table>
    )
  }
}

const PokemonRow = (props) => {
  return (
    <tr>
      <td>{props.data.id}</td>
      <td>{props.data.name}</td>
    </tr>
  )
}

export default App