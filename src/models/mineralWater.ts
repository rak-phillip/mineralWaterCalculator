export class mineralWater {
  id: number;
  name: string;
  calcium: number;
  magnesium: number;
  sodium: number;
  potassium: number;
  bicarbonate: number;
  sulfate: number;
  chloride: number;
  nitrate: number;
  co2: number;
  pH: number;
  TDS: number;
  comment: string;
  url: string;

  private TDSArr = [
    this.calcium
    , this.magnesium
    , this.sodium
    , this.potassium
    , this.bicarbonate
    , this.sulfate
    , this.chloride
    , this.nitrate
  ];

  /**
   * @function TDSCalculated()
   * @description A calculation of Total Dissolved Solids. Sums items in Total Dissolved Solids array.
   * @returns {number}
   * @constructor
   */
  TDSCalculated = () => this.TDSArr.reduce((i, j) => i + j);

  /**
   * @function TDSDiff()
   * @description Gets the difference between Total Dissolved Solids and Calculated value.
   * @returns {number}
   * @constructor
   */
  TDSDiff = () => Math.abs(this.TDS - this.TDSCalculated());

  /**
   * @function caByMg()
   * @description The ratio of Calcium to Magnesium
   * @returns {number}
   */
  caByMg = () => this.calcium / this.magnesium;

  /**
   * @function caByNa()
   * @description The ration of Calcium to Sodium
   * @returns {number}
   */
  caByNa = () => this.calcium / this.sodium;


  /**
   * @positiveCharge()
   * @description Calculates the positive charge for solution
   * @returns {number}
   */
  positiveCharge = () => (2 * (this.calcium / 40.078))
    + (2 * (this.magnesium / 24.305))
    + (this.sodium / 22.99)
    + (this.potassium / 39.098);

  /**
   * @description Calculates the negative charge for solution
   */
  negativeCharge: number;

  /**
   * @description Calculates the difference between charges for solution
   */
  chargeDiff: number;
}


