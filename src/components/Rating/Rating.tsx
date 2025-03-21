import React, { JSX, useEffect, useState } from 'react';
import styles from './Rating.module.scss';
import StarIcon from './star.svg';
import { RatingProps } from './Rating.props';
import cn from 'classnames';

export const Rating = ({ isEditable = false, rating, ...props }: RatingProps): JSX.Element => {
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

	useEffect(() => {
		constructRating(rating);
	}, [rating]);

	const constructRating = (currentRating: number) => {
		const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
			return (
				<StarIcon key={ i } className={ cn(styles.star, {
					[styles.filled]: i < currentRating,
				}) } />
			);
		});
		setRatingArray(updatedArray);
	};

	return (
		<div{ ...props } >
			{ ratingArray.map((r, i) => (<span className={ styles.starWrapper } key={ i }>{ r }</span>)) }
		</div>
	);
};