import { MdOutlineHome } from "react-icons/md";
import { TbFileHorizontal } from "react-icons/tb";
import { RiChatSmile2Line } from "react-icons/ri";
import { RiBarChartFill } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";

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