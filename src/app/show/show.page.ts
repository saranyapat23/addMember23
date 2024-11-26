import { Component, OnInit } from '@angular/core';
import { DataapiService } from '../dataapi.service';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})
export class ShowPage implements OnInit {
  member: any = [];//ประกาศค่าตัวแปรอาเรย์ เพื่อมารับค่า

  constructor(
    private http: HttpClient,
    public dataapi: DataapiService,
    private nav: NavController
  ) {
  this.loadDataMem();
  }

  ngOnInit() {
    this.loadDataMem();
  }

  loadDataMem() {
    this.dataapi.listMenber().subscribe({
      next: (res: any) => {
        console.log('Successfully');
        this.member = res;

      },
      error:(error: any) => {
        console.log('Error',error)
      }
    });
  }

  edit(datamem : any){
    this.dataapi.data_datailMen = datamem
    console.log(datamem)
    this.nav.navigateForward('/edit')
  }

  delMember(id : any){
    this.dataapi.delMember(id).subscribe({
      next:(res:any) => {
        console.log('ลบข้อมูลสำเร็จ');
        this.loadDataMem();
      },
      error: (error: any) => {
        console.log('ลบข้อมูลสำเร็จ',error);
      },
  });
  }

  GoBack(){
    this.nav.navigateBack('/home')
  }

}
