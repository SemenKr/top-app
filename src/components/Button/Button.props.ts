import { ReactNode } from 'react';

export interface ButtonProps {
	children: ReactNode;
	appearances: 'primary' | 'ghost';
}