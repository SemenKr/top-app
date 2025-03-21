import { DetailedHTMLProps, ReactNode } from 'react';

export interface TagProps extends DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children?: ReactNode;
	size?: 's' | 'm';
	color?: 'ghost' | 'red' | 'grey' | 'green' | 'primary';
	href?: string;
}