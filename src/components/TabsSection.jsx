import {
  Box,
  Icon,
  Spacer,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react'
import { BsThreeDots } from 'react-icons/bs'

const TabsSection = () => {
  return (
    <Tabs position="relative" variant="unstyled" marginTop="16px">
      <Box display="flex" alignItems="center" w="315px">
        <TabList display="flex" alignItems="center">
          <Tab
            _selected={{
              color: '#0466C8',
              tabIndicatorStyle: { width: '10px' },
            }}
          >
            Last Month
          </Tab>
          <Tab
            _selected={{
              color: '#0466C8',
              tabIndicatorStyle: { width: '10px' },
            }}
          >
            This Month
          </Tab>
        </TabList>
        <Spacer />
        <Icon as={BsThreeDots} />
      </Box>

      <TabIndicator mt="-1.5px" height="2px" bg="blue.500" borderRadius="1px" />
      <TabPanels>
        <TabPanel

        >
          <Box>
            <Box
              w="150px"
              height="150px"
              borderRadius="50%"
              outline="10px solid #0466C866"
            >

            </Box>
           <Box marginTop='20px' marginLeft='20px' display='flex' flexDirection='column'>

             <Text   fontSize='14px' >Amount spent so far </Text>

             <Text display='flex' fontSize='16px' color='#0466C8'>
                ₦50,000/<Text color='#67A2DC'>₦120,000</Text>
             </Text>
           </Box>
          </Box>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default TabsSection
