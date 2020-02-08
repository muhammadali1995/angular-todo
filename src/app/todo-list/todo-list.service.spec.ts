import {TodoListService} from './todo-list.service';
import {ItemModel} from './item.model';
import {isBoolean, isNumber} from 'util';

describe('ValueService', () => {
  let service: TodoListService;
  beforeEach(() => { service = new TodoListService(); });

  it('#getAll should return return array', () => {
    expect(service.getAll()).toEqual([]);
  });

  it('#delete should return deleted item index of type number', () => {
    const item = new ItemModel('1223', 'name', 1);
    service.add(item);
    expect(service.delete(item)).toEqual(0);
  });

  it('#update should return true if updated', () => {
    const item = new ItemModel('1223', 'name', 1);
    expect(service.update(item)).toEqual(true);
  });
});
