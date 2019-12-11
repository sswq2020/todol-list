import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'; // 用于表单的双向绑定


import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { NavComponent } from './layout/nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';


// 装饰器@NgModule,用来装饰AppModule类
@NgModule({
  declarations: [ // declarations,用来声明组件,指令,pipe
    AppComponent,
    TodoComponent,
    NavComponent,
    CreateTodoComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] // 项目启动从AppComponent开始
})
export class AppModule { }
