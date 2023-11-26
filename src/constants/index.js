import { MdOutlineHome } from "react-icons/md";
import { TbFileHorizontal,TbPigMoney } from "react-icons/tb";
import { RiChatSmile2Line } from "react-icons/ri";
import { RiBarChartFill } from "react-icons/ri";
import { IoPersonOutline,IoRestaurantOutline } from "react-icons/io5";


export const BottombarLinks = [
    {
    path: '/',
    icon: MdOutlineHome,
    label: 'Home',

  },
  {
    path: '/reports',
    icon:TbFileHorizontal,
    label: 'Reports',
  },
  {
    path: '/chat',
    icon: RiChatSmile2Line,
    label: 'Chat',
  },
  {
    path: '/budget',
    icon: RiBarChartFill,
    label: 'Budget',
  },
    {
    path: '/profile',
    icon: IoPersonOutline,
    label: 'Profile',
  },
]

export const CategoryData = [

  {
    label: 'Food and Drinks',
    icon: IoRestaurantOutline,
    rating: '40%' ,
    expenditure: '₦20,000',
    income: '₦42,000'
  },
   {
    label: 'Savings',
    icon: TbPigMoney,
    rating: '10%' ,
    expenditure: '₦10,000',
    income: '₦24,000'
  },



]