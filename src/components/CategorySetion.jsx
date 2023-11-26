import { Box, Heading, Icon, Text } from '@chakra-ui/react'
import { IoRestaurantOutline } from 'react-icons/io5'
import { CategoryData } from '../constants'

const CategorySetion = () => {
  return (
    <Box>
      <Heading fontSize="24px" color="#001233">
        Category Breakdown
      </Heading>

      <Box marginTop="8px" display="flex" flexDirection="column" width="310px">
        {
            CategoryData.map((items)=>(
                     <Box display="flex" width="310px" justifyContent="space-between">
          <Box display="flex">
            <Icon as={items.icon} fontSize="38px" />
            <Box
              display="flex"
              flexDirection="column"
              alignItems="start"
              fontSize="14px"
              marginLeft="4px"
            >
              <Text>{items.label}</Text>
              <Text>{items.rating}</Text>
            </Box>
          </Box>

          <Box>
            <Text display="flex" fontSize="16px" color="#001233">
              {items.expenditure}/<Text color="#C1C4CD">{items.income}</Text>
            </Text>
          </Box>
        </Box>

            ))
        }

      </Box>
    </Box>
  )
}

export default CategorySetion
