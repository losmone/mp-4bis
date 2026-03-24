"use client";

import { MainContainer } from "../components/StyledLibrary";
import IpForm from "../components/IpForm";

export default function HomePage() {
    return (
        <MainContainer>
            <h1 style={{ marginBottom: "20px" }}>
                🔍 IP Address Tracker
            </h1>
            <p style={{ marginBottom: "30px", color: "#94A3B8", textAlign: "center" }}>
                Enter an IP address to get its precise location.
            </p>
            
            {/* The form manages its own logic and style */}
            <IpForm />
            
            <p style={{ marginTop: "40px", fontSize: "0.8rem", color: "#999" }}>
                Propulsed by the IPstack API - MP4 Project
            </p>
        </MainContainer>
    );
}