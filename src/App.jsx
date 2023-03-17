
import Login from './pages/Manager/Login';
import Dashboard from './pages/Manager/Dashboard';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { isLoggedIn } from './utils/functions';
import { ReactQueryDevtools } from "react-query/devtools"


function App() {
    const queryClient = new QueryClient()
    return (
        <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/manager/login" element={isLoggedIn() ? <Login /> : <Login />} />
                        <Route path="/manager/dashboard" element={<Dashboard />} />
                    </Routes>
                </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
