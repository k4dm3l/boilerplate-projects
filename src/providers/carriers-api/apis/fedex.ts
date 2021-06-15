import IntegrationServicesHandler from './integrationServiceHandler';

export default class Fedex extends IntegrationServicesHandler {
  constructor(carrierCredentials: any) {
    super(carrierCredentials);
    //Define properly interface for this constructor parameter
  }

  async getLTLRates(payloadLTLRates: any): Promise<any> {}
  async getVolumeRates(payloadVolumeRates: any): Promise<any> {}
  async makePickupRequest(payloadPickupRequest: any): Promise<any> {}
  async getTracking(payloadGetTracking: any): Promise<any> {}
  async getDocuments(payloadGetDocuments: any): Promise<any> {}
}
