import styled from 'styled-components';
import dayjs from 'dayjs';

export default function Entry({ text, author, color, createdAt, onDelete }) {
  return (
    <Card color={color}>
      {text}
      <Date>{dayjs(createdAt).format(' D.MM.YY H:mm')}</Date>
      <Author>{author}</Author>
      <button onClick={onDelete}>Delete</button>
    </Card>
  );
}

const Card = styled.section`
  padding: 10px 10px 2px 10px;
  width: 200px;
  min-height: 100px;
  border: 2px solid ${({ color }) => color};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

const Date = styled.p`
  font-size: 0.6rem;
  color: #999;
  margin: 0;
`;

const Author = styled.p`
  margin: 0;
  text-transform: uppercase;
  font-size: 0.8rem;
  color: #999;
  display: inline;
`;
