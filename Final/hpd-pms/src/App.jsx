import { AppProvider, useApp } from './context/AppContext';
import LoginScreen from './components/login/LoginScreen';
import MainLayout from './components/layout/MainLayout';
import Toast from './components/common/Toast';

function AppShell() {
  const { session } = useApp();
  if (!session) return <LoginScreen />;
  return (
    <>
      <MainLayout />
      <Toast />
    </>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppShell />
    </AppProvider>
  );
}
