import {Composition} from "./composition";

export class mineralWater {
  id: number;
  name: string;
  composition: Composition;
  co2: number;
  pH: number;
  TDS: number;
  comment: string;
  url: string;

  constructor(
    id
    , name
    , calcium
    , magnesium
    , sodium
    , potassium
    , bicarbonate
    , sulfate
    , chloride
    , nitrate
    , co2
    , pH
    , TDS
    , comment
    , url
  ) {
    this.id = id;
    this.name = name;
    this.composition.calcium = calcium;
    this.composition.magnesium = magnesium;
    this.composition.sodium = sodium;
    this.composition.potassium = potassium;
    this.composition.bicarbonate = bicarbonate;
    this.composition.sulfate = sulfate;
    this.composition.chloride = chloride;
    this.composition.nitrate = nitrate;
    this.co2 = co2;
    this.pH = pH;
    this.TDS = TDS;
    this.comment = comment;
    this.url = url;
  }

  private TDSArr = () => {
    return [
      this.composition.calcium
      , this.composition.magnesium
      , this.composition.sodium
      , this.composition.potassium
      , this.composition.bicarbonate
      , this.composition.sulfate
      , this.composition.chloride
      , this.composition.nitrate
    ];
  };

  /**
   * @function TDSCalculated()
   * @description A calculation of Total Dissolved Solids. Sums items in Total Dissolved Solids array.
   * @returns {number}
   * @constructor
   */
  TDSCalculated = ()  => this.TDSArr().reduce((i, j) => i + j);

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
  caByMg = () => this.composition.calcium / this.composition.magnesium;

  /**
   * @function caByNa()
   * @description The ration of Calcium to Sodium
   * @returns {number}
   */
  caByNa = () => this.composition.calcium / this.composition.sodium;


  /**
   * @positiveCharge()
   * @description Calculates the positive charge for solution
   * @returns {number}
   */
  positiveCharge = () => (2 * (this.composition.calcium / 40.078))
    + (2 * (this.composition.magnesium / 24.305))
    + (this.composition.sodium / 22.99)
    + (this.composition.potassium / 39.098);

  /**
   * @description Calculates the negative charge for solution
   */
  negativeCharge: number;

  /**
   * @description Calculates the difference between charges for solution
   */
  chargeDiff: number;
}
