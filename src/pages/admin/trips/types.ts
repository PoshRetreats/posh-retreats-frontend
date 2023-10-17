type FeatureTripDetailsProps = {
	breakthrough?: string;
	inclusion?: string;
	exclusion?: string;
};

export type TripProps = {
	groupTripDetails: FeatureTripDetailsProps | any;
	setGroupTripDetails: any;
};


interface SelectedTagProps {
    id: string;
    tag: string;
}
export type SelectedTagType = SelectedTagProps[] | any[]

 interface Condition {
    id: string;
    condition: string;
}

export type ConditionProps = Condition[]