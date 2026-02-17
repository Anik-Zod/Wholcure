export async function getAllBusiness() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    const response = await fetch(`${baseUrl}/businesses`, { cache: "no-store" });
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



export async function getBusinessById(id:string) { 
    try {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL;
        
        const response=await fetch(`${baseUrl}/businesses/${id}`, { cache: "no-store" })
    
        if (!response.ok) {
           console.log(`Status: ${response.status}`);
        }
        const responseData = await response.json();
   return responseData.data; 
    } catch (error) {
        console.error("Fetch Error:", error);
        return null;
    }
}