// src/app/lib/actions.ts
"use server" // Indique que ce code ne s'exécute JAMAIS sur le navigateur

export async function getIPData(ip: string) {
    const key = process.env.IPSTACK_API_KEY; // Accès sécurisé à la clé [cite: 31]
    const response = await fetch(`http://api.ipstack.com/${ip}?access_key=${key}`);
    
    if (!response.ok) {
        throw new Error("Erreur lors de la récupération"); // Gestion d'erreur requise [cite: 77]
    }
    
    return response.json();
}