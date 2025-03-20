import React, { JSX } from 'react';
import styles from './Button.module.scss';
import { ButtonProps } from './Button.props';
import ArrowIcon from './arrow.svg';
import cn from 'classnames';

export const Button = ({ appearances = 'primary', arrow = 'none', children, className, ...props }: ButtonProps): JSX.Element => {
	return (
		<button className={ cn(styles.button, className, {
			[styles.primary]: appearances === 'primary',
			[styles.ghost]: appearances === 'ghost',
		})
		}
			{ ...props }
		>
			{ children }
			{ arrow !== 'none' && <span className={ cn(styles.arrow, {
				[styles.down]: arrow === 'down',
				[styles.right]: arrow === 'right',
			})
			}
			>
				<ArrowIcon />
			</span> }
		</button>
	);
};