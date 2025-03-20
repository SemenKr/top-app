import { DetailedHTMLProps, ReactNode } from 'react';

export interface PProps extends DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
	children?: ReactNode;
	size?: 's' | 'm' | 'l';
}