import React from 'react';
import GetDataFromAPI from './ExchangeRateAPI'
import Options from './Options'


class App extends React.Component{

  constructor(){
    super()

    this.state = {
      CURRENCYLISTAPIDATA : [],
      APIDATA : {},
      fromCur : "",
      toCur : ""
    }

    this.GetRate = this.GetRate.bind(this)
  }

  componentDidMount(){

    fetch('https://openexchangerates.org/api/currencies.json')
    .then(response => response.json())
    .then(data => this.setState({CURRENCYLISTAPIDATA : Object.keys(data)}))
    .catch(err => err);
  
  }

  GetRate(e){
    
    const {name , value} = e.target

    this.setState({[name] : value})  

    if (this.state.fromCur !== "" & this.state.toCur !== ""){

      fetch('https://v3.exchangerate-api.com/pair/4b401bf0886f2f3a3dd2e015/' + this.state.fromCur + '/' + this.state.toCur)
      .then(response => response.json())
      .then(data => this.setState({APIDATA : data}))
      .catch(err => err)
    }

}
   

  // shouldComponentUpdate(nextProp, nextState){

  // }


  render(){

      const OPTIONS = this.state.CURRENCYLISTAPIDATA.map( element => <Options OptionData = {element} key={element}/>);

      (this.state.CURRENCYLISTAPIDATA !== "") ? this.setState({fromCur : this.state.CURRENCYLISTAPIDATA[0]}) : this.setState({fromCur : ""});
     
         
    return (
        <div>    
          <GetDataFromAPI props={this.state.APIDATA}/>
          <br/>
          <br/>
            <select name="fromCur" value={this.state.fromCur} onChange={this.GetRate}>
              {OPTIONS}                 
            </select>
            <h1>{this.state.fromCur}</h1>
          <br/>
          <br/>
            <select name="toCur" value={this.state.toCur} onChange={this.GetRate}>
              {OPTIONS}
                 
            </select>
            <h1>{this.state.toCur}</h1>
        </div>    
    )
  }
  
}


export default App;
