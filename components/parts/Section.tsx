type SectionProps = {
	children: React.ReactNode;
};

export default function Section({ children }: SectionProps) {
	return <section className="md:p-12 p-6 w-full">{children}</section>;
}
