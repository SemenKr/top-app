'use client'

import Image from "next/image";
import styles from "./Home.module.css";
import { Button, Title, P, Rating, Tag } from '@/components';
import { useEffect, useState } from 'react';
import { MenuItem } from '@/interfaces/menu.inteface';

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}


export default function Home({ menu }: HomeProps) {

	const [counter, setCounter] = useState<number>(0);
	const [rating, setRating] = useState<number>(0);

	useEffect(() => {
		console.log('render');
		console.log(menu);

	} , []);


	return (
		<div className={ styles.page }>
			<main className={ styles.main }>
				<Title tag="h1">Заголовок</Title>
				<Image
					className={ styles.logo }
					src="/next.svg"
					alt="Next.js logo"
					width={ 180 }
					height={ 38 }
					priority
				/>
				<p>Привет счетчик { counter }</p>
				<Button onClick={ () => setCounter(counter + 1) } arrow={ 'right' } >Кнопка</Button>
				<Button onClick={ () => setCounter(counter - 1) } arrow={ 'down' } >Кнопка</Button>
				<Button appearances={ 'ghost' }>Кнопка</Button>

				<P size={ 'l' }>Текст l</P>
				<P>Текст m</P>
				<P size={ 's' }>Текст s</P>

				<Tag size={ 's' } color={ 'red' }>Метка red</Tag>
				<Tag size={ 'm' } color={ 'green' }>Метка green</Tag>
				<Tag size={ 'm' } color={ 'primary' }>Метка primary</Tag>
				<Tag size={ 'm' } href={ '#' } color={ 'grey' }>Метка grey</Tag>

				<Rating rating={ rating } isEditable setRating={ setRating } />
				{ menu.map(m => (
					<div key={ m._id.secondCategory }>
						{ m._id.secondCategory }
						{/* <ul>
								{ m.pages.map(p => (
							<li key={ p._id }>
								<p>{ p.title }</p>
								<p>{p.category}</p>

							</li>
						)) }
						</ul> */}
					
						<hr />
					</div>
				)) }
			</main>
		</div>
	);
}

