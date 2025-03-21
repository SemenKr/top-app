import React, { JSX } from 'react';
import styles from './Footer.module.scss';
import cn from 'classnames';
import { FooterProps } from './Footer.props';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
	return (
		<div className={ cn(styles.header, className, {
		})
		}
			{ ...props }
		>
			Footer
		</div>
	);
};