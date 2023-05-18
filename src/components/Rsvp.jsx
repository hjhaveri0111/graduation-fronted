import React, { useEffect, useState } from 'react';
import {
  Flex, Box, Input, InputGroup, IconButton, Link,
} from '@chakra-ui/react';
import { ArrowBackIcon, SearchIcon } from '@chakra-ui/icons';
import RsvpCard from './RsvpCard';
import { H1, H2 } from './Typography';
import { editAttendeeStatus, getAllAttendees, searchForAttendee } from '../api';

export default function Rsvp() {
  const [dad, setDad] = useState([]);
  const [mom, setMom] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [query, setQuery] = useState('');

  const createArrays = (response) => {
    const dadArr = [];
    const momArr = [];
    for (const attendee of response) {
      if (attendee.family === 'mom') {
        momArr.push(attendee);
      } else {
        dadArr.push(attendee);
      }
    }

    setDad(dadArr);
    setMom(momArr);
  };

  useEffect(() => {
    async function fetch() {
      const response = await getAllAttendees();
      createArrays(response);
    }

    fetch();
  }, []);

  const searchForAttendees = async (q) => {
    // eslint-disable-next-line quotes
    const res = await searchForAttendee(q);
    createArrays(res);
    console.log(res);
  };

  const setDadAttending = async (id, attending) => {
    setDad(dad.map((d) => (d.id === id ? { ...d, attending } : d)));
    await editAttendeeStatus(id, attending);
  };

  const setMomAttending = async (id, attending) => {
    setMom(mom.map((m) => (m.id === id ? { ...m, attending } : m)));
    await editAttendeeStatus(id, attending);
  };

  return (
    <Flex flexDir="column" w="100vw" h="auto" justifyContent="center" alignItems="center">
      <Link href="/">
        <ArrowBackIcon m={[1, 5]} style={{ position: 'absolute', top: '0px', left: '0px' }} boxSize={[6, 8]} />
      </Link>
      <H1>RSVP</H1>
      <InputGroup m={2} display="flex" justifyContent="center">
        <Input w="50%" onChange={(event) => { setQuery(event.target.value); }} value={query} placeholder="search for your name" />
        <IconButton onClick={() => searchForAttendees(query)} icon={<SearchIcon />} />
      </InputGroup>
      <Flex w="100%" bgColor="white" justifyContent="space-around" p={30}>
        <Box w={['50%', '33%']} h="auto">
          <H2>India</H2>
          <Flex flexDir="column" w="100%" justifyContent="center">
            {dad.map((d) => {
              return (
                <RsvpCard key={d.id} id={d.id} name={d.name} attending={d.attending} set={setDadAttending} />
              );
            })}
          </Flex>
        </Box>
        <Box w={['50%', '33%']}>
          <H2>US</H2>
          <Flex flexDir="column" w="100%" justifyContent="center">
            {mom.map((m) => <RsvpCard key={m.id} id={m.id} name={m.name} attending={m.attending} set={setMomAttending} />)}
          </Flex>
        </Box>
      </Flex>

    </Flex>
  );
}
