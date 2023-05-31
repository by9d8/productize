type SectionProps = {
	children: React.ReactNode;
};

export default function Section({ children }: SectionProps) {
	return <section className="w-full max-w-screen-xl m-auto">{children}</section>;
}
