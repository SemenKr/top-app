import React, { JSX } from 'react';
import styles from './P.module.scss';
import cn from 'classnames';
import { PProps } from './P.props';

export const P = ({ size = 'm', children, className, ...props }: PProps): JSX.Element => {
	return (
		<p className={ cn(styles.p, className, {
			[styles.s]: size === 's',
			[styles.m]: size === 'm',
			[styles.l]: size === 'l',
		})
		}
			{ ...props }
		>
			{ children }
		</p>
	);
};