import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TestComponentComponent } from './test-component/test-component.component';

const routes: Routes = [{ path: '', component: HomeComponent},
                        { path: 'game/add', component: GameComponent},
                        { path: 'game/:name', component: TestComponentComponent },
                        { path: '**', component: NotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
