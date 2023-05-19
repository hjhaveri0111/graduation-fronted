import React, { } from 'react';
import '../App.css';
import {
  Button,
  Flex,
  Link,
  Box,
} from '@chakra-ui/react';
import { CalendarIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import mapUrl from '../assets/Screenshot 2023-05-16 at 1.03.49 PM.png';
import jewelUrl from '../assets/lunch.avif';
import { H1 } from './Typography';
import InfoSection from './InfoSection';
import commencementUrl from '../assets/commencement.jpg';
import calendarUrl from '../assets/calendar.jpeg';

import greenUrl from '../assets/green.jpeg';

const color = '#00693e';
const titleVariants = {
  offscreen: {
    y: '1000',
    opacity: 0,
    scale: 0,

  },

  onscreen: {
    y: '0',
    opacity: 1,
    scale: 1.5,

    transition: {
      type: 'spring',
      bounce: 0.2,
      duration: 4,
    },
  },
};

function Main() {
  const height = 50;
  const information = [
    {
      main: { lineOne: 'Sunday June 11, 2023', lineTwo: '9:00am' },
      sub: 'WHEN IS IT?',
      reverse: false,
      image: calendarUrl,
      link: 'https://home.dartmouth.edu/events/commencement',
    },
    {
      main: { lineOne: 'Dartmouth Green' },
      sub: 'WHERE IS IT?',
      reverse: true,
      image: greenUrl,
      link: 'https://www.google.com/maps/dir//dartmouth+green/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x4cb4c9c2b2b8f65f:0x9a645e5d47004bd3?sa=X&ved=2ahUKEwielfLclfv-AhWdlYkEHa9yBeQQ9Rd6BAhyEAQ',
    },
    {
      main: { lineOne: 'Courtyard Marriott', lineTwo: 'Check-In: Saturday, June 11 \n Check-Out: Monday, June 12' },
      sub: 'WHERE AM I STAYING?',
      reverse: false,
      image: mapUrl,
      // eslint-disable-next-line max-len
      link: 'https://www.google.com/maps/dir//courtyard+marriott+concord+nh/data=!4m8!4m7!1m0!1m5!1m1!1s0x89e26afad18a48eb:0x9a7e4cb1acf755d8!2m2!1d-71.5364662!2d43.2179296',
    },
    {
      main: { lineOne: 'Jewel Of India', lineTwo: '12:30pm' },
      sub: 'WHAT\'S FOR LUNCH?',
      reverse: true,
      image: jewelUrl,
      link: 'http://www.jewelofindiahanover.com/',

    },
  ];
  return (
    <Flex overflow="hidden" paddingBottom={10} w="100vw" justifyContent="center" alignItems="center" flexDir="column" bgColor="white">
      <Flex
        as={motion.div}
        viewport={{ once: true }}
        initial="offscreen"
        whileInView="onscreen"
        w="100%"
        h={['50vh', '75vh']}
        justifyContent="center"
        alignItems="center"
        bgColor={color}
        bgPos="center"
        bgSize="cover"
        backgroundImage={`url(${commencementUrl})`}
        color="white"
      >
        <Box as={motion.div} variants={titleVariants}>
          <H1>Harsh&apos;s </H1>
          <H1>Graduation</H1>
        </Box>
      </Flex>
      <Flex p={20} flexDir="column" w="100%" justifyContent="space-around" alignItems="center">
        {information.map((info) => <InfoSection main={info.main} height={height} sub={info.sub} reverse={info.reverse} image={info.image} link={info.link} />)}
      </Flex>

      <Link
        w="40%"
        h="7vh"
        href="/rsvp"
      >
        <Button
          color="white"
          fontSize={['2xl', '4xl']}
          rightIcon={<CalendarIcon />}
          backgroundColor={color}
        >
          RSVP
        </Button>
      </Link>
    </Flex>

  );
}

export default Main;
