import { IpStackResponse } from "../interfaces/IpStack";
import { Card } from "./StyledLibrary";

export default function IpDisplay({ data }: { data: IpStackResponse }) {
    return (
        <Card>
            <h2 style={{ color: "#38BDF8", marginTop: 0 }}>📍 Results for {data.ip}</h2>
            <hr style={{ borderColor: "#334155", margin: "20px 0" }} />
            {/* Displaying the information in a clear and stylish format */}
            <div style={{ lineHeight: "2", fontSize: "1.1rem" }}>
                <p><strong>🌍 Continent :</strong> {data.continent_name}</p>
                <p><strong>🏳️ Country :</strong> {data.country_name}</p>
                <p><strong>🏙️ City :</strong> {data.city || "Unknown"}</p>
                <p><strong>📮 Postal Code :</strong> {data.zip || "N/A"}</p>
                <p><strong>📍 Coordinates :</strong> {data.latitude}, {data.longitude}</p>
            </div>
        </Card>
    );
}