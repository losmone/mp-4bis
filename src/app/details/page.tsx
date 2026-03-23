import Link from "next/link";
import { MainContainer, StyledButton } from "../../components/StyledLibrary";
import IpDisplay from "../../components/IpDisplay";
import { IpStackResponse } from "../../interfaces/IpStack";

// Fonction serveur pour l'appel API
async function getIpInfo(ip: string): Promise<IpStackResponse> {
    const apiKey = process.env.IPSTACK_API_KEY;
    
    // Note: Utilisation de fetch côté serveur (Server-side data fetching)
    const res = await fetch(`http://api.ipstack.com/${ip}?access_key=${apiKey}`, {
        next: { revalidate: 3600 } // Optionnel: cache les résultats pendant 1h
    });
    
    if (!res.ok) {
        throw new Error("Erreur réseau");
    }
    return res.json();
}

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function DetailsPage(props: { searchParams: SearchParams }) {
    
    // 2. On attend (await) la résolution de la promesse avant d'accéder à .ip
    const searchParams = await props.searchParams;
    const ipToSearch = (searchParams.ip as string) || "check"; 

    try {
        const data = await getIpInfo(ipToSearch);

        // Gestion des erreurs renvoyées par l'API (ex: clé invalide ou quota atteint)
        if (data.error) {
            return (
                <MainContainer>
                    <h2 style={{ color: "red" }}>Erreur API</h2>
                    <p>{data.error.info}</p>
                    <Link href="/" style={{ marginTop: "20px" }}>
                        <StyledButton>Retourner à l'accueil</StyledButton>
                    </Link>
                </MainContainer>
            );
        }

        return (
            <MainContainer>
                {/* On passe les données au composant d'affichage dédié */}
                <IpDisplay data={data} />

                <Link href="/" style={{ marginTop: "30px" }}>
                    <StyledButton>Nouvelle recherche</StyledButton>
                </Link>
            </MainContainer>
        );

    } catch (error) {
        return (
            <MainContainer>
                <h2 style={{ color: "red" }}>Erreur de connexion</h2>
                <p>Impossible de joindre le service de localisation.</p>
                <Link href="/" style={{ marginTop: "20px" }}>
                    <StyledButton>Réessayer</StyledButton>
                </Link>
            </MainContainer>
        );
    }
}