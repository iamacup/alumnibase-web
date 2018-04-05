import MainPage from '../../content/containers/Pages/Main';
import AboutPage from '../../content/containers/Pages/About';
import LegalPage from '../../content/containers/Pages/Legal';
import MeetMePage from '../../content/containers/Pages/MeetMe';
import DataPage from '../../content/containers/Pages/Data';
import BenefitsPage from '../../content/containers/Pages/Benefits';
import GDPRPage from '../components/GDPR/gdprPage';



export default [
  {
    path: '/',
    exact: true,
    component: MainPage,
  },
  {
    path: '/meet-me',
    exact: true,
    component: MeetMePage,
  },
  {
    path: '/about',
    exact: true,
    component: AboutPage,
  },
  {
    path: '/benefits',
    exact: true,
    component: BenefitsPage,
  },
  {
    path: '/data',
    exact: true,
    component: DataPage,
  },
  {
    path: '/legal',
    exact: true,
    component: LegalPage,
  },
  {
    path: '/GDPR',
    exact: true,
    component: GDPRPage,
  },
  /* {
    path: '*',
    component: NotFoundPage,
    loadData: defaultLoadFunction,
  }, */
];
