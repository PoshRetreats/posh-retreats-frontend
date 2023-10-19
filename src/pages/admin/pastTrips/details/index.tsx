import { SubmitButton } from "components/buttons/submitButton";
import {
    SelectedTagsMain,
    TripDetailsDescription,
    TripDetailsMain,
    SelectedTagsBtn,
    TripDetailsImageMain,
} from "./style";
import {  BACK_ICON, SELECTED_TRIP_IMAGE, THREE_DOT } from "assets";
import { SelectedTripImage } from "components/selectedTripImage";
import { FC } from "react";
import {  SelectedTagType } from "pages/admin/trips/types";



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




export function TripPreviewDetails({ setIsSubmitted }: { setIsSubmitted: React.Dispatch<React.SetStateAction<string>> }) {



    return (
        <>
            <TripDetailsMain>
                <header>
                    <section className="header_section">
                        <img onClick={() => setIsSubmitted("trips-form")} alt="back icon" src={BACK_ICON} />
                        <h1>Trip review</h1>
                    </section>
                    <img src={THREE_DOT} alt="dots" />
                </header>
                <h3>Petra Jordan</h3>
                <TripDetailsDescription>
                    <TripDetailsImage />
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
                    <div className="included_trips">
                        <section className="included_trips_condition">
                            <span>Rita Ora (Petra Jordan, 2015)</span>
                        </section>
                        <TripDetailsImageMain>
                            <SelectedTripImage src={SELECTED_TRIP_IMAGE} alt="selected trip details" />
                        </TripDetailsImageMain>
                    </div>
                </TripDetailsDescription>
                <SubmitButton className="Submit_btn" name="Update" />
            </TripDetailsMain>
        </>
    );
}