import { useEffect, useState } from "react";
import { makeGetRequestWithToken } from "requests/requests";
import { CONTACT_US } from "routes/server";

export type MessageType = {
	createdAt: Date;
	fullName: string;
	email: string;
	message: string;
	phone: string;
	updatedAt: Date;
	_id: string;
};

export default function useMessage() {
  const [messages, setMessages] = useState<MessageType[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [inView, setInView] = useState<number | null>(null);
	async function getMessages() {
		try {
			setLoading(true);
			const response: any = await makeGetRequestWithToken(CONTACT_US);
			console.log({ response });
			setMessages(response.data);
		} catch (err) {
			console.log({ err });
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		getMessages();
	}, []);

  return {
		messages,
		loading,
		inView,
		setInView,
	};
}
