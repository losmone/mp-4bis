"use client";
import styled from "styled-components";

export const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 20px;
    background-color: #fdf5e6;
`;

export const Card = styled.div`
    background-color: white;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    border-left: 10px solid #5d4037;
    width: 100%;
    max-width: 450px;
`;

export const StyledButton = styled.button`
    padding: 12px 20px;
    background-color: #5d4037;
    color: white;
    border: none;
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s;
    &:hover {
        background-color: #8d6e63;
    }
`;

export const StyledInput = styled.input`
    padding: 12px;
    border: 2px solid #e0e0e0;
    border-radius: 6px;
    font-size: 1rem;
    margin-bottom: 10px;
    &:focus {
        border-color: #5d4037;
        outline: none;
    }
`;