import { IKeyMapping } from '../../interfaces/IKeyMapping';

// - CarrierIntegrations
import Fedex from './apis/fedex';

export const integratedServices: IKeyMapping = {
  fedex: Fedex,
};
