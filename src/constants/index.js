import { MdOutlineHome } from 'react-icons/md'
import { TbFileHorizontal, TbPigMoney } from 'react-icons/tb'
import { RiChatSmile2Line } from 'react-icons/ri'
import { RiBarChartFill } from 'react-icons/ri'
import { IoPersonOutline, IoRestaurantOutline } from 'react-icons/io5'

export const BottombarLinks = [
  {
    path: '/',
    icon: MdOutlineHome,
    label: 'Home',
  },
  {
    path: '/',
    icon: TbFileHorizontal,
    label: 'Reports',
  },
  {
    path: '/',
    icon: RiChatSmile2Line,
    label: 'Chat',
  },
  {
    path: '/',
    icon: RiBarChartFill,
    label: 'Budget',
  },
  {
    path: '/',
    icon: IoPersonOutline,
    label: 'Profile',
  },
]

export const TabsData = [
  {
    value: '20',
    rating: '40%',
    expenditure: '₦24,000',
    income: '₦60,000',
  },
  {
    value: '70',
    rating: '49%',
    expenditure: '₦50,000',
    income: '₦120,000',
  },
]

export const CategoryData = [
  {
    label: 'Food and Drinks',
    icon: IoRestaurantOutline,
    rating: '40%',
    expenditure: '₦20,000',
    income: '₦42,000',
  },
  {
    label: 'Savings',
    icon: TbPigMoney,
    rating: '10%',
    expenditure: '₦10,000',
    income: '₦24,000',
  },
  {
    label: 'events',
    icon: IoRestaurantOutline,
    rating: '20%',
    expenditure: '₦20,000',
    income: '₦42,000',
  },
  {
    label: 'School fees',
    icon: TbPigMoney,
    rating: '10%',
    expenditure: '₦10,000',
    income: '₦24,000',
  },
]
