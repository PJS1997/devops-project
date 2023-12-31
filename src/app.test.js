const app =require("./app")
const supertest = require("supertest")
const request = supertest(app)

describe("/test endpoint", () => {
    it("should return 200", async () => {
        const response = await request.get("/test")
        expect(response.status).toBe(200)   
        expect(response.text).toBe("Hello World")
    })
})