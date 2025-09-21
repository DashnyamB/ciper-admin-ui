import type { Role } from '@/hooks/useRole';
import type { ColumnDef } from '@tanstack/react-table';
import { TableRowActions } from './TableRowActions';

export const columns: ColumnDef<Role>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'identifier',
    header: 'Identifier',
  },
  {
    accessorKey: 'description',
    header: 'Description',
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => <TableRowActions id={row.original.id} />,
  },
];
