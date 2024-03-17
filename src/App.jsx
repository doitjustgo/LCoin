import AllCoins from './routes/AllCoins';
import './App.css';
import { Container } from '@mui/material';
import Logo from './components/Logo';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <Logo />
        <AllCoins />
      </Container>
    </QueryClientProvider>
  );
}

export default App;
