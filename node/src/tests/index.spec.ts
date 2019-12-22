import app from "src/index";
import * as supertest from "supertest";
import { music } from "src/music";

describe("app", () => {
  let request;

  beforeEach(() => {
    request = supertest(app);
  });

  it("should return a successful response for GET /", async () => {
    const res = await request.get("/");
    const body = res.body;
    expect(body.message).toEqual(
      "hello world!this is music strings aais music abca sd"
    );
  });
});
