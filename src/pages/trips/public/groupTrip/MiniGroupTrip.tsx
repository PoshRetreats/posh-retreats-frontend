import { useNavigate } from "react-router-dom";
import {
	AdminFeaturesContainer,
	FilledProgressBar,
	FilledText,
	MiniGroupTripContainer,
	MiniGroupTripDescriptionArea,
	ProgressBarDiv,
	TagContainer,
	TagContainerList,
	TextContainer,
} from "./style";
import { ADMIN_GROUP_TRIPS_DETAILS_URL, TRIPS_OVERVIEW_URL } from "routes/frontend";
import {
	GeneralResponseType,
	makeDeleteRequestWithAxios,
	makePutRequestWithAxios,
} from "requests/requests";
import { SERVER_DELETE_PUBLIC_TRIPS, SERVER_END_PUBLIC_TRIPS } from "routes/server";
import { useState } from "react";
import useToastStore from "components/appToast/store";

function AdminFeatures({ data }: any) {
	const [deleting, setDeleting] = useState(false);
	const [ending, setEnding] = useState(false);
	const toast = useToastStore();

	async function deleteTrip() {
		try {
			setDeleting(true);
			const res = (await makeDeleteRequestWithAxios(SERVER_DELETE_PUBLIC_TRIPS, {
				id: data._id,
			})) as GeneralResponseType;
			console.log({ res });
			toast.showSuccessToast("Successfully deleted trip");
			window.location.reload();
		} catch (err: any) {
			toast.showFailedToast("Failed to delete trip", err.message);
			return null;
		} finally {
			setDeleting(false);
		}
	}

	async function endTrip() {
		try {
			setEnding(true);
			const res = (await makePutRequestWithAxios(SERVER_END_PUBLIC_TRIPS, {
				id: data._id,
			})) as GeneralResponseType;
			console.log({ res });
			toast.showSuccessToast("Successfully ended trip");
			window.location.reload();
		} catch (err: any) {
			toast.showFailedToast("Failed to end trip", err.message);
			return null;
		} finally {
			setEnding(false);
		}
	}

	return (
		<AdminFeaturesContainer>
			{deleting ? (
				<h3>deleting...</h3>
			) : (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="22"
					height="24"
					viewBox="0 0 22 24"
					fill="none"
				>
					<path
						d="M4 24C3.26667 24 2.63867 23.7387 2.116 23.216C1.59333 22.6933 1.33244 22.0658 1.33333 21.3333V4H0V1.33333H6.66667V0H14.6667V1.33333H21.3333V4H20V21.3333C20 22.0667 19.7387 22.6947 19.216 23.2173C18.6933 23.74 18.0658 24.0009 17.3333 24H4ZM17.3333 4H4V21.3333H17.3333V4ZM6.66667 18.6667H9.33333V6.66667H6.66667V18.6667ZM12 18.6667H14.6667V6.66667H12V18.6667Z"
						fill="#E21E1E"
					/>
				</svg>
			)}

			{ending ? <h3>ending...</h3> : <h3 onClick={endTrip}>End Trip</h3>}
		</AdminFeaturesContainer>
	);
}

export default function MiniGroupTrip({ data, isAdmin }: any) {
	const percent =
		(Number(data.registeredTravelers) / Number(data.totalExpectedTravelers)) * 100;
	const navigate = useNavigate();
	const date = new Date(data.depatureDate).toLocaleDateString();
	console.log({
		data,
		percent,
		reg: data.registeredTravelers,
		tot: data.totalExpectedTravelers,
	});

	function handleTripClick() {
		if (isAdmin) {
			navigate(ADMIN_GROUP_TRIPS_DETAILS_URL, {
				state: { ...data, showButton: false },
			});
			return;
		}
		navigate(TRIPS_OVERVIEW_URL, { state: { data } });
	}
	return (
		<MiniGroupTripContainer img={data.images[0]}>
			<AdminFeatures data={data} />
			<TagContainerList>
				{data.tags.map((tag: string, i: number) => (
					<TagContainer key={i}>
						<p>{tag}</p>
					</TagContainer>
				))}
			</TagContainerList>
			<MiniGroupTripDescriptionArea onClick={handleTripClick}>
				<p>{date}</p>
				<h3>{data.title}</h3>
				<ProgressBarDiv>
					<FilledProgressBar percent={percent}>
						<TextContainer>
							<FilledText>{percent.toFixed(1)}% Capacity</FilledText>
						</TextContainer>
					</FilledProgressBar>
				</ProgressBarDiv>
			</MiniGroupTripDescriptionArea>
		</MiniGroupTripContainer>
	);
}
