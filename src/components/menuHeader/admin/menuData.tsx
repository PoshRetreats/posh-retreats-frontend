import {
	ADMIN_GROUP_TRIPS_URL,
	ADMIN_HOME_URL,
	ADMIN_PAST_TRIPS_URL,
	ADMIN_PRIVATE_TRIPS_URL,
} from "routes/frontend";

export const data = [
	{
		title: "Dashboard",
		link: ADMIN_HOME_URL,
		activeIcon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 14 14"
				fill="none"
			>
				<path
					d="M12.6 7.07C12.53 7.07 12.39 7.14 12.32 7.21L11.62 7.91L13.09 9.38L13.79 8.68C13.93 8.54 13.93 8.26 13.79 8.12L12.88 7.21C12.81 7.14 12.74 7.07 12.6 7.07ZM11.27 8.33L7 12.53V14H8.47L12.74 9.73L11.27 8.33ZM12.6 4.2H7V0H12.6V4.2ZM7 10.542V5.6H12.6V5.67C12.068 5.67 11.599 5.95 11.333 6.223L7 10.542ZM5.6 7H0V0H5.6V7ZM5.6 12.6H0V8.4H5.6V12.6Z"
					fill="white"
				/>
			</svg>
		),
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 14 14"
				fill="none"
			>
				<path
					d="M12.6 7.07C12.53 7.07 12.39 7.14 12.32 7.21L11.62 7.91L13.09 9.38L13.79 8.68C13.93 8.54 13.93 8.26 13.79 8.12L12.88 7.21C12.81 7.14 12.74 7.07 12.6 7.07ZM11.27 8.33L7 12.53V14H8.47L12.74 9.73L11.27 8.33ZM12.6 4.2H7V0H12.6V4.2ZM7 10.542V5.6H12.6V5.67C12.068 5.67 11.599 5.95 11.333 6.223L7 10.542ZM5.6 7H0V0H5.6V7ZM5.6 12.6H0V8.4H5.6V12.6Z"
					fill="#020E07"
				/>
			</svg>
		),
	},
	{
		title: "Group Trips",
		link: ADMIN_GROUP_TRIPS_URL,
		activeIcon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="23"
				viewBox="0 0 14 13"
				fill="none"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M4.49997 2.49998C4.49997 1.83694 4.76336 1.20106 5.2322 0.732227C5.70103 0.26339 6.33691 0 6.99995 0C7.66299 0 8.29887 0.26339 8.7677 0.732227C9.23654 1.20106 9.49993 1.83694 9.49993 2.49998C9.49993 3.16302 9.23654 3.7989 8.7677 4.26773C8.29887 4.73657 7.66299 4.99996 6.99995 4.99996C6.33691 4.99996 5.70103 4.73657 5.2322 4.26773C4.76336 3.7989 4.49997 3.16302 4.49997 2.49998ZM9.49993 4.49997C9.49993 3.96954 9.71064 3.46083 10.0857 3.08576C10.4608 2.71069 10.9695 2.49998 11.4999 2.49998C12.0303 2.49998 12.539 2.71069 12.9141 3.08576C13.2892 3.46083 13.4999 3.96954 13.4999 4.49997C13.4999 5.03039 13.2892 5.5391 12.9141 5.91417C12.539 6.28924 12.0303 6.49995 11.4999 6.49995C10.9695 6.49995 10.4608 6.28924 10.0857 5.91417C9.71064 5.5391 9.49993 5.03039 9.49993 4.49997ZM0.5 4.49997C0.5 3.96954 0.710712 3.46083 1.08578 3.08576C1.46085 2.71069 1.96956 2.49998 2.49998 2.49998C3.03041 2.49998 3.53912 2.71069 3.91419 3.08576C4.28926 3.46083 4.49997 3.96954 4.49997 4.49997C4.49997 5.03039 4.28926 5.5391 3.91419 5.91417C3.53912 6.28924 3.03041 6.49995 2.49998 6.49995C1.96956 6.49995 1.46085 6.28924 1.08578 5.91417C0.710712 5.5391 0.5 5.03039 0.5 4.49997ZM3.20665 8.07794C3.61328 7.44062 4.17402 6.91612 4.83705 6.55291C5.50007 6.18971 6.24396 5.99953 6.99995 5.99995C7.63316 5.99937 8.25935 6.13254 8.83753 6.39072C9.41571 6.64891 9.93285 7.0263 10.3551 7.49819C10.7773 7.97007 11.0951 8.52581 11.2877 9.12903C11.4803 9.73224 11.5433 10.3693 11.4726 10.9986C11.4639 11.0768 11.437 11.1518 11.3939 11.2176C11.3508 11.2834 11.2928 11.3381 11.2246 11.3772C9.93897 12.1149 8.48217 12.5021 6.99995 12.4999C5.51771 12.5022 4.06086 12.1151 2.77532 11.3772C2.70711 11.3381 2.6491 11.2834 2.60601 11.2176C2.56292 11.1518 2.53596 11.0768 2.52732 10.9986C2.41536 9.97634 2.65496 8.94645 3.20665 8.0786V8.07794Z"
					fill="white"
				/>
				<path
					d="M2.38804 7.50269C1.73054 8.5176 1.42421 9.72021 1.51604 10.926C1.11572 10.8653 0.721986 10.7671 0.340051 10.6327L0.263385 10.606C0.194983 10.5817 0.135087 10.5381 0.0909521 10.4805C0.0468176 10.4229 0.0203379 10.3537 0.0147204 10.2813L0.00805376 10.2007C-0.0188761 9.86598 0.0218909 9.52929 0.127922 9.2107C0.233953 8.89211 0.403076 8.59815 0.625198 8.34635C0.84732 8.09455 1.11789 7.89007 1.42076 7.74512C1.72363 7.60017 2.0526 7.51772 2.38804 7.50269ZM12.484 10.926C12.5758 9.72021 12.2695 8.5176 11.612 7.50269C11.9474 7.51772 12.2764 7.60017 12.5792 7.74512C12.8821 7.89007 13.1527 8.09455 13.3748 8.34635C13.5969 8.59815 13.766 8.89211 13.8721 9.2107C13.9781 9.52929 14.0189 9.86598 13.9919 10.2007L13.9853 10.2813C13.9795 10.3536 13.953 10.4226 13.9089 10.4801C13.8647 10.5376 13.8049 10.5811 13.7366 10.6053L13.6599 10.632C13.2819 10.7653 12.8893 10.8647 12.484 10.926Z"
					fill="white"
				/>
			</svg>
		),
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="23"
				viewBox="0 0 14 13"
				fill="none"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M4.49997 2.49998C4.49997 1.83694 4.76336 1.20106 5.2322 0.732227C5.70103 0.26339 6.33691 0 6.99995 0C7.66299 0 8.29887 0.26339 8.7677 0.732227C9.23654 1.20106 9.49993 1.83694 9.49993 2.49998C9.49993 3.16302 9.23654 3.7989 8.7677 4.26773C8.29887 4.73657 7.66299 4.99996 6.99995 4.99996C6.33691 4.99996 5.70103 4.73657 5.2322 4.26773C4.76336 3.7989 4.49997 3.16302 4.49997 2.49998ZM9.49993 4.49997C9.49993 3.96954 9.71064 3.46083 10.0857 3.08576C10.4608 2.71069 10.9695 2.49998 11.4999 2.49998C12.0303 2.49998 12.539 2.71069 12.9141 3.08576C13.2892 3.46083 13.4999 3.96954 13.4999 4.49997C13.4999 5.03039 13.2892 5.5391 12.9141 5.91417C12.539 6.28924 12.0303 6.49995 11.4999 6.49995C10.9695 6.49995 10.4608 6.28924 10.0857 5.91417C9.71064 5.5391 9.49993 5.03039 9.49993 4.49997ZM0.5 4.49997C0.5 3.96954 0.710712 3.46083 1.08578 3.08576C1.46085 2.71069 1.96956 2.49998 2.49998 2.49998C3.03041 2.49998 3.53912 2.71069 3.91419 3.08576C4.28926 3.46083 4.49997 3.96954 4.49997 4.49997C4.49997 5.03039 4.28926 5.5391 3.91419 5.91417C3.53912 6.28924 3.03041 6.49995 2.49998 6.49995C1.96956 6.49995 1.46085 6.28924 1.08578 5.91417C0.710712 5.5391 0.5 5.03039 0.5 4.49997ZM3.20665 8.07794C3.61328 7.44062 4.17402 6.91612 4.83705 6.55291C5.50007 6.18971 6.24396 5.99953 6.99995 5.99995C7.63316 5.99937 8.25935 6.13254 8.83753 6.39072C9.41571 6.64891 9.93285 7.0263 10.3551 7.49819C10.7773 7.97007 11.0951 8.52581 11.2877 9.12903C11.4803 9.73224 11.5433 10.3693 11.4726 10.9986C11.4639 11.0768 11.437 11.1518 11.3939 11.2176C11.3508 11.2834 11.2928 11.3381 11.2246 11.3772C9.93897 12.1149 8.48217 12.5021 6.99995 12.4999C5.51771 12.5022 4.06086 12.1151 2.77532 11.3772C2.70711 11.3381 2.6491 11.2834 2.60601 11.2176C2.56292 11.1518 2.53596 11.0768 2.52732 10.9986C2.41536 9.97634 2.65496 8.94645 3.20665 8.0786V8.07794Z"
					fill="#020E07"
				/>
				<path
					d="M2.38804 7.50269C1.73054 8.5176 1.42421 9.72021 1.51604 10.926C1.11572 10.8653 0.721986 10.7671 0.340051 10.6327L0.263385 10.606C0.194983 10.5817 0.135087 10.5381 0.0909521 10.4805C0.0468176 10.4229 0.0203379 10.3537 0.0147204 10.2813L0.00805376 10.2007C-0.0188761 9.86598 0.0218909 9.52929 0.127922 9.2107C0.233953 8.89211 0.403076 8.59815 0.625198 8.34635C0.84732 8.09455 1.11789 7.89007 1.42076 7.74512C1.72363 7.60017 2.0526 7.51772 2.38804 7.50269ZM12.484 10.926C12.5758 9.72021 12.2695 8.5176 11.612 7.50269C11.9474 7.51772 12.2764 7.60017 12.5792 7.74512C12.8821 7.89007 13.1527 8.09455 13.3748 8.34635C13.5969 8.59815 13.766 8.89211 13.8721 9.2107C13.9781 9.52929 14.0189 9.86598 13.9919 10.2007L13.9853 10.2813C13.9795 10.3536 13.953 10.4226 13.9089 10.4801C13.8647 10.5376 13.8049 10.5811 13.7366 10.6053L13.6599 10.632C13.2819 10.7653 12.8893 10.8647 12.484 10.926Z"
					fill="#020E07"
				/>
			</svg>
		),
	},
	{
		title: "Private Trips",
		link: ADMIN_PRIVATE_TRIPS_URL,
		activeIcon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 14 14"
				fill="none"
			>
				<path
					d="M1.16667 14C1.16667 14 0 14 0 12.8333C0 11.6667 1.16667 8.16667 7 8.16667C12.8333 8.16667 14 11.6667 14 12.8333C14 14 12.8333 14 12.8333 14H1.16667ZM7 7C7.92826 7 8.8185 6.63125 9.47487 5.97487C10.1313 5.3185 10.5 4.42826 10.5 3.5C10.5 2.57174 10.1313 1.6815 9.47487 1.02513C8.8185 0.368749 7.92826 0 7 0C6.07174 0 5.1815 0.368749 4.52513 1.02513C3.86875 1.6815 3.5 2.57174 3.5 3.5C3.5 4.42826 3.86875 5.3185 4.52513 5.97487C5.1815 6.63125 6.07174 7 7 7Z"
					fill="white"
				/>
			</svg>
		),
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 14 14"
				fill="none"
			>
				<path
					d="M1.16667 14C1.16667 14 0 14 0 12.8333C0 11.6667 1.16667 8.16667 7 8.16667C12.8333 8.16667 14 11.6667 14 12.8333C14 14 12.8333 14 12.8333 14H1.16667ZM7 7C7.92826 7 8.8185 6.63125 9.47487 5.97487C10.1313 5.3185 10.5 4.42826 10.5 3.5C10.5 2.57174 10.1313 1.6815 9.47487 1.02513C8.8185 0.368749 7.92826 0 7 0C6.07174 0 5.1815 0.368749 4.52513 1.02513C3.86875 1.6815 3.5 2.57174 3.5 3.5C3.5 4.42826 3.86875 5.3185 4.52513 5.97487C5.1815 6.63125 6.07174 7 7 7Z"
					fill="#020E07"
				/>
			</svg>
		),
	},
	{
		title: "Past Trips And Reviews",
		link: ADMIN_PAST_TRIPS_URL,
		activeIcon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 14 14"
				fill="none"
			>
				<path
					d="M0 14V1.4C0 1.015 0.1372 0.685301 0.4116 0.410901C0.686 0.136501 1.01547 -0.000465478 1.4 1.18846e-06H12.6C12.985 1.18846e-06 13.3147 0.137201 13.5891 0.411601C13.8635 0.686001 14.0005 1.01547 14 1.4V9.8C14 10.185 13.8628 10.5147 13.5884 10.7891C13.314 11.0635 12.9845 11.2005 12.6 11.2H2.8L0 14ZM4.9525 8.575L7 7.3325L9.0475 8.575L8.505 6.2475L10.325 4.6725L7.9275 4.48L7 2.275L6.0725 4.48L3.675 4.6725L5.495 6.2475L4.9525 8.575Z"
					fill="white"
				/>
			</svg>
		),
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 14 14"
				fill="none"
			>
				<path
					d="M0 14V1.4C0 1.015 0.1372 0.685301 0.4116 0.410901C0.686 0.136501 1.01547 -0.000465478 1.4 1.18846e-06H12.6C12.985 1.18846e-06 13.3147 0.137201 13.5891 0.411601C13.8635 0.686001 14.0005 1.01547 14 1.4V9.8C14 10.185 13.8628 10.5147 13.5884 10.7891C13.314 11.0635 12.9845 11.2005 12.6 11.2H2.8L0 14ZM4.9525 8.575L7 7.3325L9.0475 8.575L8.505 6.2475L10.325 4.6725L7.9275 4.48L7 2.275L6.0725 4.48L3.675 4.6725L5.495 6.2475L4.9525 8.575Z"
					fill="#020E07"
				/>
			</svg>
		),
	},
	{
		title: "Messages",
		link: ADMIN_PAST_TRIPS_URL,
		activeIcon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="14"
				height="10"
				viewBox="0 0 14 10"
				fill="none"
			>
				<path
					d="M12.3846 0H1.61538C0.7 0 0 0.7 0 1.61538V8.07692C0 8.99231 0.7 9.69231 1.61538 9.69231H12.3846C13.3 9.69231 14 8.99231 14 8.07692V1.61538C14 0.7 13.3 0 12.3846 0ZM12.8154 8.29231L8.61539 5.27692L7 6.35385L5.33077 5.27692L1.18462 8.29231L4.57692 4.79231L0.430769 1.56154L7 5.11539L13.5154 1.61538L9.42308 4.84615L12.8154 8.29231Z"
					fill="white"
				/>
			</svg>
		),
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="20"
				viewBox="0 0 14 10"
				fill="none"
			>
				<path
					d="M12.3846 0H1.61538C0.7 0 0 0.7 0 1.61538V8.07692C0 8.99231 0.7 9.69231 1.61538 9.69231H12.3846C13.3 9.69231 14 8.99231 14 8.07692V1.61538C14 0.7 13.3 0 12.3846 0ZM12.8154 8.29231L8.61539 5.27692L7 6.35385L5.33077 5.27692L1.18462 8.29231L4.57692 4.79231L0.430769 1.56154L7 5.11539L13.5154 1.61538L9.42308 4.84615L12.8154 8.29231Z"
					fill="#020E07"
				/>
			</svg>
		),
	},
];