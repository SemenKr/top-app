'use client'

import Image from "next/image";
import styles from "./page.module.css";
import { Button, Title, P, Rating } from '@/components';
import { Tag } from '../components/Tag/Tag';
import { useEffect, useState } from 'react';


export default function Home() {

	const [counter, setCounter] = useState<number>(0);
	useEffect(() => {
		console.log('render', counter);

	});

	
  return (
    <div className={styles.page}>
      <main className={styles.main}>
				<Title tag="h1">Заголовок</Title>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
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

				<Rating rating={ 4 } isEditable={ true } />
      </main>
    </div>
  );
}
