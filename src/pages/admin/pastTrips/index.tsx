import AdminMenu from "components/menuHeader/admin";
import {
    AdminContainer,
    AdminHomeContainer,
    AdminHomeFlexDiv,
    AllTripsCardContainer,
    ReviewContainer,
    ButtonDiv,
    GreyText,
    TripCardContainer,
    PastTripCardList,
    TripHeadText,
    AllGroupTripContainer,
    AllGroupTripCardTemp,
    ContentSection,
    AllGroupTripCardList,
    ImageDiv,
} from "./style";
import AdminHeaderTitle from "components/menuHeader/admin/HeaderTitle";
import { MuiInnputField, MuiTextArea } from "components/muiInputFields";
import { useRef, useState } from "react";
import { ImageInput } from "components/imageInput";
import { CreateTripCardList } from "../trips/style";
import { SubmitButton } from "components/buttons/submitButton";
import { TripPreviewDetails } from "./details";
import { UpcomingTripImage } from "components/menuHeader/admin/upcomingTripImage";
import { UPCOMING_GROUP_TRIPS_IMAGE } from "assets";

type BasicTripData = {
    title: string;
    total: string;
    date: string;
};

const imageInputDetails = [
    { name: "imag1", label: "Select image" },
    { name: "imag2", label: "Select image" },
    { name: "imag3", label: "Select image" },
    { name: "imag4", label: "Select image" },
    { name: "imag5", label: "Select image" },
    { name: "imag6", label: "Select image" },
];

export function TripDetailsCard({ title, total, date }: BasicTripData) {
    return (
        <TripCardContainer>
            <div>
                <TripHeadText>{title}</TripHeadText>
                <GreyText>{total}</GreyText>
            </div>
            <GreyText>{date}</GreyText>
        </TripCardContainer>
    );
}

export function Review() {


    type ReviewState = {
        review: string;
        name: string;
        location: string;
        year: string;
    };



    const [review, setReviews] = useState<ReviewState>({
        review: "",
        name: "",
        location: "",
        year: "",
    });


    const reviews = [
        { name: "review", label: "Review" },
        { name: "name", label: "Name" },
        { name: "location", label: "Location" },
        { name: "year", label: "Year" },
    ];

    function handleChange(event: { target: { value: string; name: string } }) {
        const value = event.target.value;

        setReviews({ ...review, [event.target.name]: value });
    }



    return (
        <>
            <ReviewContainer>
                <h3>Trip Reviews</h3>
                <CreateTripCardList>
                    {reviews.map((reviewItem) => (
                        <div key={reviewItem.name} >
                            <MuiInnputField
                                onchange={handleChange}
                                value={review[reviewItem.name as keyof ReviewState]}
                                type="text"
                                name={reviewItem.name}
                                placeholder={reviewItem.label}
                            />
                        </div>
                    ))}
                </CreateTripCardList>
            </ReviewContainer>
        </>
    );
}

export function TripDetails({ setIsSubmitted }: { setIsSubmitted: React.Dispatch<React.SetStateAction<string>> }) {
    const inneRef = useRef<HTMLInputElement | null>(null);

    const clickImageField = () => inneRef.current?.click();

    const [imageFields, setImageFields] = useState<any>({
        image1: "",
        image2: "",
        image3: "",
        image4: "",
        image5: "",
        image6: "",
    });

    const [information, setInformation] = useState<string>("")


    function handleImageFieldChange(event: { target: { value: string; name: string }; }) {
        const value = event.target.value;

        setImageFields({ ...imageFields, [event.target.name]: value });
    }


    return (
        <AllTripsCardContainer>
            <h1>Trip Details</h1>
            <MuiTextArea
                value={information}
                onchange={(e) => setInformation(e.target.value)}
                placeholder="Add Information"
            />
            <PastTripCardList>
                {imageInputDetails.map((details, index) => (
                    <div key={index}>
                        <ImageInput

                            inneRef={inneRef}
                            onChange={handleImageFieldChange}
                            onClick={clickImageField}
                        />
                    </div>
                ))}
            </PastTripCardList>
            <Review />
            <ButtonDiv>
                <SubmitButton
                    className="Submit_btn_preview"
                    name="Post"
                onclick={() => setIsSubmitted("trips-details-review")}
                />
            </ButtonDiv>
        </AllTripsCardContainer>
    );
}

export function AllPastTrip() {
    return (
        <AllGroupTripContainer>
            <AllGroupTripCardTemp>
                <h1>All Group Trips</h1>
                <GreyText>Recently Published</GreyText>
                <ContentSection>
                    <AllGroupTripCardList>
                        <h3 className="upcoming_trip_h3">
                            Let’s Tour the shallow waters of Mozambique!
                        </h3>
                        <GreyText>2022</GreyText>
                    </AllGroupTripCardList>
                    <ImageDiv>
                        <UpcomingTripImage src={UPCOMING_GROUP_TRIPS_IMAGE} alt="" />
                    </ImageDiv>
                </ContentSection>
            </AllGroupTripCardTemp>
        </AllGroupTripContainer>
    );
}




export default function PastTripsAndReviews() {
    const [isSubmited, setIsSubmitted] = useState("trips-form")
    return (
        <AdminContainer>
            <AdminMenu />
            <AdminHomeContainer>
                <AdminHeaderTitle title="Past Trips And Reviews" />
                <AdminHomeFlexDiv>
                    {isSubmited === "trips-form" ? (<TripDetails setIsSubmitted={setIsSubmitted} />) :
                    isSubmited === "trips-details-review" && (
                        <TripPreviewDetails setIsSubmitted={setIsSubmitted} />)}
                    <AllPastTrip />
                </AdminHomeFlexDiv>
            </AdminHomeContainer>
        </AdminContainer>
    );
}
