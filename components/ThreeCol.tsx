import Section from '@/components/parts/Section';
import React from 'react';

type ThreeColProps = {
	iconOne: React.ReactNode;
	titleOne: string;
	descriptionOne: string;
	iconTwo: React.ReactNode;
	titleTwo: string;
	descriptionTwo: string;
	iconThree: React.ReactNode;
	titleThree: string;
	descriptionThree: string;
};

const ThreeCol = ({
	iconOne,
	titleOne,
	descriptionOne,
	iconTwo,
	titleTwo,
	descriptionTwo,
	iconThree,
	titleThree,
	descriptionThree
}: ThreeColProps) => {
	return (
		<Section>
			<div className="m-auto md:grid grid-cols-3 gap-8">
				<div className="col1 text-center bg-slate-200 p-12 min-h-[360px] items-center justify-center md:p-6 rounded-2xl flex gap-4 flex-col">
					<div className="w-24 h-24 mb-8">{iconOne}</div>
					<h3 className="text-2xl">{titleOne}</h3>
					<p>{descriptionOne}</p>
				</div>
				<div className="col2 text-center bg-slate-200 p-12 min-h-[360px] items-center justify-center md:p-6 rounded-2xl flex gap-4 flex-col">
					<div className="w-24 h-24 mb-8">{iconTwo}</div>
					<h3 className="text-2xl">{titleTwo}</h3>
					<p>{descriptionTwo}</p>
				</div>
				<div className="col3 text-center bg-slate-200 p-12 min-h-[360px] items-center justify-center md:p-6 rounded-2xl flex gap-4 flex-col">
					<div className="w-24 h-24 mb-8">{iconThree}</div>
					<h3 className="text-2xl">{titleThree}</h3>
					<p>{descriptionThree}</p>
				</div>
			</div>
		</Section>
	);
};

export default ThreeCol;
