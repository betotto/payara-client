import { h } from 'preact';

const QuestionForm = props => {
  const { addQuestion, cancelAddForm } = props;
  const submitFun = e => {
    e.preventDefault();
    const inputQuestion = document.getElementById('questionText');
    const text = inputQuestion.value;
    if(text !== '') {
      addQuestion({ text });
    }
    inputQuestion.value = '';
  };
  return (
    <div>
      <form className="pure-form" onSubmit={submitFun}>
        <fieldset>
          <legend>{'Write the text for the new Queston'}</legend>

          <label htmlFor="questionText">{'Question Text: '}</label>
          <input id="questionText" type="text" placeholder="Question text" required />

          <button type="submit" className="pure-button pure-button-primary">{'Add Question'}</button>
        </fieldset>
      </form>
      <button
        type="button"
        className="pure-button pure-button-primary"
        onClick={cancelAddForm}>{'Cancel'}</button>
    </div>
  );
};

export default QuestionForm;
