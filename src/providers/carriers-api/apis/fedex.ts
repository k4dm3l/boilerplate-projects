import IntegrationServicesHandler from './integrationServiceHandler';
import { IContractCredentials } from '../../../interfaces/IContractCredentials';
import { IPayloadLTLRates } from '../../../interfaces/IPayloadLTLRates';
import { IResponseLTLRates } from '../../../interfaces/IResponseLTLRates';

export default class Fedex extends IntegrationServicesHandler {
  carrierCredentials: IContractCredentials = {};

  constructor(carrierCredentials: IContractCredentials) {
    super(carrierCredentials);
    this.carrierCredentials = carrierCredentials;
    //Define properly interface for this constructor parameter
  }

  // - Operation Functions

  /**
   *
   * @param payloadLTLRates
   */
  async getLTLRates(
    payloadLTLRates: IPayloadLTLRates
  ): Promise<IResponseLTLRates> {
    return {
      error: true,
      message: 'Not integrated yet',
      data: null,
    };
  }

  /**
   *
   * @param payloadVolumeRates
   */
  async getVolumeRates(payloadVolumeRates: any): Promise<any> {}

  /**
   *
   * @param payloadPickupRequest
   */
  async makePickupRequest(payloadPickupRequest: any): Promise<any> {}

  /**
   *
   * @param payloadGetTracking
   */
  async getTracking(payloadGetTracking: any): Promise<any> {}

  /**
   *
   * @param payloadGetDocuments
   */
  async getDocuments(payloadGetDocuments: any): Promise<any> {}

  // - Private Class Functions
  /**
   *
   * @param value
   * @returns
   */
  private createRandomNumber(value: any): Boolean {
    return false;
  }
}
