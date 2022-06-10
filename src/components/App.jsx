import React, {Component} from "react";
import Section from "./Section/Section";
import Feedback from "./Feedback/Feedback";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";

export default function App () {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  function addFeed (e) {
    let feedName = e.target.name

    switch (feedName) {
      case "good":
        setGood(good+1);
        break;
      case "bad":
      setBad(bad+1);
      break;
      case "neutral":
        setNeutral(neutral+1);
      break;
      default:
        break;
    }}

  return (
    <>
    <Section title="Please leave feedback">
      <Feedback options={feed} addFeed={addFeed} />
    </Section>
    <Section title="Statistics">
      {(good > 0 || neutral > 0 || bad > 0) ?
      <Statistics good={good} neutral={neutral} bad={bad}/>
      : <Notification message="There is no feedback"></Notification> }
    </Section>
    </>
    )
  }
