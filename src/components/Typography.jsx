/* eslint-disable react/prop-types */
import React from 'react';
import { Heading, Text } from '@chakra-ui/react';

// const color = 'white';
export function H1({ children, color }) {
  return (
    <Heading color={color} size={['2xl', '4xl']}>{children}</Heading>
  );
}

export function H2({ children, color }) {
  return (
    <Heading color={color} size={['xl', '3xl']}>{children}</Heading>
  );
}
export function H3({ children, color }) {
  return <Heading color={color} size={['lg', '2xl']}>{children}</Heading>;
}

export function Body({ children, color }) {
  return <Text color={color} fontSize={['lg', 'xl']}>{children}</Text>;
}
