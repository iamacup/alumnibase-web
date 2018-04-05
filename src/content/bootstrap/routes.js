
import MainPage from '../../content/containers/Pages/Main/page1';
import page2 from '../../content/containers/Pages/Main/page2';
import AboutPage from '../components/about';
import LegalPage from '../components/legal';
import DataPage from '../components/Main/dataInsights';
import BenefitsPage from '../components/Benefits/benefits';


export default [
  {
    path: '/2',
    exact: true,
    component: MainPage,
  },
  {
    path: '/',
    exact: true,
    component: page2,
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
  /* {
    path: '*',
    component: NotFoundPage,
    loadData: defaultLoadFunction,
  }, */
];
