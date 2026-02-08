export async function getAllBusiness() {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL;
        const response = await fetch(`${baseUrl}/businesses`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return responseData.data || [];
    } catch (error) {
        console.error("Error fetching businesses:", error);
        return [];
    }
}