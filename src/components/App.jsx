import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';

const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleFeedback = (type) => {
    setFeedback((prevState) => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };

  const { good, neutral, bad } = feedback;
  const totalFeedback = good + neutral + bad;
  const positivePercentage = totalFeedback > 0 ? (good / totalFeedback) * 100 : 0;

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={handleFeedback} />
      </Section>
      <Section title="Statistics">
        {totalFeedback === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </div>
  );
};

export default App;
