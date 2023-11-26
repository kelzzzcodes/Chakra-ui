import React from 'react'
import { Outlet } from 'react-router-dom'
import Bottombar from '../components/Bottombar';
import { Flex } from '@chakra-ui/react';

const RootLayout = () => {
  return (
    <Flex   minHeight="100vh" direction="column">
      <Outlet/>
      <div>
        <Bottombar/>
      </div>

    </Flex>
  )
}

export default RootLayout