import styled from 'styled-components';
import dayjs from 'dayjs';
import ScreenReaderOnly from './ScreenReaderOnly';

export default function Entry({ text, author, color, createdAt, onDelete }) {
  return (
    <Card color={color}>
      <Date>{dayjs(createdAt).format('D.MM.YY H:mm')}</Date>
      <Delete onClick={onDelete}>x</Delete>
      <Text>{text}</Text>
      <Author>{author}</Author>
      <label htmlFor="marking">
        <ScreenReaderOnly>mark as read</ScreenReaderOnly>
      </label>
      <Checkbox id="marking" type="checkbox"></Checkbox>
    </Card>
  );
}

const Card = styled.section`
  padding: 10px 10px 2px 10px;
  width: 200px;
  min-height: 100px;
  border: 2px solid ${({ color }) => color};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    ${({ color }) => color} 0px 8px 16px -8px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Date = styled.p`
  font-size: 0.6rem;
  color: #999;
  margin: 0;
`;

const Text = styled.p`
  font-size: 0.9em;
`;

const Author = styled.p`
  margin: 0;
  text-transform: uppercase;
  font-size: 0.7rem;
  color: #999;
  display: inline;
`;

const Checkbox = styled.input`
  position: absolute;
  right: 5px;
  bottom: 1px;
`;

const Delete = styled.button`
  position: absolute;
  right: -5px;
  top: -5px;
  border: 1px solid grey;
  border-radius: 50%;
  background-color: white;
  color: grey;
  width: 20px;
  height: 20px;
  line-height: 0;
  padding-bottom: 5px;
  font-weight: 500;
  cursor: pointer;
`;
