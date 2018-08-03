import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: string[], filterChar:string): any {
    let filterd =[];

   for(let i=0; i<value.length; i++){
    if(value[i].charAt(3) === filterChar)
    filterd.push(value[i])
}

    return filterd;
  }

}
