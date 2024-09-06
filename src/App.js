import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ChatPage from './pages/ChatPage';
import { ChatProtectedRoute } from './services/protectedRoutes/ProtectedRoutes';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ChatProtectedRoute />} >
          <Route element={<ChatPage />} path='/' />
        </Route>
          
      
        <Route path="/login" element={<LoginPage />} />
        <Route element={<PageNotFound />} path='*' />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
