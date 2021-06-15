import { IContractCredentials } from '../../../Interfaces/IContractCredentials';

export default abstract class IntegrationServicesHandler {
  constructor(carrierCredentials: IContractCredentials) {
    //Define properly interface for this constructor parameter
  }

  abstract getLTLRates(payloadLTLRates: any): Promise<any>;
  abstract getVolumeRates(payloadVolumeRates: any): Promise<any>;
  abstract makePickupRequest(payloadPickupRequest: any): Promise<any>;
  abstract getTracking(payloadGetTracking: any): Promise<any>;
  abstract getDocuments(payloadGetDocuments: any): Promise<any>;
}
