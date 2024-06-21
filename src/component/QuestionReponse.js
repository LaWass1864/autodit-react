import React from 'react';

const QuestionReponse = ({ question, reponse }) => {
  return (
    <div className="question-reponse">
      <h2 className="question font-merriweather">{question}</h2>
      <p className="reponse font-gloria text-custom-blue font-medium leading-10" dangerouslySetInnerHTML={{ __html: reponse }}></p>
    </div>
  );
};

export default QuestionReponse;
