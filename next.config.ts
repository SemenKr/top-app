import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			use: [
				{
					loader: "@svgr/webpack",
					options: {
						svgo: true, // Оптимизация SVG
						svgoConfig: {
							plugins: [
								{
									name: "removeViewBox",
									active: false, // Отключаем удаление viewBox
								},
								{
									name: "removeXMLNS",
									active: true, // Удаляем xmlns, если он не нужен
								},
							],
						},
					},
				},
			],
		});

		return config;
	},
};

export default nextConfig;
