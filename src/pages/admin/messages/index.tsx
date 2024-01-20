import AdminMenu from "components/menuHeader/admin";
import { AdminContainer } from "../home/style";
import AdminHeaderTitle from "components/menuHeader/admin/HeaderTitle";
import { AdminHeaderSpace } from "components/menuHeader/admin/style";
import {
	EmptyMessageContainer,
	MessageContainer,
	MessageDetailsContainer,
	MessageDetailsWrapper,
	MessageFlexContainer,
	MessagesListContainer,
} from "./style";
import useMessage, { MessageType } from "./useMessage";

function EmptyMessage({ text = "No Message Available" }) {
	return (
		<EmptyMessageContainer>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="142"
				height="120"
				viewBox="0 0 142 120"
				fill="none"
			>
				<path
					d="M131.186 28.4778L76.2239 1.32239C74.4502 0.452355 72.5009 0 70.5253 0C68.5497 0 66.6003 0.452355 64.8266 1.32239L9.8641 28.4778C6.90455 29.9137 4.40947 32.1544 2.66484 34.9431C0.920218 37.7318 -0.00334666 40.9557 9.11241e-06 44.2452V102.369C9.11241e-06 112.091 8.00336 120 17.8423 120H123.208C133.047 120 141.051 112.091 141.051 102.369V44.2452C141.054 40.9557 140.13 37.7318 138.386 34.9431C136.641 32.1544 134.146 29.9137 131.186 28.4778ZM69.3855 10.3333C69.7403 10.1592 70.1301 10.0688 70.5253 10.0688C70.9204 10.0688 71.3102 10.1592 71.665 10.3333L124.993 36.6732L70.8401 63.435C70.4854 63.609 70.0955 63.6995 69.7004 63.6995C69.3052 63.6995 68.9154 63.609 68.5606 63.435L15.2228 37.0919L69.3855 10.3333Z"
					fill="#C4C4C4"
				/>
			</svg>
			<p>{text} </p>
		</EmptyMessageContainer>
	);
}

const Messages = () => {
	const { messages, loading, setInView, inView } = useMessage();
	return (
		<AdminContainer>
			<AdminMenu />
			<AdminHeaderTitle title="Messages" />
			<AdminHeaderSpace />
			<MessageFlexContainer>
				<MessagesListContainer>
					<h3>All Messages</h3>
					{messages.length < 1 && <EmptyMessage />}
					{!loading &&
						messages.length > 0 &&
						messages.map((message: MessageType, i: number) => (
							<MessageContainer onClick={() => setInView(i)} key={i}>
								<h1>{message.fullName}</h1>
								<p>{message.message}</p>
								<small>{new Date(message.createdAt).toLocaleString()}</small>
							</MessageContainer>
						))}
				</MessagesListContainer>
				{messages.length > 0 && (
					<MessageDetailsContainer>
						<h1>Message Details</h1>
						{messages.length > 0 && inView === null && (
							<EmptyMessage text="Open a message to see it here" />
						)}
						{inView !== null && (
							<MessageDetailsWrapper>
								<h1>{messages[inView].fullName}</h1>
								<p>{messages[inView].email}</p>
								<p>{messages[inView].phone}</p>
								<br />
								<p>{messages[inView].message}</p>
							</MessageDetailsWrapper>
						)}
					</MessageDetailsContainer>
				)}
			</MessageFlexContainer>
		</AdminContainer>
	);
};

export default Messages;
