import React, {Component} from "react";
import Section from "./Section/Section";
import Feedback from "./Feedback/Feedback";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

 totalFeeds = () => {
  const {good, neutral, bad} = this.state
  return good + neutral + bad

 } 

 positivePercentage = () => {
  const {good} = this.state
  const total = this.totalFeeds()
  return Math.trunc(good / total * 100) 

 }

addFeed = (props) => {
    const {name} = props.currentTarget        
    this.setState(prevState => ({
      [name]:prevState[name] + 1
    }));

  };

  render() 
    {
      const {good, neutral, bad} = this.state
      const total = this.totalFeeds()
      const positivePercentage = this.positivePercentage()
     
    return (
<>
<Section title="Please leave feedback">
  <Feedback options={Object.keys(this.state)} addFeed={this.addFeed} />  
</Section>
<Section title="Statistics">
  {total ?
  <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage ? positivePercentage : 0} /> 
  : <Notification message="There is no feedback"></Notification>}     
</Section>
</>


    )
  }
}

export default App;