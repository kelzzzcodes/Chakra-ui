import {
  Box,
  CircularProgress,
  CircularProgressLabel,
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
import { TabsData } from '../constants'

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

       {
        TabsData.map((items)=>(
             <TabPanel key={items.index}>
             <Box >
            <CircularProgress size="150px" value={items.value} color="green.400">
              <CircularProgressLabel>{items.rating}</CircularProgressLabel>
            </CircularProgress>

            <Box
              marginTop="20px"
              marginLeft="20px"
              display="flex"
              flexDirection="column"
            >
              <Text fontSize="14px">Amount spent so far </Text>

              <Text display="flex" fontSize="16px" color="#0466C8">
                {items.expenditure}/<Text color="#67A2DC">{items.income}</Text>
              </Text>
            </Box>
          </Box>
            </TabPanel>
        ))
       }


      </TabPanels>
    </Tabs>
  )
}

export default TabsSection
