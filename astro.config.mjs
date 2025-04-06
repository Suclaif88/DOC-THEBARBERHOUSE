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
          label: 'Guias',
          items: [
            { label: 'Introducción', slug: 'guides' },
            { label: 'Inicio rápido', slug: 'guides/startup' },
            { label: 'Example Guide', slug: 'guides/example' },
          ],
        },
        {
          label: 'API Endpoints',
		  autogenerate: { directory: 'api' },
        },
        {
          label: 'Referencias',
          autogenerate: { directory: 'reference' },
        },
      ],
    }),
  ],
});
