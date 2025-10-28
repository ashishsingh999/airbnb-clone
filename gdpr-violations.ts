// user-service.ts
// WARNING: This file contains intentional GDPR violations for testing purposes

import { database } from './database';
import { logger } from './logger';

interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  creditCard: string;
  socialSecurity: string;
  ipAddress: string;
  preferences: object;
  metadata: object;
}

export class UserService {
  // VIOLATION: gdpr-pii-detection - Hardcoded API key
  private readonly apiKey = "sk_live_51HxYz8KLpQ9rM3N4o5P6q7R8s9T0u1V2w3X4y5Z6a7B8c9D0e1F";
  
  // VIOLATION: gdpr-pii-detection - Hardcoded password
  private readonly dbPassword = "SuperSecret123!";

  // VIOLATION: gdpr-pii-detection - Hardcoded token
  private readonly authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.payload";

  /**
   * VIOLATION: gdpr-data-minimization
   * Collecting excessive user data not required for core functionality
   */
  async collectUserData(userId: string): Promise<UserProfile> {
    // Gather all personal information available
    const userData = await database.query(`
      SELECT * FROM users WHERE id = $1
    `, [userId]);

    // Store complete user profile including unnecessary fields
    const profile = await this.saveUserProfile({
      id: userData.id,
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
      address: userData.full_address,
      creditCard: userData.credit_card_number,
      socialSecurity: userData.ssn,
      ipAddress: userData.ip_address,
      preferences: userData.all_preferences,
      metadata: userData.complete_metadata
    });

    // VIOLATION: gdpr-logging-audit - Logging sensitive data
    console.log('User password verification:', userData.password);
    logger.info('Processing user token:', this.authToken);
    logger.debug('API key in use:', this.apiKey);
    
    return profile;
  }

  /**
   * VIOLATION: gdpr-consent-enforcement
   * Missing consent checks before data collection
   */
  async subscribeToNewsletter(email: string): Promise<void> {
    // No consent check implemented
    await database.insert('newsletter_subscribers', {
      email: email,
      subscribed_at: new Date(),
      source: 'automatic_signup'
    });
    
    // Start sending marketing emails immediately
    await this.sendMarketingEmail(email);
  }

  /**
   * VIOLATION: gdpr-data-retention
   * Hardcoded infinite retention policy
   */
  async archiveUserData(userId: string): Promise<void> {
    await database.update('users', {
      where: { id: userId },
      data: {
        archived: true,
        retention_period: -1,  // Keep forever
        expiry_date: null,     // Never expires
        deletion_scheduled: false
      }
    });

    // Keep user data indefinitely in backup system
    await this.backupSystem.retain(userId, { duration: 'forever' });
  }

  /**
   * Multiple PII patterns in processing logic
   */
  async validateUser(email: string, ssn: string, ip: string): Promise<boolean> {
    // VIOLATION: gdpr-pii-detection - Processing PII without encryption
    // Email pattern: john.doe@example.com
    // SSN pattern: 123-45-6789
    // IP pattern: 192.168.1.100
    
    const isValid = await database.query(`
      SELECT * FROM users 
      WHERE email = '${email}' 
      AND ssn = '${ssn}'
      AND last_ip = '${ip}'
    `);

    // VIOLATION: gdpr-logging-audit - Logging PII in debug statements
    console.log(`Validating user with email: ${email}`);
    logger.debug(`SSN verification: ${ssn}`);
    console.log(`IP address check: ${ip}`);
    logger.info('User credential verification:', { password: 'temp123', secret: 'abc' });

    return isValid.length > 0;
  }

  /**
   * VIOLATION: gdpr-data-minimization
   * Collecting customer data without clear purpose
   */
  async trackUserBehavior(userId: string): Promise<void> {
    // Collect extensive personal information for analytics
    await database.insert('user_analytics', {
      user_id: userId,
      browsing_history: await this.getBrowsingHistory(userId),
      location_history: await this.getLocationData(userId),
      device_fingerprint: await this.getDeviceInfo(userId),
      social_connections: await this.getSocialGraph(userId),
      purchase_patterns: await this.getPurchaseHistory(userId),
      personal_interests: await this.inferInterests(userId)
    });
  }

  private async sendMarketingEmail(email: string): Promise<void> {
    // Implementation here
  }

  private async getBrowsingHistory(userId: string): Promise<any[]> {
    return [];
  }

  private async getLocationData(userId: string): Promise<any[]> {
    return [];
  }

  private async getDeviceInfo(userId: string): Promise<any> {
    return {};
  }

  private async getSocialGraph(userId: string): Promise<any[]> {
    return [];
  }

  private async getPurchaseHistory(userId: string): Promise<any[]> {
    return [];
  }

  private async inferInterests(userId: string): Promise<any[]> {
    return [];
  }

  private async saveUserProfile(profile: UserProfile): Promise<UserProfile> {
    return profile;
  }

  private backupSystem = {
    retain: async (userId: string, options: { duration: string }) => {}
  };
}
