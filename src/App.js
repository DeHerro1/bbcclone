import './App.css';
import Layout from './components/Layout/Layout';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1 className="App_header">Product App</h1>
        <Layout />
      </div>
    </BrowserRouter>
  );
}

export default App;