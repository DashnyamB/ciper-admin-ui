import RouterConfig from './RouterConfig';
import { AuthProvider } from './providers/AuthProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterConfig />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
