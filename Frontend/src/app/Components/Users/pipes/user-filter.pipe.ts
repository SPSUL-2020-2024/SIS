import { Pipe, PipeTransform } from '@angular/core';
import {UserModel} from "../Models/User.model";

@Pipe({
  name: 'userFilter'
})
export class UserFilterPipe implements PipeTransform {

  transform(items: UserModel[], searchText:string, center:number): UserModel[] {
    if(searchText != ""){
      return items.filter(res => {
        searchText = searchText.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase();
        let lname:string = res.lname.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase()
        let fname:string = res.lname.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase()
        if(center === 0){
          return lname.includes(searchText) || fname.includes(searchText);

        }else{
          return (lname.includes(searchText) || fname.includes(searchText)) && (res.centerID == center || res.centerID == 3);
        }

      })
    }else{
      return items.filter(res => {
        return res.centerID === center || res.centerID === 3;
      });
    }
  }

}
