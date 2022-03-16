import styled from 'styled-components';
import useSWR from 'swr';

import Entry from './components/Entry';
import EntryForm from './components/EntryForm';

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function App() {
  const {
    data: entries,
    error: entriesError,
    mutate: mutateEntries,
  } = useSWR('/api/entries', fetcher, { refreshInterval: 1000 });

  if (entriesError) return <h1>Sorry, could not fetch</h1>;

  return (
    <>
      <HeaderStyled>Lean Coffee Board</HeaderStyled>
      <Grid role="list">
        {entries
          ? entries.map(({ text, author, _id, tempId }) => (
              <li key={_id ?? tempId}>
                <Entry text={text} author={author} />
              </li>
            ))
          : '...loading...'}
      </Grid>
      <EntryForm onSubmit={handleNewEntry} />
    </>
  );

  async function handleNewEntry(text) {
    const newEntry = {
      text,
      author: 'Anonymous',
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
