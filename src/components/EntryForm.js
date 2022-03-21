import styled from 'styled-components';
import ScreenReaderOnly from './ScreenReaderOnly';

export default function EntryForm({ onSubmit }) {
  return (
    <Form onSubmit={handleSubmit} aria-labelledby="entry-form-name">
      <label htmlFor="text">
        <ScreenReaderOnly>Add lean coffee note</ScreenReaderOnly>
      </label>
      <input
        name="text"
        id="text"
        type="text"
        placeholder="ADD LEAN COFFEE NOTE"
        autoComplete="off"
        minLength="3"
        required
      />
      <button id="entry-form-name">
        <ScreenReaderOnly>Create new entry</ScreenReaderOnly>
        <span aria-hidden="true">+</span>
      </button>
    </Form>
  );

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const inputElement = form.elements.text;
    onSubmit(inputElement.value);
    form.reset();
  }
}

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
    padding-bottom: 5px;
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
