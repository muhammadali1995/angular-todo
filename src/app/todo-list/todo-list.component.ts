import {Component, OnInit} from '@angular/core';
import {TodoListService} from './todo-list.service';
import {ItemModel} from './item.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  activeTab = 'all';
  public globalItems: ItemModel [] = [];
  public items = this.globalItems;

  constructor(private todoListService: TodoListService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.globalItems = this.todoListService.getAll();
    this.items = this.globalItems;
  }

  filter(value: string) {
    this.activeTab = value;
    switch (value) {
      case 'active':
        this.items = this.globalItems.filter(item => item.status == this.todoListService.active);
        break;
      case 'completed':
        this.items = this.globalItems.filter(item => item.status == this.todoListService.completed);
        break;
      default:
        this.items = this.globalItems;
        break;
    }

  }

  update(item: ItemModel) {
    let index = this.items.indexOf(item);
    if ((this.activeTab === 'active' && !item.status) || (this.activeTab === 'completed' && item.status)) {
      this.items.splice(index, 1);
    }
    this.todoListService.update(item);
  }

  delete(item: ItemModel){
    if (this.activeTab != 'all') {
      let index = this.items.indexOf(item);
      this.items.splice(index, 1);
    }
    this.todoListService.delete(item);
  }

  add(name: string) {
    let item = new ItemModel(
      Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
      name,
      this.todoListService.active
    );

    if (this.activeTab === 'active') {
      this.items.push(item);
    }

    this.todoListService.add(item);

  }
}

