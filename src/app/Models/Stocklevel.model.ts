import {Product} from './Product.model';
import {Warehouse} from './Warehous.model';

export class StockLevel{
  id: number;
  quantite: number;
  product: Product;
  warehouse: Warehouse;
}
