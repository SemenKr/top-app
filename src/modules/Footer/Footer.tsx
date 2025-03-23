import React, { JSX } from 'react';
import styles from './Footer.module.scss';
import cn from 'classnames';
import { FooterProps } from './Footer.props';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
	return (
		<div className={ cn(styles.footer, className, {
		})
		}
			{ ...props }
		>
			<div>
				OwlTop © 2020 - 2021 Все права защищены
			</div>
		</div>
	);
};