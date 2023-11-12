import { Dispatch } from 'react'

export type Nav_link_types = {
    title: string;
    icon: JSX.Element;
    close:Dispatch<React.SetStateAction<boolean>>
}
export type Toggle_types={
    type: string;
    icon: JSX.Element;
    showBadge?: boolean;
}