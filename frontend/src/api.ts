const API_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

export const fetchData = async () => {
  try {
    const response = await fetch(`${API_URL}/api/data`);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error('Fetch data error:', error);
    return null;
  }
};

