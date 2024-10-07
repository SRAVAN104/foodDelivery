import { createContext, useEffect, useState } from "react";
import { food_list,menu_list } from "../assets/assets.js"; // Keep only the needed imports
import axios from "axios";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const url = import.meta.env.VITE_BACKEND_URL;
    console.log(url);
    // const loadConfig = () => {
    //     if (window._env_ && window._env_.VITE_BACKEND_URL) {
    //         setUrl(window._env_.VITE_BACKEND_URL);
    //         // console.log("API URL loaded from config.js:", window._env_.VITE_BACKEND_URL);
    //     } else {
    //         console.error("Error loading config.js");
    //         setUrl("http://localhost:4000"); // Fallback if config fails
    //     }
    // };

    const [food_list, setFoodList] = useState([]);  // Rename to avoid conflict
    const [cartItems, setCartItems] = useState({});
    const [token, setToken] = useState("");

    const addToCart = async (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1,
        }));

        if (token) {
            await axios.post(`${url}/api/cart/add`, { itemId }, { headers: { token } });
        }
    };

    const removeFromCart = async (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: Math.max((prev[itemId] || 0) - 1, 0), // Ensure no negative values
        }));

        if (token) {
            await axios.post(`${url}/api/cart/remove`, { itemId }, { headers: { token } });
        }
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = foodItems.find((product) => product._id === item);
                if (itemInfo) {
                    totalAmount += itemInfo.price * cartItems[item];
                }
            }
        }
        return totalAmount;
    };

    // const fetchFoodList = async () => {
    //     const response = await axios.get(`${url}/api/food/list`);
    //     setFoodItems(response.data.data);
    // };
    const fetchFoodList = async () => {
        try {
            // console.log("Making request to:", `${url}/api/food/list`); 
            const response = await axios.get(`${url}/api/food/list`);
            // console.log("Food List Response:", response.data); 
            setFoodList(response.data.data); 
        } catch (error) {
            console.error("Error fetching food list:", error);
        }
    };
    

    const loadCartData = async (token) => {
        const response = await axios.post(`${url}/api/cart/get`, {}, { headers: { token } });
        setCartItems(response.data.cartData);
    };

    useEffect(() => {
        async function loadData() {
            await fetchFoodList();  // Fetch the food list first
            const savedToken = localStorage.getItem("token");
            if (savedToken) {
                setToken(savedToken); // Set the token
                await loadCartData(savedToken); // Load cart data using token
            }
        }
        loadData();
    }, []);

    const contextValue = {
        url,
        food_list,
        menu_list,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        token,
        setToken,
        loadCartData,
        setCartItems,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
