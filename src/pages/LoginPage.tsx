import type { FunctionComponent } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../providers/AuthProvider';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface LoginFormType {
  email: string;
  password: string;
}

const LoginPage: FunctionComponent = () => {
  const { signin } = useAuth();
  const {
    register,
    formState: { isValid },
    handleSubmit,
    setError,
  } = useForm<LoginFormType>({
    reValidateMode: 'onChange',
  });

  const handleLogin = async (data: LoginFormType) => {
    try {
      console.log(data);
      await signin(data.email, data.password);
    } catch (error) {
      setError('root', {
        type: 'manual',
        message: 'Invalid email or password',
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Sign in to your account</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2">
            <Input
              {...register('email', { required: true })}
              type="text"
              placeholder="Email"
            />
            <Input
              {...register('password', { required: true })}
              type="password"
              placeholder="Password"
            />
          </div>
        </CardContent>
        {/* <span className="text-2xl font-bold mb-4 block">Ciper Admin</span> */}

        <CardFooter>
          <Button disabled={!isValid} onClick={handleSubmit(handleLogin)}>
            Login
          </Button>
        </CardFooter>
      </Card>
      {/* Add your login form here */}
    </div>
  );
};

export default LoginPage;
