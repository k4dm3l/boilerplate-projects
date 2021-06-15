import { IKeyMapping } from '../../Interfaces/IKeyMapping';

// - CarrierIntegrations
import Fedex from './apis/fedex';

export const integratedService: IKeyMapping = {
  fedex: Fedex,
};
