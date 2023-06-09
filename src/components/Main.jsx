import React, { } from 'react';
import '../App.css';
import {
  Button,
  Flex,
  Link,
  Box,
} from '@chakra-ui/react';
import { CalendarIcon } from '@chakra-ui/icons';
// eslint-disable-next-line import/no-extraneous-dependencies
import Confetti from 'react-confetti';
import { motion } from 'framer-motion';
import { H1 } from './Typography';
import InfoSection from './InfoSection';
import commencementUrl from '../assets/commencement.jpg';
import calendarUrl from '../assets/calendar.png';
import mapUrl from '../assets/Screenshot 2023-05-21 at 3.26.29 PM.png';
import jewelUrl from '../assets/lunch.avif';

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
  const h = 50;
  const width = window.innerWidth;
  const height = window.innerHeight;
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
      link: '/parking',
      // link: 'https://www.google.com/maps/dir//dartmouth+green/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x4cb4c9c2b2b8f65f:0x9a645e5d47004bd3?sa=X&ved=2ahUKEwielfLclfv-AhWdlYkEHa9yBeQQ9Rd6BAhyEAQ',
    },
    {
      main: { lineOne: 'Fairfield Inn Concord', lineTwo: 'Check-In: Saturday, June 10\nCheck-Out: Monday, June 12' },
      sub: 'WHERE AM I STAYING?',
      reverse: false,
      image: mapUrl,
      // eslint-disable-next-line max-len
      link: 'https://www.google.com/maps/dir//Fairfield+Inn+Concord,+4+Gulf+St,+Concord,+NH+03301/@43.4379413,-72.2346735,data=!3m1!4b1!4m21!1m10!3m9!1s0x89e26a88ed178eff:0x33273a2c6ee2e4de!2sFairfield+Inn+Concord!5m2!4m1!1i2!8m2!3d43.1971696!4d-71.5288987!16s%2Fg%2F1tfqrywq!4m9!1m1!4e1!1m5!1m1!1s0x89e26a88ed178eff:0x33273a2c6ee2e4de!2m2!1d-71.5288987!2d43.1971696!3e0',
    },
    {
      main: { lineOne: 'Jewel Of India', lineTwo: '12:30pm' },
      sub: 'WHAT\'S FOR GRAD DAY LUNCH?',
      reverse: true,
      image: jewelUrl,
      // eslint-disable-next-line max-len
      link: 'https://www.google.com/maps/dir//Jewel+of+India,+11+Lebanon+St,+Hanover,+NH+03755/@43.7043876,-72.2910613,16z/data=!3m1!4b1!4m13!1m2!2m1!1sjewel+of+india!4m9!1m1!4e1!1m5!1m1!1s0x4cb4c9e70d1e7cb7:0x74f8d98d787375cb!2m2!1d-72.2879105!2d43.7007643!3e0',

    },
  ];
  return (
    <Flex overflow="hidden" paddingBottom={10} w="100vw" justifyContent="center" alignItems="center" flexDir="column" bgColor="white">
      <Confetti width={width} colors={[color, '#fffff']} height={height} recycle={false} />
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
        {information.map((info) => <InfoSection main={info.main} height={h} sub={info.sub} reverse={info.reverse} image={info.image} link={info.link} />)}
      </Flex>

      <Link
        h="7vh"
        href="/rsvp"
        alignSelf="center"

      >
        <Button
          color="white"
          fontSize={['2xl', '4xl']}
          rightIcon={<CalendarIcon />}
          backgroundColor={color}
        >
          RSVP by May 31st
        </Button>
      </Link>
    </Flex>

  );
}

export default Main;
