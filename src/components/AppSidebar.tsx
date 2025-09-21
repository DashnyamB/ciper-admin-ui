import type { FunctionComponent } from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from './ui/sidebar';
import { useAuth } from '@/providers/AuthProvider';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

export const AppSidebar: FunctionComponent = () => {
  const { user, logout } = useAuth();
  return (
    <Sidebar className="w-64 relative">
      <SidebarHeader>Admin Panel</SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Management</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link to="/admin/dashboard/roles">Roles</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link to="/admin/dashboard/permissions">Permission</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link to="/admin/dashboard/api-keys">API Keys</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="p-4 border-t">
          {user ? (
            <div>
              <p className="font-medium">Logged in as:</p>
              <p className="text-sm">{user.email}</p>
            </div>
          ) : (
            <p className="text-sm">Not logged in</p>
          )}
        </div>
        <Button onClick={() => logout()}>Logout</Button>
      </SidebarFooter>
    </Sidebar>
  );
};
