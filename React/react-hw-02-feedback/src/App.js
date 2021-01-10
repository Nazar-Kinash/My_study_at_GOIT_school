import React, { Component } from 'react';
import './App.css';

import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Ststictics from './components/Statistics/Ststictics';
import Section from './components/Section/Section';
import Notification from './components/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = (e) => {
    const { name } = e.target;
    this.setState((prevState) => ({ [name]: prevState[name] + 1 }));
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  };
  render() {
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.leaveFeedback}
          />
        </Section>

        <Section title={'Ststictics'}>
          {this.countTotalFeedback() === 0 ? (
            <Notification message='No feedback given'></Notification>
          ) : (
            <Ststictics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          )}
        </Section>
      </>
    );
  }
}

export default App;
