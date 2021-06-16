export interface IResponseLTLRates {
  error: boolean;
  message: string;
  data: null | RateData;
}

interface RateData {
  carrierPrice: number;
}
