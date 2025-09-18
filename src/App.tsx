import RouterConfig from "./RouterConfig";
import { AuthProvider } from "./providers/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <RouterConfig />
    </AuthProvider>
  );
}

export default App;
