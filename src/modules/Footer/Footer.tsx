import React, { JSX } from 'react';
import styles from './Footer.module.scss';
import cn from 'classnames';
import { FooterProps } from './Footer.props';
import { format } from 'date-fns'

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
	return (
		<div className={ cn(styles.footer, className, {
		})
		}
			{ ...props }
		>
			<span>
				OwlTop © 2020 - { format(new Date(), 'yyyy') } Все права защищены
			</span>
			<a href="#" target="_blank">Пользовательское соглашение</a>
			<a href="#" target="_blank">Политика конфиденциальности</a>
		</div>
	);
};