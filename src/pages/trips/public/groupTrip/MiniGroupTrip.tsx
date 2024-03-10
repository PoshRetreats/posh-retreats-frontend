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
import {
	ADMIN_GROUP_TRIPS_DETAILS_URL,
	ADMIN_GROUP_TRIP_USERS_URL,
	TRIPS_OVERVIEW_URL,
	getItineraryUrl,
} from "routes/frontend";
import {
	GeneralResponseType,
	makeDeleteRequestWithAxios,
	makePutRequestWithAxios,
} from "requests/requests";
import { SERVER_DELETE_PUBLIC_TRIPS, SERVER_END_PUBLIC_TRIPS } from "routes/server";
import { useState } from "react";
import useToastStore from "components/appToast/store";
import useAppNavigator from "hooks/useAppNavigator";

function AdminFeatures({ data }: any) {
	const [deleting, setDeleting] = useState(false);
	const [ending, setEnding] = useState(false);
	const toast = useToastStore();
	const hasItinerary: boolean = !!data?.review?._id;
	const { appNavigator } = useAppNavigator();

	console.log({ hasItinerary, rev: data });

	function goToItinerary() {
		console.log({ data });
		const url = getItineraryUrl(data._id);
		appNavigator(url, { tripDetails: { ...data } });
	}

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

	async function viewRegistrations() {
		console.log({ data });
		appNavigator(ADMIN_GROUP_TRIP_USERS_URL, {
			travellers: [...data?.joinedTravellersForm],
		});
		return null;
	}

	return (
		<AdminFeaturesContainer>
			{!hasItinerary && <button onClick={goToItinerary}>Add Itinerary</button>}
			<button onClick={deleteTrip}>
				{deleting ? "deleting..." : "Delete Trip"}
			</button>
			<button onClick={endTrip}>{ending ? "ending..." : "End Trip"}</button>
			<button onClick={viewRegistrations}>Registrations</button>
		</AdminFeaturesContainer>
	);
}

export default function MiniGroupTrip({ data, isAdmin }: any) {
	const percent =
		(Number(data.registeredTravelers) / Number(data.totalExpectedTravelers)) * 100;
	const { appNavigator } = useAppNavigator();
	const date = new Date(data.depatureDate).toLocaleDateString();
	console.log({
		data,
		percent,
		reg: data.registeredTravelers,
		tot: data.totalExpectedTravelers,
	});

	function handleTripClick() {
		if (isAdmin) {
			appNavigator(ADMIN_GROUP_TRIPS_DETAILS_URL, {
				tripDetails: { ...data },
				showButton: false,
			});
			return;
		}
		appNavigator(TRIPS_OVERVIEW_URL, { tripDetails: { ...data } });
	}
	return (
		<MiniGroupTripContainer img={data.images[0]}>
			{isAdmin && <AdminFeatures data={data} />}
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
