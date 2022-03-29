import { Pipe, PipeTransform } from '@angular/core';
import {UserModel} from "../Models/User.model";

@Pipe({
  name: 'userFilter'
})
export class UserFilterPipe implements PipeTransform {

  transform(items: UserModel[], searchText: string): UserModel[] {
    if(searchText != ""){
      return items.filter(res => {
        return res.lname.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase().includes(searchText.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase()) || res.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase().includes(searchText.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase())
      })
    }else{
      return items;
    }
  }

}
