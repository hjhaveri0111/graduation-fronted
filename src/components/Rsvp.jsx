/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import {
  Flex, Box, Input, InputGroup, IconButton, Link, Divider, Text,
} from '@chakra-ui/react';
import { ArrowBackIcon, SearchIcon } from '@chakra-ui/icons';
import RsvpCard from './RsvpCard';
import { H1, H2, H3 } from './Typography';
import { editAttendeeStatus, getAllAttendees, searchForAttendee } from '../api';

export default function Rsvp() {
  const [attending, setAttending] = useState([]);
  const [searched, setSearch] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [query, setQuery] = useState('');

  useEffect(() => {
    async function fetch() {
      const response = await getAllAttendees();
      const arr = [];
      for (const person of response) {
        if (person.attending === 1) {
          arr.push(person.name);
        }
      }
      setAttending(arr);
    }

    fetch();
  }, []);

  const searchForAttendees = async (q) => {
    // eslint-disable-next-line quotes
    const res = await searchForAttendee(q);
    setSearch(res);
    console.log(res);
  };

  const setAttendeeStatus = async (id, attend) => {
    setSearch(searched.map((p) => (p.id === id ? { ...p, attending: attend } : p)));
    const attendee = await editAttendeeStatus(id, attend);
    if (attend === 1) {
      setAttending([...attending, attendee.name]);
    }
  };

  return (
    <Flex flexDir="column" w="100vw" h="auto" justifyContent="center" alignItems="center">
      <Link href="/">
        <ArrowBackIcon m={[1, 5]} style={{ position: 'absolute', top: '0px', left: '0px' }} boxSize={[6, 8]} />
      </Link>
      <H1>RSVP</H1>
      <H3>By May 31st</H3>
      <InputGroup m={2} display="flex" justifyContent="center">
        <Input w="50%" onChange={(event) => { setQuery(event.target.value); }} value={query} placeholder="search for your name" />
        <IconButton type="submit" onClick={() => searchForAttendees(query)} icon={<SearchIcon />} />
      </InputGroup>
      <Flex w="100%" bgColor="white" justifyContent="space-around" p={30}>
        <Box w={['90%', '75%']} h="auto">
          <Flex flexDir="column" w="100%" justifyContent="center">
            {searched.map((person) => <RsvpCard key={person.id} id={person.id} name={person.name} attending={person.attending} set={setAttendeeStatus} />)}
            <Divider />
            <H2>Attendees</H2>
            {attending.map((person) => <Text fontSize={['2xl', '3xl']} key={person}>{person}</Text>)}
          </Flex>
        </Box>

      </Flex>

    </Flex>
  );
}
