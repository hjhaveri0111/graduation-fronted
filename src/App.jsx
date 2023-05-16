import React from 'react';
import './App.css';
import {
  Box,
  Button,
  Flex,
  Image,
  Spacer,
} from '@chakra-ui/react';
import {
  H1, H2, H3,
} from './components/Typography';
// import InfoCard from './components/InfoCard';

const color = '#00693e';
function App() {
  const height = 100 / 3;
  // const information = [
  //   {
  //     main: 'Sunday June 13, 2023',
  //     sub: 'Date & Time',
  //     reverse: false,
  //   },
  //   {
  //     main: 'Dartmouth Green',
  //     sub: 'Location',
  //     reverse: true,
  //   },
  //   {
  //     main: 'Courtyard Marriott',
  //     sub: 'Lodging',
  //     reverse: false,
  //   },
  // ];
  return (
    <Flex paddingBottom={10} w="100vw" justifyContent="center" alignItems="center" flexDir="column" bgColor="white">
      <Flex
        w="100%"
        h="75vh"
        justifyContent="center"
        alignItems="center"
        bgColor={color}
        color="white"
      >
        <H1>Harsh&apos;s Graduation</H1>
      </Flex>
      <Flex p={10} flexDir="column" w="100%" h="100vh" justifyContent="space-around" alignItems="center">
        <Flex w="100%" h={`${height}vh`} justifyContent="space-between">
          <Box w="30%">
            <Image src="src/assets/b5d4b576388e4f6e26e020e12e14b8ab.png" />
          </Box>

          <Flex w="70%" flexDir="column">
            <H3>WHEN IS IT?</H3>
            <H2 color={color}>SUNDAY, JUNE 11, 2023</H2>
            <H2 color={color}>9:00am</H2>
          </Flex>
        </Flex>
        <Spacer />
        <Flex h={`${height}vh`} w="100%" justifyContent="space-between" alignItems="center">
          <Flex flexDir="column" w="70%">
            <H3>WHERE IS IT?</H3>
            <H2 color={color}>DARTMOUTH GREEN</H2>
          </Flex>
          <Box w="30%">
            <Image src="src/assets/green.jpeg" />
          </Box>

        </Flex>
        <Spacer />
        <Flex h={`${height}vh`} w="100%" justifyContent="space-between" alignItems="center">
          <Box w="30%">
            <Image src="src/assets/Screenshot 2023-05-16 at 1.03.49 PM.png" />
          </Box>
          <Flex w="70%" flexDir="column" alignItems="center">
            <H3>WHERE AM I STAYING?</H3>
            <H2 color={color}>CONCORD COURTYARD MARRIOTT</H2>
          </Flex>
        </Flex>
      </Flex>

      <Button color="white" w="40%" h="5vh" backgroundColor={color}>RSVP</Button>
    </Flex>

  );
}

export default App;
