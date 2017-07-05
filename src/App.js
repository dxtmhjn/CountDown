import React,{Component} from 'react';
import './App.css';
import Clock from './Clock';

class App extends Component{
	constructor()
	{
		super();
		this.state={
			deadline:"November 28,2018"

		};
	}
	newDate()
	{		
		this.setState({
			deadline : document.getElementById('enterdate').value
		})
		console.log(this.state.deadline);
	}

	render(){
		return(
			<div className="container">
				<div className="app-title">
				<h2>COUNTDOWN </h2>
				</div>
				<div className="app-date">
				<h3>CountDown time from {this.state.deadline}</h3>
				</div>
				<Clock date={this.state.deadline}/>		
				<div className="formdata">
				<form  className="form-inline">
  					<div className="form-group">
  					  
   						 <input type="text" onChange={this.newDate.bind(this)} className="form-control" id="enterdate" placeholder="Enter Date here" />
 					 </div>
 					  <button type="button" onClick={this.newDate.bind(this)} className="btn btn-success">Get time</button>
				</form>
				</div>
			</div>
			);
	}
}

export default App;