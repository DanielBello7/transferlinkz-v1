export const NAV_LINKS = [
	{ label: "Problem", href: "#problem" },
	{ label: "Solution", href: "#solution" },
	{ label: "What This Fixes", href: "#fixes" },
	{ label: "Impact", href: "#impact" },
	{ label: "Contact", href: "#contact" },
] as const;

export const PROBLEM_POINTS = [
	"Outsourced",
	"Time-critical",
	"Emotionally charged",
] as const;

export const OPERATOR_COSTS = [
	"Complaints & refunds",
	"Call centre overload",
	"Tour Director stress",
	"Brand damage",
] as const;

export const ROOT_CAUSES = [
	"Guests lack clarity at arrival",
	"Suppliers lack real-time confirmation tools",
	"Operators are forced to intervene in preventable issues",
] as const;

export const SOLUTION_POINTS = [
	{
		who: "Guests",
		what: "receive a single arrival link with driver details and live status",
	},
	{
		who: "Suppliers",
		what: "confirm presence and communicate directly (masked)",
	},
	{ who: "Operators", what: "are notified only if escalation is needed" },
] as const;

export const FIXES = [
	"Missed transfers",
	'"Driver vs guest" disputes',
	"Arrival-related complaints",
	"Unnecessary call centre volume",
] as const;

export const IMPACT_ITEMS = [
	"Fewer escalations",
	"Calmer guests before TD interaction",
	"Reduced on-call pressure for ops teams",
] as const;

export const COMMERCIAL_POINTS = [
	"Low per-guest / per-transfer fee",
	"Scales with volume",
	"No guest app required",
] as const;

export const SUCCESS_METRICS = [
	{ label: "Missed transfers", direction: "down" as const },
	{ label: "Arrival complaints", direction: "down" as const },
	{ label: "Call centre tickets", direction: "down" as const },
	{ label: "TD satisfaction", direction: "up" as const },
];

export const FAQ_ITEMS = [
	{
		q: "What is TransferLinkz?",
		a: "TransferLinkz is Arrival Risk Management software. Guests receive a single arrival link with driver details and live status; suppliers confirm presence and communicate directly (masked); operators are notified only if escalation is needed.",
	},
	{
		q: "Do guests need to download an app?",
		a: "No. TransferLinkz works without a guest app — guests use a single arrival link with driver details and live status.",
	},
	{
		q: "How is TransferLinkz priced?",
		a: "We use a low per-guest / per-transfer fee that scales with volume. Contact us for a quote.",
	},
] as const;

export const HERO = {
	title:
		"Reducing Arrival Risk & Operational Escalations with TransferLinkz",
	subtitle: "TransferLinkz is not a messaging tool — it is arrival insurance.",
	ctaPrimary: { label: "See how it works", href: "#solution" },
	ctaSecondary: { label: "Get in touch", href: "#contact" },
} as const;

export const POSITIONING_CTA = {
	text: "TransferLinkz is not a messaging tool — it is arrival insurance.",
	buttonLabel: "Get started — it's free",
	href: "#contact",
} as const;
