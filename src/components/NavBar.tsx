"use client";
import Link from "next/link";
import styled from "styled-components";

const NavContainer = styled.nav`
    background-color: #0B1121; /* Bleu très sombre */
    padding: 15px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #1E293B;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
`;

const Logo = styled.div`
    font-size: 1.5rem;
    font-weight: 800;
    color: #38BDF8; /* Bleu clair tech */
    letter-spacing: 1px;
`;

const NavLinks = styled.div`
    display: flex;
    gap: 20px;
`;

const StyledLink = styled(Link)`
    color: #94A3B8;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;

    &:hover {
        color: #38BDF8;
    }
`;

export default function NavBar() {
    return (
        <NavContainer>
            <Logo>IP-TRACKER</Logo>
            <NavLinks>
                <StyledLink href="/">Search</StyledLink>
                <StyledLink href="/historique">History</StyledLink>
            </NavLinks>
        </NavContainer>
    );
}