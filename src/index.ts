import { Elysia } from 'elysia';

const app = new Elysia()
  .get('/', () => {
    return 'Ciao da Elysia su Vercel (dal progetto bun create elysia)!';
  })
  .get('/api/greet/:name', ({ params: { name } }) => {
    return `Ciao, ${name}! Benvenuto su Elysia su Vercel (progetto bun create elysia).`;
  })
  .post('/api/echo', async ({ body }) => {
    return body;
  });

// --- RIGA FONDAMENTALE PER VERCEL ---
// Esporta l'istanza di Elysia per Vercel
export default app;

// Opzionale: per testare localmente con 'bun run src/index.ts' o 'bun run dev'
// In un ambiente Vercel, questo blocco non verrà eseguito direttamente come un server
if (process.env.NODE_ENV === 'development') {
  app.listen(3000, () => {
    console.log('Elysia app listening on http://localhost:3000');
  });
}
