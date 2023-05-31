import Section from '@/components/parts/Section';
import React from 'react';

const Logos = (children: React.ReactNode) => {
	return (
		<Section>
			<div className="flex justify-between items-center">{children}</div>
		</Section>
	);
};

export default Logos;
