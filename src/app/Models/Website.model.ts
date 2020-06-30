import {Store} from './Store.model';
import {Catalog} from './Catalog.model';

export class Website{
  id: number;
  name: string;
  store: Store;
  catelog: Catalog;
}
