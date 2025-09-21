import { Page } from '@/components/Page';
import { ApiKeysTable } from './components/ApiKeysTable';
import { Button } from '@/components/ui/button';
import { useAPIKey } from '@/hooks/useAPIKey';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const APIKeysPage = () => {
  const { createAPIKey } = useAPIKey();
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationKey: ['create-api-key'],
    mutationFn: createAPIKey,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['api-keys'] });
    },
  });

  const handleCreateAPIKey = () => {
    mutate();
  };

  return (
    <Page>
      <div className="mb-4">
        <Button onClick={handleCreateAPIKey}>Create new key</Button>
      </div>
      <ApiKeysTable />
    </Page>
  );
};
