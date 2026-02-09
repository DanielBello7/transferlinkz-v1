import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "TransferLinkz | Reducing Arrival Risk & Operational Escalations",
	description:
		"Arrival Risk Management software. Guests get a single arrival link with driver details and live status. TransferLinkz is not a messaging tool — it is arrival insurance.",
	icons: {
		icon: "/transferlinkz-logo.png",
		apple: "/transferlinkz-logo.png",
	},
	openGraph: {
		title: "TransferLinkz | Reducing Arrival Risk & Operational Escalations",
		description:
			"Arrival Risk Management software. Guests get a single arrival link with driver details and live status. TransferLinkz is not a messaging tool — it is arrival insurance.",
		images: ["/transferlinkz-logo.png"],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				{children}
				<Toaster theme="dark" richColors position="top-center" />
			</body>
		</html>
	);
}
