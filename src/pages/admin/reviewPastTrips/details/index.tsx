import { SubmitButton } from "components/buttons/submitButton";
import {
    SelectedTagsMain,
    TripDetailsDescription,
    TripDetailsMain,
    SelectedTagsBtn,
    TripDetailsImageMain,
} from "./style";
import {  BACK_ICON, THREE_DOT } from "assets";
import { SelectedTripImage } from "components/selectedTripImage";
import { FC } from "react";
import {  SelectedTagType } from "pages/admin/trips/types";
import { AdminContainer, AdminHomeContainer, AdminHomeFlexDiv } from "../style";
import AdminMenu from "components/menuHeader/admin";
import AdminHeaderTitle from "components/menuHeader/admin/HeaderTitle";
import { AllPastTrip } from "..";
import { useLocation } from "react-router-dom";



export const SelectedTags: FC<{ selectedTags: SelectedTagType }> = ({ selectedTags }) => {
    return (
        <>
            <SelectedTagsMain>
                {selectedTags &&
                    selectedTags.map((tag) => (
                        <SelectedTagsBtn key={tag.id}>
                            <span>{tag.tag || tag}</span>
                        </SelectedTagsBtn>
                    ))}
            </SelectedTagsMain>
        </>
    );
};


// IMAGES: THIS WILL BE MAPPED WHEN THE API'S COME
export const TripDetailsImage = ({src}: any) => {
    return (
        <TripDetailsImageMain>
           {src.map((image: any, index: any) =>( <div className="images">
                <SelectedTripImage key={index} src={image[0]} alt="selected trip details" />
            </div>))}
        </TripDetailsImageMain>
    );
};




export function TripPreviewDetails({data}: any) {



    return (
        <>
            <TripDetailsMain>
                <header>
                    <section className="header_section">
                        <img  alt="back icon" src={BACK_ICON} />
                        <h1>Trip review</h1>
                    </section>
                    <img src={THREE_DOT} alt="dots" />
                </header>
                <h3>{data.information}</h3>
                <TripDetailsDescription>
                    <TripDetailsImage src= {data.image} />
                    <p>
                       {data.review}
                    </p>
                    <div className="included_trips">
                        <section className="included_trips_condition">
                            <span>{data.location} ({data.name}, {data.date})</span>
                        </section>
                        {/* <TripDetailsImageMain>
                            <SelectedTripImage src={data.image} alt="selected trip details" />
                        </TripDetailsImageMain> */}
                    </div>
                </TripDetailsDescription>
                <SubmitButton disabled className="Submit_btn" name="Update" />
            </TripDetailsMain>
        </>
    );
}





export default function PastTripsAndReviewsDetails() {
    const location = useLocation()
  
	
	return (
		<AdminContainer>
			<AdminMenu />
			<AdminHomeContainer>
				<AdminHeaderTitle title="Past Trips And Reviews" />
				<AdminHomeFlexDiv>
						<TripPreviewDetails data = {location.state} />
					<AllPastTrip />
				</AdminHomeFlexDiv>
			</AdminHomeContainer>
		</AdminContainer>
	);
}