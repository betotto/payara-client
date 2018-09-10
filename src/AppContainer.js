import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import QuestionContainer from './question/QuestionContainer';
import { getAllQuestionsAction } from './question/questionModule';

class AppContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllQuestions();
  }

  render() {
    return <QuestionContainer />;
  }
}

const mapStateToProps = () => ({ });

const mapDispatchToProps = dispatch => ({
  getAllQuestions: () => dispatch(getAllQuestionsAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
