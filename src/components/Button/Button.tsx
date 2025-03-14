import React, { JSX } from 'react';
import styles from './Button.module.scss';
import { ButtonProps } from './Button.props';
import cn from 'classnames';

const Button = ({ appearances, children, ...props }: ButtonProps): JSX.Element => {
	return (
		<button className={ cn(styles.button, {
			[styles.primary]: appearances === 'primary',
			[styles.ghost]: appearances === 'ghost',
		})
		}
			{ ...props }
		>
			{ children }
		</button>
	);
};

export default Button;

