import { Dispatch } from 'react'

export type Nav_link_types = {
    title: string;
    icon: JSX.Element;
    close: Dispatch<React.SetStateAction<boolean>>;
    currentTab: string;
    setTab:Dispatch<React.SetStateAction<string>>;
}
export type Toggle_types={
    type: string;
    icon: JSX.Element;
    showBadge?: boolean;
}

export type categoryType= {
    name: string;
    quantity: number;
    icon: string;
}

export type FoodCardType = {
    id: string;
    name: string;
    imgUrl:string,
    reduction: string;
    isRecomended: boolean;
    price: number;
    reductionPrice: number;
}

export type CustomerCardType = {
    id:string
    name: string;
    username: string;
    imgurl: string;
}

export type ReviewCardType = {
    user: CustomerCardType,
    date: Date | string,
    avis: [string, string],
    description: string;
}

export type StatusType = "completed" | "pending" | "preparing";

export type OrderCardType = {
    id: string;
    user?: CustomerCardType;
    user_id?: string;
    menu: string;
    totalPayment: number;
    status: StatusType;
}