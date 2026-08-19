import { Routes } from '@angular/router';
import { TemplatesComponent } from './topics/Components/data/templates/templates.component';
import { ViewChildComponent } from './topics/Components/Decorator/view-child/view-child/view-child.component';
import { ParentComponent } from './topics/Components/Input & output/parent/parent/parent.component';
import { TestServesComponent } from './topics/Components/test-serves/test-serves/test-serves.component';
import { FormComponent } from './topics/Components/Reactive Forms/form/form/form.component';

export const routes: Routes = [
  { path: 'data', component: TemplatesComponent, title: 'Data' },
  { path: '', redirectTo: 'data', pathMatch: 'full' },
  { path: 'view', component: ViewChildComponent, title: 'view' },
  { path: 'parent', component: ParentComponent, title: 'parent' },
  { path: 'serves', component: TestServesComponent, title: 'serves' },
  { path: 'Form', component: FormComponent, title: 'Form' },

  { path: '**', component: TemplatesComponent, title: 'Data' },
];
