import { ABOUT_US_URL, CONTACT_US_URL, PRIVATE_TRIPS_URL, REVIEWS_URL, TRIPS_URL } from 'routes/frontend';

export const navbarData = [
  {
    id: 1,
    name: 'Group Trips',
    path: TRIPS_URL,
    sub: TRIPS_URL,
  },
  {
    id: 2,
    name: 'Private Trips',
    path: PRIVATE_TRIPS_URL,
  },
  {
    id: 3,
    name: 'Past Trips and Reviews',
    path: REVIEWS_URL,
  },
  {
    name: 'About Us',
    path: ABOUT_US_URL,
    // currentPath
  },
  {
    name: 'Contact Us',
    path: CONTACT_US_URL,
    // currentPath
  },
];
