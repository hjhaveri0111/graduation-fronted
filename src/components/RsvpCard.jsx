/* eslint-disable react/prop-types */
import React from 'react';
import {
  Button, Flex, Box,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Body } from './Typography';

export default function RsvpCard(props) {
  const {
    name, attending, set, id,
  } = props;

  let color = 'gray.200';
  if (attending === 1) {
    color = 'green.100';
  } else if (attending === 0) {
    color = 'red.100';
  }

  const renderNotAttending = () => {
    if (attending === 1) {
      return null;
    } else {
      return <Button fontSize={['sm', 'md']} colorScheme="red" onClick={attending === 1 ? null : () => set(id, 0)}>Not Attending</Button>;
    }
  };
  return (
    <Flex
      key={id}
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 2 } }}
      exit={{ opacity: 0 }}
      w={['95%', '100%']}
      h={['15vh', '10vh']}
      bgColor={color}
      flexDir={['column', 'row']}
      borderRadius={5}
      justifyContent="space-between"
      alignItems="center"
      alignContent="center"
      p={5}
      mb={5}
    >
      <Body>{name}</Body>
      <Box>
        <Button mr={1} fontSize={['sm', 'md']} colorScheme="green" onClick={attending === 1 ? null : () => set(id, 1)}>Attending</Button>
        {renderNotAttending()}
      </Box>
    </Flex>
  );
}
