import { AppSidebar } from '@/components/AppSidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import { Route, Routes } from 'react-router-dom';
import { RolePage } from './roles';

export const Dashboard = () => {
  return (
    <SidebarProvider className="flex min-h-screen">
      <div className="flex w-full">
        <AppSidebar />
        <main className="flex-1 p-4">
          <Routes>
            <Route path="roles/*" element={<RolePage />} />
            <Route path="permissions/*" element />
          </Routes>
        </main>
      </div>
    </SidebarProvider>
  );
};
