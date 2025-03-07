import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'THE BARBER HOUSE',
			social: {
				github: 'https://github.com/Suclaif88/THE-BARBER-HOUSE',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ label: 'Introducion', slug: 'guides' },
						{ label: 'Inicio rapido', slug: 'guides/startup' },
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
