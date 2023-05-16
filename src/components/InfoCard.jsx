/* eslint-disable react/prop-types */
import React from 'react';
import { Flex, Link } from '@chakra-ui/react';
import { H2, H3 } from './Typography';

const color = '#00693e';
export default function InfoCard(props) {
  const { main, sub, reverse } = props;
  return (
    <Flex alignItems="center" flexDir={reverse ? 'row-reverse' : 'row'} w="70%" justifyContent="space-around" p="5%" m={10}>
      <H3>{sub}</H3>
      <Link href="Google.com" isExternal><H2 color={color}>{main}</H2></Link>
    </Flex>
  );
}
