import { Box, Flex, Heading, Icon, Text } from '@chakra-ui/react'

import { TbCurrencyNaira } from 'react-icons/tb'
import { CategorySection, TabsSection } from '../../components'


const Home = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
       flex="1" overflowY="auto"
      bg="white"
    >
      <Box  marginLeft="30px" >
        <Heading
          as="h1"
          size="28px"
          fontWeight="bold"
          marginTop="10px"
          color="#001233"
        >
          Budget
        </Heading>
        <Box display="flex" alignItems="center" marginTop="10px">
          <Icon as={TbCurrencyNaira} />
          <Text fontSize="14px" marginLeft="4px" color="#707480">
            Monthly Budget
          </Text>
        </Box>
        <Box
          display="flex"
          width="300px"
          height="51px"
          borderRadius="10px"
          boxShadow="0px 5px 10px 2px #00000008"
          marginLeft="20px"
        >
          <Flex
            alignItems="center"
            width="100%"
            style={{ marginTop: 'auto', marginBottom: 'auto' }}
          >
            <Icon as={TbCurrencyNaira} />
            <Text> 120,000 </Text>
          </Flex>
        </Box>
        <TabsSection/>
        <CategorySection/>
      </Box>
    </Box>
  )
}

export default Home
