import { SubmitButton } from "components/buttons/submitButton";
import {
    SelectedTagsMain,
    TripDetailsDescription,
    TripDetailsMain,
    SelectedTagsBtn,
    Dates,
    Active,
    TripDetailsImageMain,
} from "./style";
import { ACTIVE_ICON, BACK_ICON, SELECTED_TRIP_IMAGE, THREE_DOT } from "assets";
import { SelectedTripImage } from "components/selectedTripImage";
import { FC } from "react";
import { SelectedTagType, ConditionProps } from "../types";



export const SelectedTags: FC<{ selectedTags: SelectedTagType }> = ({ selectedTags }) => {
    return (
        <>
            <SelectedTagsMain>
                {selectedTags &&
                    selectedTags.map((tag) => (
                        <SelectedTagsBtn key={tag.id}>
                            <span>{tag.tag}</span>
                        </SelectedTagsBtn>
                    ))}
            </SelectedTagsMain>
        </>
    );
};


// IMAGES: THIS WILL BE MAPPED WHEN THE API'S COME
export const TripDetailsImage = () => {
    return (
        <TripDetailsImageMain>
            <div className="images">
                <SelectedTripImage src={SELECTED_TRIP_IMAGE} alt="selected trip details" />
                <SelectedTripImage src={SELECTED_TRIP_IMAGE} alt="selected trip details" />
                <SelectedTripImage src={SELECTED_TRIP_IMAGE} alt="selected trip details" />
                <SelectedTripImage src={SELECTED_TRIP_IMAGE} alt="selected trip details" />
                <SelectedTripImage src={SELECTED_TRIP_IMAGE} alt="selected trip details" />
                <SelectedTripImage src={SELECTED_TRIP_IMAGE} alt="selected trip details" />
            </div>
        </TripDetailsImageMain>
    );
};




export function TripDetails({ setIsSubmitted }: { setIsSubmitted: React.Dispatch<React.SetStateAction<string>> }) {

    // LIST OF TAGS SELECTED BY USER THESE DATA WILL COME FROM BACK END 
    const selectedTags: SelectedTagType = [
        { tag: "Culture", id: "1" },
        { tag: "Adventure", id: "2" },
        { tag: "Religion", id: "3" },
    ];


    const conditions: ConditionProps = [
        { id: "1", condition: "6 days and 5 nights" },
        { id: "2", condition: "This trip is open to men and women" },
    ];



    return (
        <>
            <TripDetailsMain>
                <header>
                    <section className="header_section">
                        <img onClick={() => setIsSubmitted("create-trip")} alt="back icon" src={BACK_ICON} />
                        <h1>Trip details</h1>
                    </section>
                    <img src={THREE_DOT} alt="dots" />
                </header>
                <h3>Let’s Tour the shallow waters of Mozambique!</h3>
                <TripDetailsDescription>
                    <p>
                        Escape to the enchanting paradise of Bali, Indonesia, where adventure
                        awaits at every turn. Immerse yourself in a kaleidoscope of colors as you
                        stroll through vibrant rice terraces, where emerald-green fields cascade
                        down the hillsides. Embrace the rhythm of life on pristine white-sand
                        beaches, caressed by the warm, turquoise waters of the Indian Ocean.
                        Unleash your inner explorer as you venture into dense jungles,
                        discovering hidden waterfalls and ancient temples that echo with whispers
                        of the past.
                    </p>
                    <SelectedTags selectedTags={selectedTags} />
                    <Dates>05/12/2023</Dates>
                    {conditions.map((condition) => (
                        <section key={condition.id} className="condition">
                            <Active alt="active" src={ACTIVE_ICON} />
                            <span>{condition.condition}</span>
                        </section>
                    ))}
                    <div className="included_trips">
                        <h3>Trip Includes</h3>
                        <section className="included_trips_condition">
                            <Active alt="active" src={ACTIVE_ICON} />
                            <span>This trip is open to men and women</span>
                        </section>
                    </div>
                    <div className="included_trips">
                        <h3>Trip Does Not Includes</h3>
                        <section className="included_trips_condition">
                            <Active alt="active" src={ACTIVE_ICON} />
                            <span>Trip Does Not Includes</span>
                        </section>
                    </div>
                    <TripDetailsImage />
                    <div className="included_trips">
                        <h3>Payment</h3>
                        <section className="included_trips_condition">
                            <span>$4,500</span>
                        </section>
                    </div>
                </TripDetailsDescription>
                <SubmitButton className="Submit_btn" name="Update" />
            </TripDetailsMain>
        </>
    );
}
