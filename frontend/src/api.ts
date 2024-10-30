const API_URL = "https://app.affordabletesturls.online";

export const fetchData = async () => {
  console.log("API_URL:", API_URL);

  try {
    const response = await fetch(`${API_URL}/api/data`);
    if (!response.ok) throw new Error("Network response was not ok");
    return await response.json();
  } catch (error) {
    console.error("Fetch data error:", error);
    return null;
  }
};
