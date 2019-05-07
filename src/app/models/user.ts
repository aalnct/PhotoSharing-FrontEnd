import {Photo} from './photo';

export class User {
  public userId:User;
  public firstName:string;
  public lastName:string;
  public password:string;
  public created:Date;
  public photoList:Photo[];
  public linkedPhotoList: Photo[];
}
