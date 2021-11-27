import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneratorComponent } from 'src/app/components/generator/generator.component';
import { LibraryComponent } from 'src/app/components/library/library.component';

const routes: Routes = [
    {
        path: 'generator/:id',
        component: GeneratorComponent
    },
    {
        path: 'generator',
        component: GeneratorComponent
    },
    {
        path: 'library',
        component: LibraryComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
