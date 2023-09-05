import { FAQ_URL, HOME_URL, SETTINGS_URL } from 'routes/frontend';
import settingsIcon from 'assets/images/svgs/settingsIcon.svg';
import faqIcon from 'assets/images/svgs/faqIcon.svg';
import homeIcon from 'assets/images/svgs/home.svg';
// import contestRules from 'assets/images/svgs/contest-rules.svg';
// import tnc from 'assets/images/svgs/tncIcon.svg';

export const sideMenuData = [
  {
    id: 1,
    name: 'Home',
    path: HOME_URL,
    icon: homeIcon,
    hasExternalLink: false,
    hide: false,
  },
  {
    id: 2,
    name: 'Settings',
    path: SETTINGS_URL,
    icon: settingsIcon,
    hasExternalLink: false,
    hide: false,
  },
  {
    id: 3,
    name: 'FAQs',
    path: FAQ_URL,
    icon: faqIcon,
    hasExternalLink: true,
    hide: false,
  },
  // {
  //   id: 4,
  //   name: 'Contest Rules',
  //   path: TNC_URL,
  //   icon: contestRules,
  //   hide: true,
  // },
  // {
  //   id: 5,
  //   name: 'Terms & Conditions',
  //   path: TNC_URL,
  //   icon: tnc,
  //   hide: true,
  // },
];
