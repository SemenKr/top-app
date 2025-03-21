import React, { JSX } from 'react';
import styles from './SideBar.module.scss';
import cn from 'classnames';
import { SideBarProps } from './SideBar.props';

export const SideBar = ({ className, ...props }: SideBarProps): JSX.Element => {
	return (
		<div className={ cn(styles.sideBar, className, {
		})
		}
			{ ...props }
		>
			SideBar
		</div>
	);
};