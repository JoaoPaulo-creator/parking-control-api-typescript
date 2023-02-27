import request from "supertest";
import { afterAll, describe, expect, it } from "vitest";
import { app } from "../../src";

describe.concurrent("Testing parking control endpoints", () => {
  // Esse teste vai falhar propositalmente
  it("should search for all existing parking spots", async () => {
    await app.ready();
    const response = await request(app.server).get("/");
    expect(response.statusCode).toBe(201);
  });

  afterAll(async () => {
    await app.close();
  });
});
