import React from 'react'


class GetDataFromAPI extends React.Component{


    render(){
        return(
            <div>
            {this.props.props.result ? "The current exchange rate for " + this.props.props.from + " to " + this.props.props.to 
                                        + " at " + this.props.props.timestamp + " is " + this.props.props.rate : <iframe src="https://giphy.com/embed/b3EqpdyuAfwmA" width="480" height="480" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>} 
            </div>          
        )
    }
}

export default GetDataFromAPI