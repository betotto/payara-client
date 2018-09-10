import initialState from '../store/initialState';
import R_merge from 'ramda/src/merge';
import { beginAjaxCallAction, endAjaxCallAction } from '../appModule';
import { getAllQuestions, addQuestion } from './questionApi';

const GET_ALL_QUESTIONS_SUCCESS = 'GET_ALL_QUESTIONS_SUCCESS';
const SHOW_NEW_QUESTION_FORM = 'SHOW_NEW_QUESTION_FORM';

export default (state = initialState.questionModule, action) => {
  switch(action.type) {
    case GET_ALL_QUESTIONS_SUCCESS:
      return R_merge(state, { questions: action.questions });
    case SHOW_NEW_QUESTION_FORM:
      return R_merge(state, { addingQuestion: action.shouldShow });
    default:
      return state;
  }
};

export const getAllQuestionsAction = () => dispatch => {
  dispatch(beginAjaxCallAction());
  getAllQuestions().then(resp => {
    dispatch(endAjaxCallAction());
    dispatch({
      type: GET_ALL_QUESTIONS_SUCCESS,
      questions: resp.questions
    });
  });
};

export const addQuestionAction = newQuestion => dispatch => {
  dispatch(beginAjaxCallAction());
  addQuestion(newQuestion).then(() => {
    dispatch(endAjaxCallAction());
    dispatch(getAllQuestionsAction());
    dispatch(showQuestionFormAction(false));
  });
};

export const showQuestionFormAction = shouldShow => ({
  type: SHOW_NEW_QUESTION_FORM,
  shouldShow
});
