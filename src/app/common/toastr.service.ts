import { Injectable } from "@angular/core";

declare let toastr:any;
@Injectable()
export class ToastrService{
  success(){
    toastr.success("","");
  }
}