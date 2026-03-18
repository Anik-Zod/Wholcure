export interface ContactFormData {
    fullName: string;
    email: string;
    subject: string;
    business: string;
    message: string;
}

export async function contactFormSubmit(data: ContactFormData) {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL;
        const response = await fetch(`${baseUrl}/admin/contactFormSend`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            }
        );

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.error || `HTTP error! status: ${response.status}`);
        }

        return result;
    } catch (error: any) {
        console.error("Error submitting contact form:", error);
        throw error;
    }
}
