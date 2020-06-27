import { PostService } from './../../services/post.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styles: [
  ]
})
export class PostsComponent implements OnInit {
  @Input()rowPosts:number;
  posts:any[];
  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(){
  this.postService.getAll(this.rowPosts).subscribe(
    response=> this.posts=(JSON.parse(JSON.stringify(response)).data)
    )

  }

}
