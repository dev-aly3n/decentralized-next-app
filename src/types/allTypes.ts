import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { ReactElement } from "react";



export interface tabType {
  activeCard: boolean;
  name: string;
  image: string;
  desc: ReactElement<any, any>;
}

export interface tabsType {
  tabGroup: string;
  activeGroup: boolean;
  tabInfo: tabType[];
}
