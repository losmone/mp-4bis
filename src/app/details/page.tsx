import Link from "next/link";
import { MainContainer, StyledButton } from "../../components/StyledLibrary";
import IpDisplay from "../../components/IpDisplay";
import { IpStackResponse } from "../../interfaces/IpStack";

// Server function for the API call
async function getIpInfo(ip: string): Promise<IpStackResponse> {
    const apiKey = process.env.IPSTACK_API_KEY;
    
    // Note for later: remember to use fetch on the server side (Server-side data fetching)
    const res = await fetch(`http://api.ipstack.com/${ip}?access_key=${apiKey}`, {
        next: { revalidate: 3600 } //  revalidate the data every hour to avoid hitting API limits too often 
    });
    
    if (!res.ok) {
        throw new Error("Network Error");
    }
    return res.json();
}

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function DetailsPage(props: { searchParams: SearchParams }) {
    
    // Waiting for the search parameters to be available
    const searchParams = await props.searchParams;
    const ipToSearch = (searchParams.ip as string) || "check"; 

    try {
        const data = await getIpInfo(ipToSearch);

        // Managing API errors
        if (data.error) {
            return (
                <MainContainer>
                    <h2 style={{ color: "#EF4444" }}>API Error</h2>
                    <p>{data.error.info}</p>
                    <Link href="/" style={{ marginTop: "20px" }}>
                        <StyledButton>Return to homepage</StyledButton>
                    </Link>
                </MainContainer>
            );
        }

        return (
            <MainContainer>
                {/* Passing the data to the dedicated display component */}
                <IpDisplay data={data} />

                <Link href="/" style={{ marginTop: "30px" }}>
                    <StyledButton>New Search</StyledButton>
                </Link>
            </MainContainer>
        );

    } catch (error) {
        return (
            <MainContainer>
                <h2 style={{ color: "#EF4444" }}>Network Error</h2>
                <p>Unable to connect to the location service.</p>
                <Link href="/" style={{ marginTop: "20px" }}>
                    <StyledButton>Try Again</StyledButton>
                </Link>
            </MainContainer>
        );
    }
}