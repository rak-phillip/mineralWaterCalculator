export class mineralWater {
  id: number;
  name: string;
  ca: number;
  mg: number;
  na: number;
  k: number;
  hco3: number;
  so4: number;
  cl: number;
  no3: number;
  co2: number;
  pH: number;
  TDS: number;
  comment: string;
  url: string;

  private TDSArr = [this.ca, this.mg, this.na, this.k, this.hco3, this.so4, this.cl, this.no3];
  TDSCalculated = () => this.TDSArr.reduce((i, j) => i + j);
  TDSDiff = () => Math.abs(this.TDS - this.TDSCalculated());
  caByMg = () => this.ca / this.mg;
  caByNa = () => this.ca / this.na;
  positiveCharge = () => (2 * (this.ca / 40.078))
    + (2 * (this.mg / 24.305))
    + (this.na / 22.99)
    + (this.k / 39.098);
  negativeCharge: number;
  chargeDiff: number;
}


