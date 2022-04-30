import { DrawerProps } from "antd";
import { MenuMode } from "antd/lib/menu";
import {ReactNode} from "react";


export interface headerProps {
    children : ReactNode
}

export interface menuProps {
    mode?: string | undefined |any |MenuMode
}

export interface HeaderDrawerProps extends DrawerProps{
   
}