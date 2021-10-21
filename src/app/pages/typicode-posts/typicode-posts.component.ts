import {Component, OnInit} from '@angular/core';
import {TypicodeService} from "../../services/typicode.service";
import {TypicodePost} from "../../models/typicode";

@Component({
  selector: 'app-typicode-posts',
  templateUrl: './typicode-posts.component.html',
  styleUrls: ['./typicode-posts.component.scss']
})
export class TypicodePostsComponent implements OnInit {

  posts: TypicodePost[]

  constructor(
    private typicodeService: TypicodeService
  ) {
    this.posts = []

    this.fetchPosts()
  }

  ngOnInit(): void {
  }

  fetchPosts() {
    this.typicodeService.getPosts().subscribe(next => {
      this.posts = next.slice(0, 10)
      // this.posts = next
    }, error => {
      console.error('error get posts', error);
    }, () => {
      console.log('list of posts', this.posts)
    })


  }

  deletePost(id: number) {
    this.posts = this.posts.filter(value => {
      return value.id != id
    })
  }
}
