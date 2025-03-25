import { MenuItem } from '@/interfaces/menu.inteface';
import Home from '@/modules/Home/Home';
import axios from 'axios';

export default async function Page() {
  const firstCategory = 0;

  // Запрос данных на сервере
  const { data: menu } = await axios.post<MenuItem[]>(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`, {
			firstCategory
		}
  );

  return <Home menu={menu} firstCategory={firstCategory} />;
}

