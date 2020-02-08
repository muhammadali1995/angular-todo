import {Injectable} from '@angular/core';
import {ItemModel} from './item.model';

@Injectable()
export class TodoListService {
  public readonly ACTIVE = 0;
  public readonly COMPLETED = 1;

  private items: ItemModel [] = [];

  constructor() {
  }

  public getAll() {
    return this.items;
  }

  add(item: ItemModel) {
    this.items.push(item);
  }

  delete(item) {
    const index = this.items.indexOf(item);
    this.items.splice(index, 1);
    return index;
  }

  update(item: ItemModel) {
    const itemIndex = this.items.indexOf(item);
    if (itemIndex > -1) {
      this.items[itemIndex].name = item.name;
      this.items[itemIndex].status = +item.status;
    }
    return true;
  }
}
