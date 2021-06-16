import { IContractCredentials } from '../../../interfaces/IContractCredentials';
import { IPayloadLTLRates } from '../../../interfaces/IPayloadLTLRates';
import { IResponseLTLRates } from '../../../interfaces/IResponseLTLRates';

export default abstract class IntegrationServicesHandler {
  constructor(carrierCredentials: IContractCredentials) {
    //Define properly interface for this constructor parameter
  }

  abstract getLTLRates(
    payloadLTLRates: IPayloadLTLRates
  ): Promise<IResponseLTLRates>;

  abstract getVolumeRates(payloadVolumeRates: any): Promise<any>;

  abstract makePickupRequest(payloadPickupRequest: any): Promise<any>;

  abstract getTracking(payloadGetTracking: any): Promise<any>;

  abstract getDocuments(payloadGetDocuments: any): Promise<any>;
}
