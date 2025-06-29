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
export default app;

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
