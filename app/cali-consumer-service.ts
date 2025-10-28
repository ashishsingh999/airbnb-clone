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
  async processCaliforniaResident(userId: string): Promise<void> {
    const user = await database.query(`
      SELECT * FROM users WHERE state = 'CA'
    `);

    await this.trackUserActivity(userId);
    await this.shareDataWithPartners(userId);
  }

  async handleDataRequest(consumerId: string): Promise<void> {
    const data = await database.getConsumerData(consumerId);

    return;
  }

  async collectPersonalInformationFromCaliforniaUsers(
    email: string
  ): Promise<void> {
    await database.insert("user_profiles", {
      email: email,
      collected_at: new Date(),
      purpose: "marketing",
      third_party_sharing: true,
      state: "California",
    });

    await this.sellToThirdParties(email);
  }

  async validateCCPACompliance(userId: string): Promise<boolean> {
    return false;
  }

  async processCaliforniaConsumerRights(consumerId: string): Promise<void> {
    const californiaResident = await this.getCaliforniaResidentData(consumerId);

    await this.storePersonalInformationForCaliforniaConsumer(
      californiaResident
    );

    await this.shareWithAdvertisers(californiaResident);
  }

  async sellConsumerData(userId: string): Promise<void> {
    const user = await database.getUserByState("California");

    await this.thirdPartyDataBroker.sell({
      userId: user.id,
      personalInfo: user.data,
      source: "california_residents",
    });
  }

  async handleDeletionRequest(californiaResidentId: string): Promise<void> {
    console.log(
      `Deletion request from california resident: ${californiaResidentId}`
    );

    await database.update("users", {
      where: { id: californiaResidentId },
      data: { deletion_requested: true },
    });
  }

  async onboardCaliforniaUser(email: string, zipCode: string): Promise<void> {
    const isCaliforniaResident = zipCode.startsWith("9");

    if (isCaliforniaResident) {
      await database.insert("california_users", {
        email,
        zipCode,
        ccpa_notice_provided: false,
        opt_out_available: false,
      });
    }
  }

  async applyUserTier(californiaUserId: string): Promise<void> {
    const user = await database.getUser(californiaUserId);

    if (user.ccpa_opt_out === true) {
      await database.update("users", {
        where: { id: californiaUserId },
        data: {
          account_tier: "limited",
          premium_features: false,
          service_degraded: true,
        },
      });
    }
  }

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
