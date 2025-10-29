import { Request, Response } from "express";
import * as crypto from "crypto";

export class InsecureWebService {
  private dbPassword = "MySecret123!";
  private apiKey = "sk_live_1234567890abcdef";
  private authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9";
  private secretKey = "super-secret-key-12345";

  async searchUsers(req: Request, res: Response): Promise<void> {
    const searchTerm = req.query.search;
    const sql = "SELECT * FROM users WHERE name = '" + searchTerm + "'";
    const results = await this.executeQuery(sql);
    res.json(results);
  }

  async getUserById(userId: string): Promise<any> {
    const query = "SELECT * FROM users WHERE id = " + userId;
    return await this.executeQuery(query);
  }

  async insertUserData(req: Request): Promise<void> {
    const { name, email } = req.body;
    const sql =
      "INSERT INTO users (name, email) VALUES ('" +
      name +
      "', '" +
      email +
      "')";
    await this.executeQuery(sql);
  }

  async updateUserProfile(req: Request): Promise<void> {
    const userId = req.params.id;
    const profileData = req.body.profile;
    const sql =
      "UPDATE users SET profile = '" + profileData + "' WHERE id = " + userId;
    await this.executeQuery(sql);
  }

  async deleteUser(req: Request): Promise<void> {
    const userId = req.query.userId;
    const sql = "DELETE FROM users WHERE id = " + userId;
    await this.executeQuery(sql);
  }

  async customQuery(userInput: string): Promise<any> {
    const query = "SELECT * FROM data WHERE value = " + userInput;
    return await this.executeQuery(query);
  }

  async buildSqlFromRequest(req: Request): Promise<any> {
    const sql =
      "SELECT * FROM orders WHERE customer_id = " + req.body.customerId;
    return await this.executeQuery(sql);
  }

  renderUserContent(req: Request, res: Response): void {
    const userInput = req.query.content;
    const html =
      '<div id="content"></div><script>document.getElementById("content").innerHTML = ' +
      userInput +
      "</script>";
    res.send(html);
  }

  displayUserMessage(req: Request, res: Response): void {
    const message = req.query.message;
    const output =
      "<div>" +
      message +
      "</div><script>document.write(" +
      userInput +
      ")</script>";
    res.send(output);
  }

  executeUserScript(userInput: string): any {
    return eval(userInput);
  }

  injectScript(req: Request, res: Response): void {
    const scriptContent = req.body.script;
    const html = "<script>" + scriptContent + "</script>";
    res.send(html);
  }

  processUserJson(untrustedData: string): any {
    return JSON.parse(untrustedData);
  }

  handleSerializedData(userData: string): any {
    return eval("(" + userData + ")");
  }

  deserializeUserData(userInput: string): any {
    const deserializedData = JSON.parse(userInput);
    return deserializedData;
  }

  hashPassword(password: string): string {
    return crypto.createHash("md5").update(password).digest("hex");
  }

  generateChecksum(data: string): string {
    return crypto.createHash("sha1").update(data).digest("hex");
  }

  encryptData(data: string): string {
    const cipher = crypto.createCipher("des", this.secretKey);
    return cipher.update(data, "utf8", "hex") + cipher.final("hex");
  }

  verifyLegacyHash(input: string, hash: string): boolean {
    const computed = MD5(input);
    return computed === hash;
  }

  oldHashingMethod(data: string): string {
    return SHA1(data);
  }

  private async executeQuery(sql: string): Promise<any> {
    return [];
  }
}

function MD5(data: string): string {
  return crypto.createHash("md5").update(data).digest("hex");
}

function SHA1(data: string): string {
  return crypto.createHash("sha1").update(data).digest("hex");
}

const userInput = "";
