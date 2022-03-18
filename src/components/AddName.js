import styled from 'styled-components';

export default function AddName({ onSubmit }) {
  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor="name">What's your name?</label>
      <input
        name="name"
        id="name"
        type="text"
        placeholder="Enter name"
        required
      />
      <label htmlFor="color">Pick a color</label>
      <input id="color" name="color" type="color" />
      <button>Rember me</button>
    </Form>
  );

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const inputElement = form.elements.name;
    onSubmit(inputElement.value);
    form.reset();
  }
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 70vw;
  padding: 20px;
  border: 2px solid grey;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  input {
    margin: 20px 0;
    border-radius: 5px;
  }

  button {
    background-color: lightcoral;
    border-radius: 5px;
  }
`;
