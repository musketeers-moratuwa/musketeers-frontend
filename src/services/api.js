const API_BASE_URL = 'http://localhost:8080/api';

// Auth API calls
export const loginUser = async (username, password) => {
    try {
        const response = await fetch(`${API_BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });
        if (!response.ok) throw new Error('Login failed');
        return await response.json();
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
};

// Products API calls
export const fetchProducts = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/products`);
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

export const fetchProductsByCategory = async (category) => {
    try {
        const response = await fetch(`${API_BASE_URL}/products/category/${category}`);
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error('Error fetching products by category:', error);
        throw error;
    }
};

export const fetchProductById = async (id) => {
    try {
        const response = await fetch(`${API_BASE_URL}/products/${id}`);
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error('Error fetching product details:', error);
        throw error;
    }
};

// Cart API calls
export const fetchCart = async (token) => {
    try {
        const response = await fetch(`${API_BASE_URL}/cart`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        if (!response.ok) throw new Error('Failed to fetch cart');
        return await response.json();
    } catch (error) {
        console.error('Error fetching cart:', error);
        throw error;
    }
};

export const updateCart = async (cartItems, token) => {
    try {
        const response = await fetch(`${API_BASE_URL}/cart`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(cartItems),
        });
        if (!response.ok) throw new Error('Failed to update cart');
        return await response.json();
    } catch (error) {
        console.error('Error updating cart:', error);
        throw error;
    }
};
