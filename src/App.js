import { useState, useEffect } from 'react';
import styled from 'styled-components';

import Entry from './components/Entry';
import EntryForm from './components/EntryForm';

export default function App() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    getEntries();

    async function getEntries() {
      const response = await fetch('/api/entries');
      const entries = await response.json();
      setEntries(entries);
    }
  }, []);

  return (
    <>
      <HeaderStyled>Lean Coffee Board</HeaderStyled>
      <Grid role="list">
        {entries.map(({ text, author }, index) => (
          <li key={index}>
            <Entry text={text} author={author} />
          </li>
        ))}
        <EntryForm />
      </Grid>
    </>
  );
}

const HeaderStyled = styled.h1`
  text-align: center;
`;

const Grid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  list-style: none;
  padding: 0;
`;
