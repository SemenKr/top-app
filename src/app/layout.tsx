import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { Footer, Header, SideBar } from '@/modules';
import styles from './layout.module.scss';

const notoSans = Noto_Sans({
	variable: "--font-noto-sans",
	subsets: ["cyrillic-ext", "cyrillic"],
});


export const metadata: Metadata = {
	title: "Top-app-next",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru">
			<body className={ `${notoSans.variable} ` }>
				<div className={ styles.wrapper }>
					<Header className={ styles.header } />

					<SideBar className={ styles.sideBar } />
					<div className={ styles.body }>
						{ children }
					</div>


					<Footer className={ styles.footer } />
				</div>

			</body>
		</html>
	);
}
