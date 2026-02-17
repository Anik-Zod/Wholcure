export async function getALlMembers() {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL;
        const response = await fetch(`${baseUrl}/members`, { cache: "no-store" });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return responseData || [];
    } catch (error) {
        console.error("Error fetching Members:", error);
        return [];
    }
}