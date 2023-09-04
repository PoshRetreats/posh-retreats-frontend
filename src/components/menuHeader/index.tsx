import React from "react";
import { MenuHeaderContainer } from "./style";

export default function MenuHeader({img}:any) {
	return <MenuHeaderContainer img={img}>
    <h2>Menu Header</h2>
  </MenuHeaderContainer>;
}
