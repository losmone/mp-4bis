"use client";
import styled from "styled-components";

export const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px 20px;
    flex: 1; /* Permet au container de prendre l'espace restant entre la navbar et le footer */
`;

export const Card = styled.div`
    background-color: #1E293B; /* Bleu ardoise */
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    border: 1px solid #334155;
    border-top: 4px solid #38BDF8; /* Accent bleu fluo en haut */
    width: 100%;
    max-width: 450px;
    color: #F8FAFC;
`;

export const StyledButton = styled.button`
    padding: 14px 24px;
    background-color: #0284C7; /* Bleu tech */
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    box-shadow: 0 4px 12px rgba(2, 132, 199, 0.3);

    &:hover {
        background-color: #38BDF8;
        box-shadow: 0 6px 16px rgba(56, 189, 248, 0.4);
        transform: translateY(-2px);
    }
`;

export const StyledInput = styled.input`
    padding: 14px;
    background-color: #0F172A;
    color: #F8FAFC;
    border: 1px solid #334155;
    border-radius: 8px;
    font-size: 1rem;
    margin-bottom: 15px;
    transition: border-color 0.3s;

    &:focus {
        border-color: #38BDF8;
        outline: none;
        box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.2);
    }

    &::placeholder {
        color: #64748B;
    }
`;