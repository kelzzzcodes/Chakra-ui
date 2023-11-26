import { Box, Heading } from '@chakra-ui/react'
import Bottombar from '../components/Bottombar'

const Home = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      h="100vh" // Set height to 100vh
      bg="white"
      overflow='none'
      position='absolute' Outer box with green background
    >
      <Box w="md" position='fixed' top='0'>
        <Heading as="h1" size="28px" fontWeight="bold" marginTop="20px">
          Budget
        </Heading>
      </Box>
      <Bottombar />
    </Box>
  )
}

export default Home
