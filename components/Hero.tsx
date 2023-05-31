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
			<div className="container flex gap-8 md:gap-12 max-w-screen-xl m-auto p-12 bg-slate-200 rounded-xl">
				<div className="flex flex-col md:w-1/2 justify-between">
					<Image className="hero__logo" width={175} src={logo} alt="logo" />
					<div className="flex flex-col gap-8">
						<h1 className="hero__title text-4xl md:text-6xl">{title}</h1>
						<p className="hero__description text-lg">{description}</p>
						<Link
							className="block w-fit px-8 py-6 text-lg bg-black text-white rounded-xl hover:bg-gray-800 hover:mb-2 hover:-mt-2 transition-all"
							href={buttonLink}
						>
							{buttonText}
						</Link>
					</div>
				</div>
				<div className="md:w-1/2 h-[600px] overflow-hidden flex items-center rounded-xl">
					<Image className="object-cover center" src={featureImage} alt="Featured image"></Image>
				</div>
			</div>
		</Section>
	);
};

export default Hero;
