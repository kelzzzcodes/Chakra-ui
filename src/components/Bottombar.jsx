import { Box, Flex, Icon, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { BottombarLinks } from '../constants'

const Bottombar = () => {
  return (
    <Box
      position="fixed"
      bottom="0"
      left='0'

      w='xs'
      bg="white"
      color="#797B8B"
      display='flex'
      padding="1rem"
      zIndex="999"
    >
      <Flex display='flex' align="center" justify="space-between" w='xs'>
        {BottombarLinks.map((items) => (
          <Link
            key={items.label}
            href={items.path}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
          >
            <Icon as={items.icon} boxSize='23.5px' />
            <Text fontSize='xs'>{items.label}</Text>
          </Link>
        ))}
      </Flex>
    </Box>
  )
}

export default Bottombar
