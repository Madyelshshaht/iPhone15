import {
    blackImg,
    blueImg,
    highlightFirstVideo,
    highlightFourthVideo,
    highlightSecondVideo,
    highlightThirdVideo,
    whiteImg,
    yellowImg,
} from "../utils";

// export const navLists = ["Store", "Mac", "IPhone", "Support"];
export const navLists = [
    "nav.store",
    "nav.mac",
    "nav.iphone",
    "nav.support"
];

export const hightlightsSlides = [
    {
        id: 1,
        // textLists: [
        //     "Enter A17 Pro.",
        //     "Game‑changing chip.",
        //     "Groundbreaking performance.",
        // ],
        textLists: [
            "highlights.1.line1",
            "highlights.1.line2",
            "highlights.1.line3",
        ],
        video: highlightFirstVideo,
        videoDuration: 4,
    },
    {
        id: 2,
        // textLists: ["Titanium.", "So strong. So light. So Pro."],
        textLists: [
            "highlights.2.line1",
            "highlights.2.line2",
        ],
        video: highlightSecondVideo,
        videoDuration: 5,
    },
    {
        id: 3,
        // textLists: [
        //     "iPhone 15 Pro Max has the",
        //     "longest optical zoom in",
        //     "iPhone ever. Far out.",
        // ],
        textLists: [
            "highlights.3.line1",
            "highlights.3.line2",
            "highlights.3.line3",
        ],
        video: highlightThirdVideo,
        videoDuration: 2,
    },
    {
        id: 4,
        // textLists: ["All-new Action button.", "What will yours do?."],
        textLists: [
            "highlights.4.line1",
            "highlights.4.line2",
        ],
        video: highlightFourthVideo,
        videoDuration: 3.63,
    },
];

export const models = [
    {
        id: 1,
        title: "iPhone 15 Pro in Natural Titanium",
        color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
        img: yellowImg,
    },
    {
        id: 2,
        title: "iPhone 15 Pro in Blue Titanium",
        color: ["#53596E", "#6395ff", "#21242e"],
        img: blueImg,
    },
    {
        id: 3,
        title: "iPhone 15 Pro in White Titanium",
        color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
        img: whiteImg,
    },
    {
        id: 4,
        title: "iPhone 15 Pro in Black Titanium",
        color: ["#454749", "#3b3b3b", "#181819"],
        img: blackImg,
    },
];

export const sizes = [
    { label: '6.1"', value: "small" },
    { label: '6.7"', value: "large" },
];

// export const footerLinks = [
// "Privacy Policy",
// "Terms of Use",
// "Sales Policy",
// "Legal",
// "Site Map",
// ];

export const footerLinks = [
    "footer.privacy",
    "footer.terms",
    "footer.sales",
    "footer.legal",
    "footer.sitemap",
];