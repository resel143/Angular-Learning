import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

interface AppState{
  message: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tap_reducer_ngrx';

  msg: Observable<string>;

  constructor(private store: Store<AppState>){
    this.msg = this.store.select('message');
  }

   hindi(){
    return this.store.dispatch({type:'Hindi'});
  }
  english(){
    return this.store.dispatch({type:'English'});
  }


}
