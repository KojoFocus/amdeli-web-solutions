import { defineConfig } from 'prisma/config';

export default defineConfig({
  datasource: {
    url: 'file:./dev.db',
  },
  engine: 'classic', // or 'js'
});
