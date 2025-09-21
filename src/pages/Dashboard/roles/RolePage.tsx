import { Page } from '@/components/Page';
import type { FunctionComponent } from 'react';
import { RoleTable } from './components/RoleTable';
import { CreateRoleModal } from './components/CreateRoleModal';

export const RolePage: FunctionComponent = () => {
  return (
    <Page>
      <div className="mb-4">
        <CreateRoleModal />
      </div>
      <RoleTable />
    </Page>
  );
};
