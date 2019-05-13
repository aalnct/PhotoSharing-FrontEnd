import { Injectable } from '@angular/core';

@Injectable()
export class UploadPhotoService {

  filesToUploads : Array<File>;


  constructor() {
    this.filesToUploads = [];
  }

  upload(){
    this.makeFileRequest("http://localhost:8080/rest/photo/upload" ,  [] ,  this.filesToUploads).then((result) =>{
      console.log(result);
    }, (error) => {
      console.log(error);
    });
  }

  fileChangeEvent(fileInput : any){
    this.filesToUploads = <Array<File>>fileInput.target.files;
  }

  private makeFileRequest(url : string ,  params : Array<string> , files : Array<File>) {
    return new Promise((resole,reject) => {
      var formDate:any = new FormData();
      var xhr = new XMLHttpRequest();
      for(var i=0; i < files.length; i++){
        formDate.append("uploads[]" , files[i], files[i].name);
      }

      xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
          if(xhr.status == 200){
            alert("Upload Successful");
          }else{
            reject(xhr.response);
          }
        }
      }

      xhr.open("POST", url, true);
      xhr.setRequestHeader("Authorization" ,'Bearer ' + localStorage.getItem('token'));
      xhr.send(formDate);

    })
  }
}
