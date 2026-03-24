// src/app/lib/actions.ts
"use server" 

export async function getIPData(ip: string) {
    const key = process.env.IPSTACK_API_KEY; // Accessing the API key securely
    const response = await fetch(`http://api.ipstack.com/${ip}?access_key=${key}`);
    
    if (!response.ok) {
        throw new Error("Error during data retrieval"); // Management of potential errors during the fetch operation
    }
    
    return response.json();
}