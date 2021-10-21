import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ArrayLearningComponent} from "./pages/array/array-learning.component";
import {TypicodePostsComponent} from "./pages/typicode-posts/typicode-posts.component";
import {HashingComponent} from "./pages/hashing/hashing.component";
import {FormComponent} from "./pages/form/form.component";

const routes: Routes = [
  {
    path: 'array',
    component: ArrayLearningComponent
  },
  {
    path: 'typicode-posts',
    component: TypicodePostsComponent
  },
  {
    path: 'hashing',
    component: HashingComponent
  }, {
    path: 'form',
    component: FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
