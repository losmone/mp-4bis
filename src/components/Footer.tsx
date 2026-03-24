"use client";
import styled from "styled-components";

const FooterContainer = styled.footer`
    background-color: #0B1121;
    color: #64748B;
    text-align: center;
    padding: 20px;
    font-size: 0.9rem;
    border-top: 1px solid #1E293B;
    margin-top: auto; /* Pousse le footer tout en bas */
`;

export default function Footer() {
    return (
        <FooterContainer>
            <p>© {new Date().getFullYear()} IP-Tracker - Project MP4. Propulsed by IPstack.</p>
        </FooterContainer>
    );
}