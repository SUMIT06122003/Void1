import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { ProductProvider } from './context/ProductContext';
import { OrderProvider } from './context/OrderContext';
import { useAuth } from './hooks/useAuth';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';

import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import Overview from './dashboard/Overview';
import MyOrders from './dashboard/MyOrders';
import Wishlist from './dashboard/Wishlist';
import Settings from './dashboard/Settings';
import Addresses from './dashboard/Addresses';

function RequireAuth({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" replace />;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AuthProvider>
      <ProductProvider>
        <CartProvider>
          <OrderProvider>
            <BrowserRouter>
              <AnimatePresence>
                {isLoading && <Loader />}
              </AnimatePresence>
              <div className="app-shell">
                <Navbar />
                <main className="page-wrapper">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/product/:id" element={<ProductDetails />} />
                    <Route
                      path="/cart"
                      element={
                        <RequireAuth>
                          <Cart />
                        </RequireAuth>
                      }
                    />
                    <Route
                      path="/checkout"
                      element={
                        <RequireAuth>
                          <Checkout />
                        </RequireAuth>
                      }
                    />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route
                      path="/dashboard"
                      element={
                        <RequireAuth>
                          <Dashboard />
                        </RequireAuth>
                      }
                    >
                      <Route index element={<Overview />} />
                      <Route path="orders" element={<MyOrders />} />
                      <Route path="wishlist" element={<Wishlist />} />
                      <Route path="settings" element={<Settings />} />
                      <Route path="addresses" element={<Addresses />} />
                    </Route>
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
                <Footer />
              </div>
            </BrowserRouter>
            <ToastContainer position="top-right" autoClose={2500} hideProgressBar theme="dark" />
          </OrderProvider>
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;
