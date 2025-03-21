import { DetailedHTMLProps } from 'react';

export interface RatingProps extends DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	isEditable?: boolean;
	rating: number;
	setRating?: (rating: number) => void;
}