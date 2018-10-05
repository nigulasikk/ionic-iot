import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer';
import { DayColumnComponent } from './day-column/day-column';
import { ConfortChartComponent } from './confort-chart/confort-chart';
@NgModule({
	declarations: [FooterComponent,
    DayColumnComponent,
    ConfortChartComponent],
	imports: [],
	exports: [FooterComponent,
    DayColumnComponent,
    ConfortChartComponent]
})
export class ComponentsModule {}
