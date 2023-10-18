import AdminMenu from "components/menuHeader/admin";
import {
    ActivityCardContainer,
    ActivityCardTemp,
    AdminContainer,
    AdminHomeContainer,
    AdminHomeFlexDiv,
    AllTripsCardContainer,
    ReviewContainer,
    ButtonDiv,
    GreyText,
    TripCardContainer,
    TripCardList,
    PastTripCardList,
    TripHeadText,
} from "./style";
import AdminHeaderTitle from "components/menuHeader/admin/HeaderTitle";
import { MuiInnputField, MuiTextArea } from "components/muiInputFields";
import { useRef, useState } from "react";
import { ImageInput } from "components/imageInput";
import { CreateTripCardList } from "../trips/style";
import { SubmitButton } from "components/buttons/submitButton";

type BasicTripData = {
    title: string;
    total: string;
    date: string;
};
const tripData: BasicTripData[] = [
    {
        title: "Explore Canary Island",
        total: "24 registrations",
        date: "05/05/2023 6:45 am",
    },
    {
        title: "Explore Canary Island",
        total: "24 registrations",
        date: "05/05/2023 6:45 am",
    },
    {
        title: "Explore Canary Island",
        total: "24 registrations",
        date: "05/05/2023 6:45 am",
    },
];

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

export function TripDetails() {
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
    

    function handleImageFieldChange(event: { target: { value: string; name: string };}) {
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
                {imageInputDetails.map((details,index) => (
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
                // onclick={() => setIsSubmitted("trip-details")}
                />
            </ButtonDiv>
        </AllTripsCardContainer>
    );
}

export function ActivityCard() {
    return (
        <ActivityCardContainer>
            <ActivityCardTemp>
                <h1>Upcoming Trips</h1>
                <GreyText>Recently Published</GreyText>
                <TripCardList>
                    {tripData.map(({ title, total, date }: BasicTripData,key ) => (
                        <div key={key}>
                            <TripDetailsCard title={title} total={total} date={date} />
                        </div>
                    ))}
                </TripCardList>
            </ActivityCardTemp>
            {/* <ActivityCardTemp>
				<h1>Activity</h1>
				<GreyText>Recently Published</GreyText>
				<TripCardList>
					{tripData.map(({ title, total, date }: BasicTripData) => (
						<TripCard title={title} total={total} date={date} />
					))}
				</TripCardList>
			</ActivityCardTemp> */}
        </ActivityCardContainer>
    );
}

export default function PastTripsAndReviews() {
    return (
        <AdminContainer>
            <AdminMenu />
            <AdminHomeContainer>
                <AdminHeaderTitle title="Past Trips And Reviews" />
                <AdminHomeFlexDiv>
                    <TripDetails />
                    <ActivityCard />
                </AdminHomeFlexDiv>
            </AdminHomeContainer>
        </AdminContainer>
    );
}
