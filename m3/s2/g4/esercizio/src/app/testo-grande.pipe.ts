import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testoGrande'
})
export class TestoGrandePipe implements PipeTransform {

  transform(value:string): string {
    return value.toUpperCase();
  }

}
