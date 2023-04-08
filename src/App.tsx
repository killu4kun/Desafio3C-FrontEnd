import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/index.routes';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes />;
    </BrowserRouter>
  );
}

export default App;
