import { useState } from 'react';
import styled from 'styled-components';
import useSWR from 'swr';
import dayjs from 'dayjs';

import AddName from './components/AddName';
import Entry from './components/Entry';
import EntryForm from './components/EntryForm';

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function App() {
  const [active, setActive] = useState(false);
  const [userName, setUserName] = useState('');
  const [userColor, setUserColor] = useState('');

  const {
    data: entries,
    error: entriesError,
    mutate: mutateEntries,
  } = useSWR('/api/entries', fetcher, { refreshInterval: 1000 });

  if (entriesError) return <h1>Sorry, could not fetch</h1>;

  return (
    <>
      {!active && <AddName onSubmit={handleNewUser} />}
      {active && <HeaderStyled>Lean Coffee Board</HeaderStyled>}
      {active && (
        <Grid role="list">
          {entries
            ? entries.map(({ text, author, _id, color, date, tempId }) => (
                <li key={_id ?? tempId}>
                  <Entry
                    text={text}
                    author={author}
                    color={color}
                    date={date}
                    userName={userName}
                  />
                </li>
              ))
            : '...loading...'}
        </Grid>
      )}
      {active && <EntryForm onSubmit={handleNewEntry} />}
    </>
  );

  function handleNewUser(name, color) {
    setUserName(name);
    setUserColor(color);
    setActive(!active);
  }

  async function handleNewEntry(text) {
    const newEntry = {
      text,
      author: userName,
      color: userColor,
      date: dayjs().format(' D.MM.YY H:mm'),
      tempId: Math.random(),
    };

    mutateEntries([...entries, newEntry], false);

    await fetch('/api/entries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newEntry),
    });
    mutateEntries();
  }
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
  margin-bottom: 70px;
`;
