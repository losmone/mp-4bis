"use client";

import { MainContainer } from "../components/StyledLibrary";
import IpForm from "../components/IpForm";

export default function HomePage() {
    return (
        <MainContainer>
            <h1 style={{ color: "#5d4037", marginBottom: "20px" }}>
                🔍 Traqueur d'Adresse IP
            </h1>
            <p style={{ marginBottom: "30px", color: "#666" }}>
                Entrez une adresse IP pour obtenir sa localisation précise.
            </p>
            
            {/* Le formulaire gère lui-même sa logique et son style */}
            <IpForm />
            
            <p style={{ marginTop: "40px", fontSize: "0.8rem", color: "#999" }}>
                Propulsé par l'API IPstack - Projet MP4
            </p>
        </MainContainer>
    );
}