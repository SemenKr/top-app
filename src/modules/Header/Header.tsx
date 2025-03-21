import React, { JSX } from 'react';
import styles from './Header.module.scss';
import cn from 'classnames';
import { HeaderProps } from './Header.props';

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
	return (
		<div className={ cn(styles.header, className, {
		})
		}
			{ ...props }
		>
			Header
		</div>
	);
};