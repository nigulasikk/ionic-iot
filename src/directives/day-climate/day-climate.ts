import { Directive } from '@angular/core';

/**
 * Generated class for the DayClimateDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[day-climate]' // Attribute selector
})
export class DayClimateDirective {

  constructor() {
    console.log('Hello DayClimateDirective Directive');
  }

}
