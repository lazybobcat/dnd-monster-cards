import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneratorComponent } from 'src/app/components/generator/generator.component';
import { LibraryComponent } from 'src/app/components/library/library.component';
import { TrackerGeneratorComponent } from 'src/app/components/initiative-tracker/tracker-generator/tracker-generator.component';

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
        path: 'trackers',
        component: TrackerGeneratorComponent
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
