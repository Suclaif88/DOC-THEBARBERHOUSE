import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { ion } from "starlight-ion-theme";

export default defineConfig({
  integrations: [
    starlight({
      title: 'THE BARBER HOUSE',
      logo: {src: './src/assets/3.png',},
      favicon: '/favicon.ico',
      // plugins: [
      //   ion()
      // ],
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
          collapsed: false,
          items: [
            {
              label: 'Authenticacion',
              collapsed: true,
              items: [
                'docs/api/auth/login',
                'docs/api/auth/register',
                'docs/api/auth/token',
              ],
            },
            {
              label: 'Insumos',
              collapsed: true,
              items: [
                'docs/api/insumos/insumos',
                'docs/api/insumos/cat-insumos',
              ],
            },
          ],
        },
        {
          label: 'Referencias',
          autogenerate: { directory: 'reference' },
        },
      ],
    }),
  ],
});
