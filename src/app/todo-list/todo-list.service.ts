import {Injectable} from '@angular/core';
import {ItemModel} from './item.model';

@Injectable()
export class TodoListService {
  public readonly active = 0;
  public readonly completed = 1;

  private items: ItemModel [] = [];

  constructor() {
  }

  public getAll() {
    return this.items;
  }

  add(item: ItemModel) {
    this.items.push(item);
  }

  delete(item){
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }

  update(item: ItemModel) {
    let itemIndex = this.items.indexOf(item);
    if (itemIndex > -1) {
      this.items[itemIndex].name = item.name;
      this.items[itemIndex].status = +item.status;
    }
  }
}
