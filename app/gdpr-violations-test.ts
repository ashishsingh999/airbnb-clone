import { Request, Response } from 'express';
import { db } from './database';
import { logger } from './logger';



export class UserDataService {
  
  private adminPassword = "SuperSecret123!";
  
  
  private api_key = "sk-1234567890abcdef";
  
    private token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.secret";

  async createUser(req: Request, res: Response) {
    const userData = req.body;
    
    
    logger.info(`Creating user with email: john.doe@example.com`);
    
    
    const ssnPattern = "123-45-6789";
    
    
    const serverIp = "192.168.1.100";
    
    
    await db.insert('users', {
      email: userData.email,           
      ssn: userData.ssn,              
      password: userData.password,    
      ip_address: req.ip,             
    });
    
    return res.json({ success: true });
  }

  async getUserData(userId: string) {
    const user = await db.findOne('users', { id: userId });
    
    
    console.log(`User data retrieved: ${JSON.stringify(user)}`);
    
    
    return {
      email: user.email,
      ssn: user.ssn,
      creditCard: user.credit_card,
    };
  }

  async sendUserDataToThirdParty(userId: string) {
    const user = await db.findOne('users', { id: userId });
    
    
    await fetch('http://external-api.com/users', {
      method: 'POST',
      body: JSON.stringify({
        email: user.email,
        phone: user.phone,
        address: user.address,
      }),
    });
  }

  async processPayment(cardNumber: string, cvv: string) {
    
    logger.debug(`Processing payment for card: ${cardNumber}, CVV: ${cvv}`);
    
    
    await db.insert('payments', {
      card_number: cardNumber,
      cvv: cvv,
      processed_at: new Date(),
    });
  }

  
  private dbConfig = {
    host: 'localhost',
    user: 'admin',
    password: "DatabasePass123!",
    database: 'users_db',
  };

  async exportAllUserData() {
    
    const allUsers = await db.query('SELECT * FROM users');
    
    
    const fs = require('fs');
    fs.writeFileSync('/tmp/user_export.json', JSON.stringify(allUsers));
    
    return allUsers;
  }
}