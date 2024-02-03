import useToastStore from "components/appToast/store";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { GeneralResponseType, makeGetRequestWithToken } from "requests/requests";
import { SERVER_PAST_TRIP_PREVIEW } from "routes/server";

export const useGetPastTripsReviews = () =>{
   const {PastTrips_id} = useParams();
   const toast = useToastStore();

   const [loading, setLoading] = useState<boolean>(false);
   const [reviewTripsData, setReviewTripsData] = useState<any>([]);
   
   

   async function getPrivateTrips() {
       try {
           setLoading(true);
           const res = (await makeGetRequestWithToken(
               `${SERVER_PAST_TRIP_PREVIEW}/${PastTrips_id}`
           )) as GeneralResponseType;
           // toast.showSuccessToast("Message sent successfully");
           console.log("review", { res });
           setReviewTripsData(res?.data);
       } catch (err) {
           console.log({ err });
           toast.showFailedToast("could not fetch trips");
       } finally { 
           setLoading(false);
       }
   }

   useEffect(() => {
       getPrivateTrips();
       // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return {loading, reviewTripsData}
}