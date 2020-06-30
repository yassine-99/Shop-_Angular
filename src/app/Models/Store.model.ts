import {Currency} from './Currency.model';
import {Country} from './Country.model';
import {Website} from './Website.model';
import {Catalog} from './Catalog.model';
import {Warehouse} from './Warehous.model';

export class Store{
  id: number;
  name: string;
  currency: Currency;
  country: Country;
  website: Website;
  catalog: Catalog;
  warehouse: Warehouse;
}
