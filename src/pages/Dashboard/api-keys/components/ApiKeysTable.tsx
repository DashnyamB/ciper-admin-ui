import { DataTable } from '@/components/DataTable';
import { columns } from './columns';
import { useAPIKey } from '@/hooks/useAPIKey';
import { useQuery } from '@tanstack/react-query';

export const ApiKeysTable = () => {
  const { getApiKeys } = useAPIKey();

  const { data } = useQuery({
    queryKey: ['api-keys'],
    queryFn: getApiKeys,
  });

  return <DataTable columns={columns} data={data || []} />;
};
