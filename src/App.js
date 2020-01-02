import React from 'react';
import GetDataFromAPI from './ExchangeRateAPI'
import Options from './Options'


class App extends React.Component{

  constructor(){
    super()

    this.state = {
      CURRENCYLISTAPIDATA : [],
      APIDATA : {}
    }

    this.GetRate = this.GetRate.bind(this)
  }

  componentDidMount(){

    fetch('https://openexchangerates.org/api/currencies.json')
    .then(response => response.json())
    .then(data => this.setState({CURRENCYLISTAPIDATA : Object.keys(data)}))
    .catch(err => err)

  
  }

  GetRate(){
    
    let fromCur = document.querySelectorAll('.fromCur')
    let toCur = document.querySelectorAll('.toCur')
    console.log(fromCur[0].value)

    if (fromCur[0].value !== "" && fromCur[0].value){

      fetch('https://v3.exchangerate-api.com/pair/4b401bf0886f2f3a3dd2e015/' + fromCur[0].value + '/' + toCur[0].value)
      .then(response => response.json())
      .then(data => this.setState({APIDATA : data}))
      .catch(err => err)
    }

}
   

  // shouldComponentUpdate(nextProp, nextState){

  // }


  render(){

      const OPTIONS = this.state.CURRENCYLISTAPIDATA.map( element => <Options OptionData = {element} key={element}/>)
      
      console.log(this.state.APIDATA)
    return (
        <div>    
          <GetDataFromAPI props={this.state.APIDATA}/>
          <br/>
          <br/>
            <select className='fromCur' onChange={this.GetRate}>
              {OPTIONS}    
            </select>
          <br/>
          <br/>
            <select className='toCur' onChange={this.GetRate}>
              {OPTIONS}    
            </select>
        </div>    
    )
  }
  
}


export default App;
