/* eslint-disable react/prop-types */
import React from 'react';
import {
  Flex, Box, Image, Spacer, Link, Divider, Text,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { ExternalLinkIcon } from '@chakra-ui/icons';
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

  const renderLineTwo = () => {
    if (main.lineOne === 'Fairfield Inn Concord') {
      const [string1, string2] = main.lineTwo.split('\n');
      return (
        <>
          <Text fontSize={['lg', '3xl']} color={color}>{string1.trim()}</Text>
          <Text fontSize={['lg', '3xl']} color={color}>{string2.trim()}</Text>
        </>
      );
    } else {
      return <H2 color={color}>{main.lineTwo}</H2>;
    }
  };
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
          <Link href={link} isExternal>
            <H2 as={motion.div} variants={cardVariants} color={color}>
              {main.lineOne}
              <ExternalLinkIcon mb={[2, 4]} />
            </H2>

          </Link>
          {main.lineTwo ? renderLineTwo() : null}
        </Flex>
      </Flex>
      <Spacer />
      <Divider />
    </>
  );
}
