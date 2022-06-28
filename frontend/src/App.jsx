import { BrowserRouter } from 'react-router-dom';
import RoutesComponent from './routes/routes.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <RoutesComponent />
    </BrowserRouter>
  );
};

export default App;
