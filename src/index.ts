import { Elysia } from "elysia";

const app = new Elysia()
  .get("/", () => "Hello Elysia")
  .get("/api/hello", () => ({ message: "Hello from Elysia API" }))
  .get("/api/users/:id", ({ params: { id } }) => ({
    id,
    name: `User ${id}`,
    email: `user${id}@example.com`
  }))
  .post("/api/users", ({ body }) => ({
    message: "User created",
    data: body
  }))
  .listen(3000);

// Esporta l'app per Vercel
// Handler per Vercel
export default async function handler(req: Request) {
  return await app.fetch(req);
}

// Per sviluppo locale
if (import.meta.main) {
  app.listen(3000);
  console.log("🦊 Elysia is running at http://localhost:3000");
}

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
