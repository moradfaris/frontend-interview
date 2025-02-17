
export const useReportBlocks = () => {
    return  [
        {
            type: "text",
            variant: "h1",
            fontSize: 28,
            content: "Welcome to Chaos Labs",
        },
        {
            type: "text",
            variant: "p",
            fontSize: 16,
            content: "Chaos Labs is a cutting-edge company specializing in financial infrastructure and risk management for decentralized finance (DeFi).",
        },
        {
            type: "image",
            src_url: "https://chaoslabs.xyz/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fzmh9mnff%2Fproduction%2Fca242c225d703fec0f27172f4d0d10fc9452c7b7-474x272.png&w=1920&q=100", // Replace with actual company logo or image
            width: 600,
            height: 300,
        },
        {
            type: "text",
            variant: "h2",
            fontSize: 24,
            content: "Our Mission",
        },
        {
            type: "text",
            variant: "p",
            fontSize: 16,
            content: "Our mission is to provide secure, scalable, and efficient risk management solutions for DeFi protocols, helping them optimize capital efficiency while maintaining security.",
        },
        {
            type: "text",
            variant: "h2",
            fontSize: 24,
            content: "What We Do",
        },
        {
            type: "text",
            variant: "p",
            fontSize: 16,
            content: "We build automated security and risk monitoring tools for DeFi applications, leveraging AI and on-chain analytics to prevent exploits and ensure financial stability.",
        },
        {
            type: "image",
            src_url: "https://via.placeholder.com/500x250", // Replace with an illustrative image
            width: 500,
            height: 250,
        },
        {
            type: "text",
            variant: "h2",
            fontSize: 24,
            content: "Our Culture",
        },
        {
            type: "text",
            variant: "p",
            fontSize: 16,
            content: "At Chaos Labs, we value innovation, transparency, and collaboration. Our team is composed of passionate engineers, researchers, and financial experts who work together to push the boundaries of DeFi security.",
        },
        {
            type: "text",
            variant: "h2",
            fontSize: 24,
            content: "Join Us!",
        },
        {
            type: "link",
            target: "https://chaoslabs.xyz/careers",
            content: "Explore Careers at Chaos Labs",
        },
    ];

}