/* eslint-disable react/prop-types */
import React from 'react';
import {
  Flex, Box, Image, Spacer, Link, Divider,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { H2, H3 } from './Typography';

const color = '#00693e';
const cardVariants = {
  offscreen: {
    x: -1000,
  },
  offscreenLeft: {
    x: 1000,
  },

  onscreen: {
    x: 0,

    transition: {
      type: 'spring',
      bounce: 0.2,
      duration: 1.5,
    },
  },

};
export default function InfoSection(props) {
  const {
    main, sub, image, reverse, height, link,
  } = props;
  const dir = reverse ? 'row-reverse' : 'row';
  return (
    <>
      <Flex
        as={motion.div}
        viewport={{ amount: 1 }}
        initial={reverse ? 'offscreenLeft' : 'offscreen'}
        whileInView="onscreen"
        w="100%"
        h={`${height}vh`}
        justifyContent="space-around"
        flexDir={['column-reverse', dir]}
        alignItems="center"
      >
        <Box as={motion.div} variants={cardVariants} w={['100%', '30%']}>
          <Image src={image} />
        </Box>

        <Flex as={motion.div} w={['100%', '70%']} flexDir="column">
          <H3>{sub}</H3>
          <Link style={{ textDecoration: 'underline', color: `${color}` }} href={link} isExternal>
            <H2 as={motion.div} variants={cardVariants} color={color}>
              {main.lineOne}
            </H2>

          </Link>
          {main.lineTwo ? <H2 as={motion.div} variants={cardVariants} color={color}>{main.lineTwo}</H2> : null}
        </Flex>
      </Flex>
      <Spacer />
      <Divider />
    </>
  );
}
