
import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = localStorage.getItem('skillforge_cart');
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('skillforge_cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (course) => {
        setCart((prev) => {
            if (prev.find((item) => item.id === course.id)) return prev;
            return [...prev, course];
        });
    };

    const removeFromCart = (courseId) => {
        setCart((prev) => prev.filter((item) => item.id !== courseId));
    };

    const clearCart = () => setCart([]);

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, total }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
