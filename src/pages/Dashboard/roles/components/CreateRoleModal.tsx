import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRole } from '@/hooks/useRole';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { PlusIcon } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface CreateRoleFormType {
  name: string;
  identifier: string;
  description?: string;
}

export const CreateRoleModal = () => {
  const [open, setOpen] = useState(false);
  const { createRole } = useRole();
  const { register, handleSubmit } = useForm<CreateRoleFormType>();
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationKey: ['create-role'],
    mutationFn: createRole,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['roles'] });
    },
  });

  const onSubmit = async (data: CreateRoleFormType) => {
    await mutate(data);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button>
          <PlusIcon />
          Create Role
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>Create Role</DialogHeader>
        <div className="grid gap-4">
          <div className="grid gap-3">
            <Label>Identifier</Label>
            <Input {...register('identifier', { required: true })} />
          </div>
          <div className="grid gap-3">
            <Label>Name</Label>
            <Input {...register('name', { required: true })} name="name" />
          </div>
          <div className="grid gap-3">
            <Label>Description</Label>
            <Input {...register('description')} name="description" />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSubmit(onSubmit)}>Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
