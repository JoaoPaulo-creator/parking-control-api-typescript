import cors from "@fastify/cors";
import Fastify from "fastify";
import { routes } from "./routes";
export const app = Fastify();

app.register(cors);
app.register(routes);

app
  .listen({
    port: 4567,
  })
  .then(() => {
    console.log(`Server is running at http://localhost:4567`);
  })
  .catch((error) => console.error(`An error ocurred: ${error}`));
