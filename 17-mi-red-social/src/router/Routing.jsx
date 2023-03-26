import { Routes, Route, BrowserRouter, Navigate, Link } from 'react-router-dom';
import { PrivateLayout } from '../components/layout/private/PrivateLayout';
import { PublicLayout } from '../components/layout/public/PublicLayout';
import { Feed } from '../components/publication/Feed';
import { Login } from '../components/user/Login';
import { Register } from '../components/user/Register';
import { AuthProvider } from '../context/AuthProvider';

export const Routing = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path='/' element={<PublicLayout />} >
                        {/* Index indica la ruta por defecto */}
                        <Route index element={<Login />} />
                        <Route path='login' element={<Login />} />
                        <Route path='registro' element={<Register />} />
                    </Route>

                    <Route path='/social' element={<PrivateLayout />}>
                        <Route index element={<Feed />} />
                        <Route path='feed' element={<Feed />} />
                    </Route>

                    <Route path="*" element={
                        <>
                            <div>
                                <h1>Error 404</h1>
                                <Link to="/">Volver al inicio</Link>
                            </div>
                        </>
                    } />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}
