import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataapiService {
  //ประกาศตัวแปรแบบอาเรย์เพื่อรับค่าข้อมูล
  data_datailMen: any=[]; //ใช้งานคู่กับหน้าแสดงรายละเอียด

  constructor(
    public http:HttpClient
  ) { }

  //ฟังก์ชันการเพิ่มที่ส่งไปยัง API
  addMember(data:any){
    console.log("ค่ามาจากแอพ" , data);
    return this.http.post( 'http://localhost/classwork/week4/insert.php', data) ;
  }


//สร้างขึ้นมาเพื่อดึงข้อมูลมาจาก api
  listMenber(){
  return this.http.get('http://localhost/classwork/week4/list_member.php');
}

//ฟังค์ชั่นสำหรับแก้ไขข้อมููล
editMember(dataEdit: any){
  return this.http.put('http://localhost/classwork/week4/update.php',dataEdit);
}

delMember(id: any){
  return this.http.delete('http://localhost/classwork/week4/delete.php?id='+id);
 }
}
