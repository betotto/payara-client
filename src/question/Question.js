import { h } from 'preact';

const Question = props => {
  const { idQuestion, text } = props;
  return (
    <tr>
      <td>{idQuestion}</td>
      <td>{text}</td>
    </tr>
  );
};

export default Question;
