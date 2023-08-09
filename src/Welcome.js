const Welcome = ({ numQuestions }) => {
  return (
    <div className="start">
      <h2>Welcome to the React QUiz!</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <button className="btn btn-ui">Let's start!</button>
    </div>
  );
};

export default Welcome;
