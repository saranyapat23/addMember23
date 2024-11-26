import { Router, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { DataapiService } from '../dataapi.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {



  //ประกาซศตัวแปรเพื่อรับค่าจากหน้า home.page.html
  dataMember: any = {};
  txtidstu: any;
  txtname: any;
  txtnname: any;
  txtage: any;
  txtphone: any;
  txtaddress: any;
  txtstatus: any;

  //ตัวแปรส่งไปยัง api
  id_stu: any;
  name: any;
  nname: any;
  age: any;
  phone: any;
  address: any;
  status: any;

  constructor(
    public dataapi: DataapiService,
    private route:Router , private navCtrl: NavController
     ) {}

     GoToNext() {
      this.navCtrl.navigateForward('../../app/show'); // ระบุเส้นทางไปยังหน้า DetailPage
    }

  addmember() {
    let data = {
      id_stu: this.txtidstu,
      name: this.txtname,
      nname: this.txtnname,
      age: this.txtage,
      phone: this.txtphone,
      address: this.txtaddress,
      status: this.txtstatus,
    }
    this.dataapi.addMember(data).subscribe({
      next: (res: any) => {
        console.log("ข้อมูลถูกเพิ่ม" ,res);
      },
      error: (error: any) => {
        console.log("ข้อมูลไม่ถูกเพิ่ม", error);
      }
    });

    this.clearForm();
  }

  //ฟังก์ชันสำหรับล้างข้อมูล
  clearForm(){
    this.txtidstu = '';
    this.txtname = '';
    this.txtnname = '';
    this.txtage = '';
    this.txtphone = '';
    this.txtaddress = '';
    this.txtstatus = '';
  }
showdata(){
    this.route.navigate(['/show']);
  }

}
// //ประกาซศตัวแปรเพื่อรับค่าจากหน้า home.page.html
// dataMember:any={};
// txtidstu:string|undefined;
// txtname:string|undefined;
// txtnname:string|undefined;
// txtage:string|undefined;
// txtphone:string|undefined;
// txtaddress:string|undefined;
// txtstatus:string|undefined;

// //ตัวแปรส่งไปยัง api
// postidstu:any;
// postname:any;
// postnname:any;
// postage:any;
// postphone:any;
// postaddress:any;
// poststatus:any;

// constructor(
//   public dataapi: DataapiService,
//   private route:Router
// ) {}

// //ฟังก์ชันสำหรับการเพิ่มข้อมูล
// addmember(){
//   console.log("ค่าที่กรอก",this.txtidstu);
// }
