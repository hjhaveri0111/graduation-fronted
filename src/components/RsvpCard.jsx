/* eslint-disable react/prop-types */
import React from 'react';
import {
  Button, Flex, Box,
} from '@chakra-ui/react';
import { CheckIcon, CloseIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import { Body } from './Typography';

export default function RsvpCard(props) {
  const {
    name, attending, set, id,
  } = props;
  // const [attend, setAttend] = useState(attending);
  let color = 'gray.200';
  if (attending === 1) {
    color = 'green.100';
  } else if (attending === 0) {
    color = 'red.100';
  }

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
        <Button mr={1} colorScheme="green" onClick={() => set(id, 1)}><CheckIcon /></Button>
        <Button colorScheme="red" onClick={() => set(id, 0)}><CloseIcon /></Button>
      </Box>
    </Flex>
  );
}
