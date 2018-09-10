import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import QuestionList from './QuestionList';
import QuestionForm from './QuestionForm';
import { addQuestionAction, showQuestionFormAction } from './questionModule';

class QuestionContainer extends Component {
  render(props) {
    return (
      <section id="questions">
        <h1>{'Questions'}</h1>
        {!props.addingQuestion && (
          <div>
            <QuestionList questions={props.questions} />
            <br />
            <br />
            <button
              type="button"
              className="pure-button pure-button-primary"
              onClick={() => props.showQuestionForm(true)}>{'New Question'}</button>
          </div>
        )}
        {props.addingQuestion && (
          <QuestionForm
            addQuestion={props.addQuestion}
            cancelAddForm={() => props.showQuestionForm(false)} />
        )}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  questions: state.questionModule.questions,
  addingQuestion: state.questionModule.addingQuestion
});

const mapDispatchToProps = dispatch => ({
  addQuestion: newQuestion => dispatch(addQuestionAction(newQuestion)),
  showQuestionForm: shouldShow => dispatch(showQuestionFormAction(shouldShow))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionContainer);
