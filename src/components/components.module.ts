import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer';
import { DayColumnComponent } from './day-column/day-column';
import { ConfortChartComponent } from './confort-chart/confort-chart';
import { ComfortWetComponent } from './comfort-wet/comfort-wet';
@NgModule({
	declarations: [FooterComponent,
    DayColumnComponent,
    ConfortChartComponent,
    ComfortWetComponent],
	imports: [],
	exports: [FooterComponent,
    DayColumnComponent,
    ConfortChartComponent,
    ComfortWetComponent]
})
export class ComponentsModule {}
