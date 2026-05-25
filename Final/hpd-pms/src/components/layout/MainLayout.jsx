import { useApp } from '../../context/AppContext';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import DashboardPage from '../../pages/DashboardPage';
import PatientsPage from '../../pages/PatientsPage';
import AppointmentsPage from '../../pages/AppointmentsPage';
import QueuePage from '../../pages/QueuePage';
import RegistrationPage from '../../pages/RegistrationPage';
import BillingPage from '../../pages/BillingPage';
import ReportsPage from '../../pages/ReportsPage';
import UxAuditPage from '../../pages/UxAuditPage';
import AppModals from '../modals/AppModals';

const PAGES = {
  dashboard: DashboardPage,
  patients: PatientsPage,
  appointments: AppointmentsPage,
  queue: QueuePage,
  registration: RegistrationPage,
  billing: BillingPage,
  reports: ReportsPage,
  'ux-audit': UxAuditPage,
};

export default function MainLayout() {
  const { currentPage } = useApp();
  const Page = PAGES[currentPage] || DashboardPage;

  return (
    <>
      <Topbar />
      <div className="main" id="main-app">
        <Sidebar />
        <div className="content" id="content">
          <div className={`page active`} id={`page-${currentPage}`}>
            <Page />
          </div>
        </div>
      </div>
      <AppModals />
    </>
  );
}
