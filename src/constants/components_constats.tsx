import { BiHomeAlt, BiDiamond,BiUserCircle } from "react-icons/bi";
import { CiShop} from "react-icons/ci";
import { AiOutlineStar } from "react-icons/ai";
import { Nav_link_types } from "../common.types";

export const nav_links:Nav_link_types[] = [
    {
        title: 'home',
        icon:<BiHomeAlt/>
    },
    {
        title: 'products',
        icon:<BiDiamond/>
    },
    {
        title: 'reviews',
        icon:<AiOutlineStar/>
    },
    {
        title: 'orders',
        icon:<CiShop/>
    },
    {
        title: 'customers',
        icon:<BiUserCircle/>
    },
]
