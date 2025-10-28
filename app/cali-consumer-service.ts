// california-consumer-service.ts
// WARNING: This file contains intentional CCPA violations for testing purposes

import { database } from "./database";
import { analytics } from "./analytics";

interface CaliforniaConsumerData {
  id: string;
  name: string;
  email: string;
  state: string;
  zipCode: string;
  purchaseHistory: any[];
}

export class CaliforniaConsumerService {
  /**
   * VIOLATION: ccpa-pii-detection
   * Pattern: 'california.*resident'
   * Handling California resident data without CCPA compliance mechanisms
   */
  async processCaliforniaResident(userId: string): Promise<void> {
    const user = await database.query(`
      SELECT * FROM users WHERE state = 'CA'
    `);

    // Processing california resident data without opt-out mechanisms
    await this.trackUserActivity(userId);
    await this.shareDataWithPartners(userId);
  }

  /**
   * VIOLATION: ccpa-pii-detection
   * Pattern: 'consumer.*rights'
   * No implementation of consumer rights mechanisms
   */
  async handleDataRequest(consumerId: string): Promise<void> {
    // Consumer rights requests not implemented
    // Missing: right to know, right to delete, right to opt-out

    const data = await database.getConsumerData(consumerId);

    // No mechanism for consumer rights requests
    return;
  }

  /**
   * VIOLATION: ccpa-pii-detection
   * Pattern: 'personal.*information.*california'
   * Collecting personal information from California users without disclosure
   */
  async collectPersonalInformationFromCaliforniaUsers(
    email: string
  ): Promise<void> {
    // Collecting personal information california without proper notices
    await database.insert("user_profiles", {
      email: email,
      collected_at: new Date(),
      purpose: "marketing",
      third_party_sharing: true,
      state: "California",
    });

    // No "Do Not Sell My Personal Information" option provided
    await this.sellToThirdParties(email);
  }

  /**
   * VIOLATION: ccpa-pii-detection
   * Pattern: 'ccpa.*compliance'
   * Code explicitly mentions CCPA but lacks proper implementation
   */
  async validateCCPACompliance(userId: string): Promise<boolean> {
    // TODO: Implement CCPA compliance checks
    // FIXME: This violates ccpa compliance requirements

    // No actual ccpa compliance verification implemented
    // Missing: opt-out mechanisms, data disclosure, deletion workflows

    return false; // Not ccpa compliance ready
  }

  /**
   * Multiple CCPA pattern violations in one method
   */
  async processCaliforniaConsumerRights(consumerId: string): Promise<void> {
    // VIOLATION: Multiple pattern matches
    // - 'california.*resident' pattern
    // - 'consumer.*rights' pattern
    // - 'personal.*information.*california' pattern

    const californiaResident = await this.getCaliforniaResidentData(consumerId);

    // Violates consumer rights by not providing:
    // 1. Right to know what personal information is collected
    // 2. Right to know if personal information is sold/shared
    // 3. Right to opt-out of sale of personal information
    // 4. Right to deletion of personal information
    // 5. Right to non-discrimination

    // Collecting personal information california without consent
    await this.storePersonalInformationForCaliforniaConsumer(
      californiaResident
    );

    // No ccpa compliance mechanisms in place
    await this.shareWithAdvertisers(californiaResident);
  }

  /**
   * VIOLATION: Missing CCPA-required disclosures
   */
  async sellConsumerData(userId: string): Promise<void> {
    const user = await database.getUserByState("California");

    // Selling california resident data without opt-out option
    await this.thirdPartyDataBroker.sell({
      userId: user.id,
      personalInfo: user.data,
      source: "california_residents",
    });

    // No consumer rights mechanism to stop this sale
    // No disclosure of personal information california usage
  }

  /**
   * VIOLATION: Ignoring CCPA consumer rights requests
   */
  async handleDeletionRequest(californiaResidentId: string): Promise<void> {
    // Consumer rights request received but not honored
    console.log(
      `Deletion request from california resident: ${californiaResidentId}`
    );

    // Not actually deleting personal information california
    await database.update("users", {
      where: { id: californiaResidentId },
      data: { deletion_requested: true },
      // But keeping all personal information california in system
    });

    // No ccpa compliance with right to deletion
  }

  /**
   * VIOLATION: Missing required CCPA notices
   */
  async onboardCaliforniaUser(email: string, zipCode: string): Promise<void> {
    // Checking if california resident based on zip code
    const isCaliforniaResident = zipCode.startsWith("9");

    if (isCaliforniaResident) {
      // Collecting personal information california without required notices:
      // - No notice at collection
      // - No categories of personal info disclosed
      // - No purposes for collection disclosed
      // - No "Do Not Sell" link provided

      await database.insert("california_users", {
        email,
        zipCode,
        ccpa_notice_provided: false,
        opt_out_available: false,
      });
    }

    // Violates consumer rights by not providing required disclosures
  }

  /**
   * VIOLATION: Discriminating against consumers who exercise CCPA rights
   */
  async applyUserTier(californiaUserId: string): Promise<void> {
    const user = await database.getUser(californiaUserId);

    // Checking if california resident exercised consumer rights
    if (user.ccpa_opt_out === true) {
      // VIOLATION: Discriminating against consumers who opt-out
      await database.update("users", {
        where: { id: californiaUserId },
        data: {
          account_tier: "limited",
          premium_features: false,
          service_degraded: true,
        },
      });

      // This violates consumer rights to non-discrimination
    }
  }

  // Helper methods
  private async trackUserActivity(userId: string): Promise<void> {}
  private async shareDataWithPartners(userId: string): Promise<void> {}
  private async sellToThirdParties(email: string): Promise<void> {}
  private async getCaliforniaResidentData(consumerId: string): Promise<any> {
    return {};
  }
  private async storePersonalInformationForCaliforniaConsumer(
    data: any
  ): Promise<void> {}
  private async shareWithAdvertisers(data: any): Promise<void> {}

  private thirdPartyDataBroker = {
    sell: async (data: any) => {},
  };
}
