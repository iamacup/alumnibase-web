// import MainPage from '../../content/containers/Pages/Main';
// import AboutPage from '../../content/containers/Pages/About';
// import LegalPage from '../../content/containers/Pages/Legal';
import MeetMePage from '../../content/containers/Pages/MeetMe';
import DataPage from '../../content/containers/Pages/Data';
// import BenefitsPage from '../../content/containers/Pages/Benefits';
import GDPRPage from '../../content/containers/Pages/GDPR/gdprPage';

import NewTestPage from '../../content/containers/Pages/NewTest';
import NewBenefitsPage from '../../content/containers/Pages/NewBenefits';
import NewAboutPage from '../../content/containers/Pages/NewAbout';
import NewLegalPage from '../../content/containers/Pages/NewLegal';
import OverviewPage from '../../content/containers/Pages/Overview';
import NotFoundPage from '../../content/containers/Pages/NotFoundPage';

export default [
  /* {
    path: '/',
    exact: true,
    component: MainPage,
  }, */
  {
    path: '/',
    exact: true,
    component: NewTestPage,
  },
  {
    path: '/meet-me',
    exact: true,
    component: MeetMePage,
  },
  /* {
    path: '/about',
    exact: true,
    component: AboutPage,
  }, */
  {
    path: '/about',
    exact: true,
    component: NewAboutPage,
  },
  /* {
    path: '/benefits',
    exact: true,
    component: BenefitsPage,
  }, */
  {
    path: '/benefits',
    exact: true,
    component: NewBenefitsPage,
  },
  {
    path: '/insights',
    exact: true,
    component: DataPage,
  },
  /* {
    path: '/legal',
    exact: true,
    component: LegalPage,
  }, */
  {
    path: '/legal',
    exact: true,
    component: NewLegalPage,
  },
  {
    path: '/GDPR',
    exact: true,
    component: GDPRPage,
  },
  {
    path: '/overview',
    exact: true,
    component: OverviewPage,
  },
  {
    path: '/*',
    component: NotFoundPage,
  },
];
