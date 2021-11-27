import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardViewComponent } from './components/card/card-view/card-view.component';
import { TrackerViewComponent } from './components/initiative-tracker/tracker-view/tracker-view.component';
import { MonsterFormComponent } from './components/monster-form/monster-form.component';
import { CrTypeComponent } from './components/monster-form/cr-type/cr-type.component';
import { SizeTypeComponent } from './components/monster-form/size-type/size-type.component';
import { AlignmentTypeComponent } from './components/monster-form/alignment-type/alignment-type.component';
import { AbilitiesTypeComponent } from './components/monster-form/abilities-type/abilities-type.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SkillsTypeComponent } from './components/monster-form/skills-type/skills-type.component';
import { SensesTypeComponent } from './components/monster-form/senses-type/senses-type.component';
import { VulnerabilitiesTypeComponent } from './components/monster-form/vulnerabilities-type/vulnerabilities-type.component';
import { ResistancesTypeComponent } from './components/monster-form/resistances-type/resistances-type.component';
import { ImmunitiesTypeComponent } from './components/monster-form/immunities-type/immunities-type.component';
import { ActionTextTypeComponent } from './components/monster-form/action-text-type/action-text-type.component';
import { GeneratorComponent } from './components/generator/generator.component';
import { LibraryComponent } from './components/library/library.component';

@NgModule({
    declarations: [
        AppComponent,
        CardViewComponent,
        TrackerViewComponent,
        MonsterFormComponent,
        CrTypeComponent,
        SizeTypeComponent,
        AlignmentTypeComponent,
        AbilitiesTypeComponent,
        SkillsTypeComponent,
        SensesTypeComponent,
        VulnerabilitiesTypeComponent,
        ResistancesTypeComponent,
        ImmunitiesTypeComponent,
        ActionTextTypeComponent,
        GeneratorComponent,
        LibraryComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatTabsModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatCheckboxModule,
        MatMenuModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
