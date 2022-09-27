import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/screen/Login';
import Layout from './components/Layout';


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/Login" element={<Login />} />
        {/* <Route path="/products" element={<Products />} /> */}
      </Routes>
    </Layout>
  );
}

export default App;
