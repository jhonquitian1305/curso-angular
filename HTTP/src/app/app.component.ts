import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PostsService } from './services/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  arrPosts: any[] = [];
  formulario: FormGroup;

  constructor(
    private postsService: PostsService
  ){
    this.formulario = new FormGroup({
      title: new FormControl(''),
      body: new FormControl(''),
      userId: new FormControl('')
    });
  }

  ngOnInit(){
    this.postsService.getAll()
      .then(posts => this.arrPosts = posts)
      .catch(error => console.log(error))
  }

  async onClick(postId: number){
    try {
      const post = await this.postsService.getById(postId);
      console.log(post);
    } catch (error) {
      console.log(error);
    }
  }

  onClickPost(){
    this.postsService.create({
      title: 'Nuevo Título',
      body: 'Este es el cuerpo del post',
      userId: 1
    }).then(response => console.log(response))
      .catch(error => console.log(error));
  }

  async onSubmit(){
    try {
      const response = await this.postsService.create(this.formulario.value);      
      console.log(response);
    } catch (error) {
      console.log(error)
    }
  }

  onClickUpdate(){
    this.postsService.update({
      id: 5,
      title: 'Nuevo Título',
      body: 'Nuevo Cuerpo para el post',
      userId: 3
    }).then(response => console.log(response))
      .catch(error => console.log(error));
  }

  async onClickDelete(){
    try {
      const response = await this.postsService.delete(5);
      console.log(response);      
    } catch (error) {
      console.log(error)
    }
  }

}
