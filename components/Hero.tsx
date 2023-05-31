import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import Section from '@/components/parts/Section';

type HeroProps = {
	title: string;
	description: string;
	buttonText: string;
	buttonLink: string;
	featureImage: StaticImageData;
	logo: StaticImageData;
};

const Hero = ({ title, description, buttonText, buttonLink, featureImage, logo }: HeroProps) => {
	return (
		<Section>
			<div className="flex flex-col gap-6 items-between">
				<Image className="hero__logo" src={logo} alt="logo" />
				<div>
					<h1 className="hero__title text-4xl">{title}</h1>
					<p className="hero__description text-lg">{description}</p>
					<Link className="px-4 py-6 text-lg bg-black text-white" href={buttonLink}>
						{buttonText}
					</Link>
				</div>
			</div>
			<div className="w-1/2 h-auto">
				<Image src={featureImage} alt="Featured image"></Image>
			</div>
		</Section>
	);
};

export default Hero;
