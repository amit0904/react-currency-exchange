import React from 'react'

class Options extends React.Component{
  

    render(){
        return(
            <option value={this.props.OptionData}>{this.props.OptionData}</option>            
        )            
    }    

}

export default Options