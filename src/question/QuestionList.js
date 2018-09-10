import { h } from 'preact';
import Question from './Question';

const ComponentName = props => {
  let questionList = props.questions.map((q, i) =>
    <Question key={i} idQuestion={q.idQuestion} text={q.text} />
  );
  return (
    <table className="pure-table">
      <thead>
        <tr>
          <th>
            {'Id'}
          </th>
          <th>
            {'Text'}
          </th>
        </tr>
      </thead>
      <tbody>
        {questionList}
      </tbody>
    </table>
  );
};

export default ComponentName;
