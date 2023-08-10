import React from "react";
import { FooterListContainer } from "./style";

export enum ListType {
	texts,
	images,
}

type ListDataType = {
	name: string;
	link: string;
	linkType?: string;
};

export type FooterListType = {
	listType: ListType;
	list: ListDataType[] | string[] | any;
	header: string;
};

export type FooterListProp = {
	props: FooterListType;
};

export default function FooterList({ props }: FooterListProp) {
	return (
		<FooterListContainer>
			<h1>{props.header}</h1>
			{props.listType === ListType.texts &&
				props.list.map((data: ListDataType) => <h2>{data.name}</h2>)}
			{props.listType === ListType.images &&
				props.list.map((image: any) => <img src={image} alt="socials_icon" />)}
		</FooterListContainer>
	);
}
