import { Injectable } from '@angular/core';
import {HttpClient ,HttpResponse} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  item= {
    authorname:'',
    description:'',
    imageUrl:''}
  constructor( private http:HttpClient) { }
  server_address:string = '/api';
  getAuthor(id:any){
    return this.http.get(`${this.server_address}/authors/` +id);
  }
  getAuthors(){
    return this.http.get(`${this.server_address}/authors`);
  }

  newAuthor(item:any)
  {   
    return this.http.post(`${this.server_address}/authors/insert`,{"author":item})
    .subscribe(data =>{console.log(data)})
  }
  deleteAuthor(id:any)
  {

    return this.http.delete(`${this.server_address}/authors/remove/` +id)

  }
  editAuthor(author:any)
  {
    console.log('client update')
    return this.http.put(`${this.server_address}/authors/updateauthor`,author)
    .subscribe(data =>{console.log(data)})
  }
}

