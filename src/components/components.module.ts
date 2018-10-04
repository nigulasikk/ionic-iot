import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer';
import { DayColumnComponent } from './day-column/day-column';
@NgModule({
	declarations: [FooterComponent,
    DayColumnComponent],
	imports: [],
	exports: [FooterComponent,
    DayColumnComponent]
})
export class ComponentsModule {}
