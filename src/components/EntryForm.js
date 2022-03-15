import { useState } from 'react';
import styled from 'styled-components';

export default function EntryForm({ labelText, placeholder }) {
  const [entryText, setEntryText] = useState('');

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="input" hidden>
          {labelText}
        </label>
        <Underline />
      </div>
      <input
        name="entry-input"
        id="input"
        type="text"
        placeholder={placeholder}
        value={entryText}
        onChange={event => setEntryText(event.target.value)}
        autoComplete="off"
        required
      />
      <button>+</button>
    </Form>
  );

  function handleSubmit(event) {
    event.preventDefault();
    console.log('worked');
    setEntryText('');
  }
}
const Underline = styled.span`
  align-self: center;
  height: 1px;
  transition: 0.25s linear;
  width: 0;
  margin-top: 1px;
`;

const Form = styled.form`
  width: 100vw;
  display: flex;
  flex: 1 1;
  padding-right: 16px;
  box-shadow: 0px -13px 28px 0px rgba(0, 0, 0, 0.18);
  position: fixed;
  bottom: 0;

  input {
    flex: 1 1;
    border: none;
    outline: none;
    ::placeholder {
      color: rgb(184, 184, 184);
    }

    &:hover {
      text-decoration: underline;
    }
  }

  button {
    border: 2px solid black;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    margin: 10px;
    padding-bottom: 4px;
    line-height: 0;
    font-size: 30px;
    vertical-align: middle;
    transition: 0.8s;
    &:hover {
      background-color: black;
      color: white;
      transition: 0.8s;
    }
  }
`;
