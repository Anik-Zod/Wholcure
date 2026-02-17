export async function getAllJobs() {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL;
        const response = await fetch(`${baseUrl}/jobs`, { cache: "no-store" });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return responseData.data || [];
    } catch (error) {
        console.error("Error fetching jobs:", error);
        return [];
    }
}


export async function applyForJob(jobId: string, formData: FormData) {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL;
        const response = await fetch(`${baseUrl}/applications/${jobId}`, {
            method: 'POST',
            body: formData,
        });

        const responseData = await response.json();

        if (!response.ok) {
            throw new Error(responseData.message || `HTTP error! status: ${response.status}`);
        }

        return responseData;
    } catch (error: any) {
        console.error("Error applying for job:", error);
        throw error;
    }
}