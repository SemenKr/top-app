import { notFound } from 'next/navigation';
import { ProductModel } from '@/interfaces/product.interface';
import { TopPageModel } from '@/interfaces/toppage.interface';

export async function generateStaticParams() {
	const firstCategory = 0;
	debugger
	const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ firstCategory }),
		next: { revalidate: 60 }
	});
	debugger

	if (!res.ok) {
		console.error('Failed to fetch menu');
		return [];
	}

	const menu = await res.json();

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return menu.flatMap((m: any) =>
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		m.pages.map((p: any) => ({ alias: p.alias }))
	);
}

interface CourseProps {
  params: Promise<{ alias: string }>;
}


export default async function CoursePage({ params }: CourseProps) {
  const awaitedParams = await params;

  const resPage = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/byAlias/${awaitedParams.alias}`);
  if (!resPage.ok) return notFound();

	const page: TopPageModel = await resPage.json();

	const resProducts = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/product/find`, {
		method: 'POST',
		body: JSON.stringify({ category: page.category, limit: 10 }),
		headers: {
			'Content-Type': 'application/json'
		}
	});

	const products: ProductModel[] = await resProducts.json();

	return (
		<div>
			{ products.length } продуктов найдено
		</div>
	);
}
