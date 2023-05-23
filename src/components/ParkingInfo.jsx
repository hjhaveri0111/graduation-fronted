/* eslint-disable max-len */
import React from 'react';
import {
  Flex, ListItem, OrderedList, Link, Divider, Spacer, Image,
} from '@chakra-ui/react';
import { ArrowBackIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import { H1, H2, H3 } from './Typography';
import parkingMap from '../assets/campus_map.png';

export default function ParkingInfo() {
  const parkingLots = [
    {
      name: 'Dewey',
      link: 'https://www.google.com/maps/place/Dewey+Field+Lot,+Hanover,+NH+03755/@43.7083764,-72.2831645,17z/data=!4m5!3m4!1s0x4cb4c9dac01d35f7:0xd6ac7396a8ee9fb2!8m2!3d43.7097253!4d-72.2825181?coh=164777&entry=tt&shorturl=1',
    },
    {
      name: 'Thompson',
      link: 'https://www.google.com/maps/place/Thompson+Arena/@43.7010857,-72.2805359,17z/data=!4m5!3m4!1s0x4cb4c9e0f0eda6f3:0x30cbb10800b21b7d!8m2!3d43.7009854!4d-72.2808264?coh=164777&entry=tt&shorturl=1',
    },
    {
      name: 'Ledyard',
      link: 'https://www.google.com/maps/place/Ledyard+Lot,+Hanover,+NH+03755/@43.7049779,-72.3001946,17z/data=!4m5!3m4!1s0x4cb4c9c030e53ea3:0xd10037b66b12007!8m2!3d43.7049779!4d-72.2980059?coh=164777&entry=tt&shorturl=1',
    },
  ];

  const renderLotList = () => {
    return (
      <OrderedList>
        {parkingLots.map((lot) => {
          return (
            <H2>
              <Link href={lot.link} isExternal>
                <ListItem>
                  {lot.name}
                  {' '}
                  <ExternalLinkIcon />
                </ListItem>
              </Link>
            </H2>
          );
        })}
      </OrderedList>
    );
  };
  return (
    <Flex w="100vw" h="auto" flexDir="column" alignItems="center" justifyContent="space-around" bgColor="white" pb={10}>
      <Link href="/">
        <ArrowBackIcon color="white" m={[1, 5]} style={{ position: 'absolute', top: '0px', left: '0px' }} boxSize={[6, 8]} />
      </Link>
      <Flex w="100%" h="50vh" justifyContent="center" alignItems="center" bgColor="#00693e" mb={10}>
        <H1 color="white">
          Directions and Parking
        </H1>
      </Flex>
      <Link
        href="https://www.google.com/maps/dir//dartmouth+green/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x4cb4c9c2b2b8f65f:0x9a645e5d47004bd3?sa=X&ved=2ahUKEwielfLclfv-AhWdlYkEHa9yBeQQ9Rd6BAhyEAQ"
        isExternal
      >
        <H1>
          Directions to Green
          {' '}
          <ExternalLinkIcon />
        </H1>
      </Link>

      <Spacer m={1} />
      <Divider mb={2} />

      <H1>Parking Lots</H1>
      <H3>Main Parking lots:</H3>
      {renderLotList()}
      <H3>All campus parking lots are free</H3>
      <H3>Street Parking is metered</H3>
      <Spacer m={1} />
      <Image w={['90%', '60%']} src={parkingMap} />
      <Spacer m={1} />
      <Divider mb={2} />

      <H1>Handicap</H1>

      <H3>Drop off at edge of the green before parking</H3>
      <Spacer m={1} />
      <Divider mb={2} />

      <H1>Shuttles</H1>
      <H3>There will be shuttles running from parking lots to Green</H3>

    </Flex>
  );
}
