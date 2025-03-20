import Image from "next/image";
import styles from "./page.module.css";
import { Button, Title, P } from '@/components';

export const metadata = {
	title: "Главная страница",
	description: "Это описание главной страницы",
	keywords: "Next.js, React, TypeScript, Top, Rating",
	author: "Sam K.",
};

export default function Home() {

	
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
				<p>Привет</p>
				<Button arrow={ 'right' } >Кнопка</Button>
				<Button arrow={ 'down' } >Кнопка</Button>
				<Button appearances={ 'ghost' }>Кнопка</Button>

				<P size={ 'l' }>Текст l</P>
				<P>Текст m</P>
				<P size={ 's' }>Текст s</P>

      </main>
    </div>
  );
}
