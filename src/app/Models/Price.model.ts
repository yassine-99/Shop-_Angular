import {Catalog} from './Catalog.model';
import {Currency} from './Currency.model';
import {Product} from './Product.model';


export class Price{
  id: string;
  value: string;
  catalog: Catalog;
  currency: Currency;
  product: Product;
}
