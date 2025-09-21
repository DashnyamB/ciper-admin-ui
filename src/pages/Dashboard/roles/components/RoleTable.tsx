import { DataTable } from '@/components/DataTable';
import { columns } from './columns';
import { useRole } from '@/hooks/useRole';
import { useQuery } from '@tanstack/react-query';

export const RoleTable = () => {
  const { getRoles } = useRole();

  const { data } = useQuery({
    queryKey: ['roles'],
    queryFn: getRoles,
  });

  return <DataTable columns={columns} data={data || []} />;
};
