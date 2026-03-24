"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { StyledButton, StyledInput } from "./StyledLibrary";
import styled from "styled-components";

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 350px;
`;

export default function IpForm() {
    const [ip, setIp] = useState("");
    const router = useRouter();
    /*It says that FormEvent is deprecated but it's still functional and i haven't found a better alternative yet */
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (ip.trim()) {
            router.push(`/details?ip=${ip.trim()}`);
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <StyledInput 
                type="text" 
                placeholder="Enter an IP (e.g., 8.8.8.8)"
                value={ip}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setIp(e.target.value)}
                required
            />
            <StyledButton type="submit">Locate the IP</StyledButton>
        </Form>
    );
}