import { IpStackResponse } from "../interfaces/IpStack";
import { Card } from "./StyledLibrary";

export default function IpDisplay({ data }: { data: IpStackResponse }) {
    return (
        <Card>
            <h2 style={{ color: "#5d4037", marginTop: 0 }}>📍 Résultats pour {data.ip}</h2>
            <hr />
            <div style={{ lineHeight: "2", fontSize: "1.1rem" }}>
                <p><strong>Continent :</strong> {data.continent_name}</p>
                <p><strong>Pays :</strong> {data.country_name}</p>
                <p><strong>Ville :</strong> {data.city || "Inconnue"}</p>
                <p><strong>Code Postal :</strong> {data.zip || "N/A"}</p>
                <p><strong>Coordonnées :</strong> {data.latitude}, {data.longitude}</p>
            </div>
        </Card>
    );
}