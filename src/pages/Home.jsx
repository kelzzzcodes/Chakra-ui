import { Box, Heading } from '@chakra-ui/react'
import Bottombar from '../components/Bottombar'

const Home = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      h="100vh" // Set height to 100vh
      bg="white" // Outer box with green background
    >
      <Box
        display="flex"
        flexDirection="column"
        w="md"
        height="100vh"
        marginLeft="30px"
      >
        {/* <Heading as="h1" size="28px" fontWeight="bold" marginTop="20px">
          Budget
        </Heading> */}

        <Bottombar />
      </Box>
    </Box>
  )
}

export default Home
