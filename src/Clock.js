import React,{Component} from 'react';

class Clock extends Component{
	constructor(props)
	{
		super(props);
		this.state={
			remDays:0,
			remHrs:0,
			remMin:0,
			remSec:0

		}
	}

	componentWillMount()
	{
		this.getTimeUntil(this.props.date);	
	}

	componentDidMount()
	{
		setInterval(()=>this.getTimeUntil(this.props.date),1000);
	}

	getTimeUntil(deadline)
	{
const time=Date.parse(deadline) - Date.parse(new Date());
		console.log(time);	
		const seconds=Math.floor((time/1000)%60);
		const minutes=Math.floor((time/1000/60)%60);
		const hrs=Math.floor(time/(1000*60*60)%24);
		const days=Math.floor(time/(1000*60*60*24));

		this.setState(
		{
			remDays:days,
			remHrs:hrs,
			remMin:minutes,
			remSec:seconds
		})
	}
	
	addZero(num)
	{
		return num<10 ? "0"+num : num;
	}
	render()
	{
		
		return(
				<div className="app-date">
				<h3> {this.addZero(this.state.remDays)} days  -- {this.addZero(this.state.remHrs)} hrs -- {this.addZero(this.state.remMin)} minutes -- {this.addZero(this.state.remSec)} seconds Remaining</h3>
				</div>
			)
	}
}

export default Clock;