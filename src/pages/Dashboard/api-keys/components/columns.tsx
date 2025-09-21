import type { APIKey } from '@/hooks/useAPIKey';
import type { ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<APIKey>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'key',
    header: 'Key',
  },
  {
    accessorKey: 'createdAt',
    header: 'Created At',
  },
];
