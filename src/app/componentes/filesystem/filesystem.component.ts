import {Component, inject} from '@angular/core';
import {MediaService} from "../../servicios/media.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-filesystem',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './filesystem.component.html',
  styleUrl: './filesystem.component.css'
})
export class FilesystemComponent {

  //mediaservice:MediaService= inject(MediaService);
  urlImagen:string='';
  constructor(private  mediaService:MediaService) {
  }

  upload(event:any){
    const file = event.target.files[0];
    if (file){
      const formData:FormData = new FormData();
      formData.append('file',file);
      this.mediaService.uploadFile(formData).subscribe(res => {
          console.log('respuesta', res.url)
        this.urlImagen=res.url;

        }
      );



    }
  }

}
