type FeatureTripDetailsProps = {
	breakDown?: string;
	inclusion?: string;
	exclusion?: string;
};

export interface GroupTripDetailsProps{
	title?: string;
	details?: string;
	depatureDate?: any;
	returnDate?: any;
	breakDown?: string;
	inclusion?: string;
	exclusion?: string;
	image?: string
	payment?: string;
};

export interface FeatureTripAddedDetailsProps {
	breakDown?: string[];
	inclusion?: string[];
	exclusion?: string[];
	image?: string[];
}

export interface TripProps extends GroupTripDetailsProps {
	groupTripDetails: FeatureTripDetailsProps | any;
	setGroupTripDetails: any;
	setAddedFeatures?: React.Dispatch<
		React.SetStateAction<FeatureTripAddedDetailsProps>
	>;
	addedFeatures?: FeatureTripAddedDetailsProps;
};

interface SelectedTagProps {
	id: string;
	tag: string;
}
export type SelectedTagType = SelectedTagProps[] | any[];

interface Condition {
	id: string;
	condition: string;
}

export type ConditionProps = Condition[];
