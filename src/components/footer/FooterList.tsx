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
				props.list.map((data: ListDataType, key: number) => (
					<h2 key={key}>{data.name}</h2>
				))}
			{props.listType === ListType.images &&
				props.list.map((image: string, key: number) => (
					<img key={key} src={image} alt="socials_icon" />
				))}
		</FooterListContainer>
	);
}
