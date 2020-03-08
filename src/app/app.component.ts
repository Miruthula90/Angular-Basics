import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-hello-world2';
  username:string="Miruthula";
  IsnotEmpty:boolean=true;
  Isclicked=true;
  Iscount:number=0;
  Clickbtnarr:Array<number>=[];


  togglepara()
  {
    this.Iscount+=1;
    this.Clickbtnarr.push(this.Iscount);

    this.Isclicked=!this.Isclicked;
  }
setusernameonclick()
{
  this.username="";
}
checkusername()

{
  if (this.username=="")
  {
    this.IsnotEmpty=true;
    
  }
  else
  {
    this.IsnotEmpty=false;
  }
  return this.IsnotEmpty;
}}
