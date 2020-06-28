import { Component, OnInit } from '@angular/core';
import { YoutubeService } from 'src/app/services/youtube.service';
import { Video } from 'src/app/models/video.dto';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchView = false;
  isMobileResolution: boolean;
  urlActual: any;
  nombreActual: string;
  descripcionActual: string;
  videos: Video[] = [];
  constructor(
    private sanitizer: DomSanitizer,
    private youtubeService: YoutubeService,
  ) {
  }

  ngOnInit() {
    this.youtubeService.getListOfVideos().subscribe(data => {
      let resp;
      console.log('videos: ', data);
      resp = data;
      resp.items.forEach((video: Video) => {
        const myurl = 'https://www.youtube.com/embed/' + video.id;
        this.videos.push({
          etag: video.etag,
          id: video.id,
          kind: video.kind,
          url: myurl,
          snippet: video.snippet
        });
      });
      console.log('videos: ', this.videos);
      this.urlActual = this.mySecureVideo(0);
      this.nombreActual = this.videos[0].snippet.title;
      this.descripcionActual = this.videos[0].snippet.description;
    });

    if (window.innerWidth < 768) {
      this.isMobileResolution = true;
    } else {
      this.isMobileResolution = false;
    }
  }

  mySecureVideo(index: number) {
    console.log('secure');
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.videos[index].url);
  }

  toggleVideo(indice: number) {
    console.log('toggle video');
    this.nombreActual = this.videos[indice].snippet.title;
    this.descripcionActual = this.videos[indice].snippet.description;
    this.urlActual = this.mySecureVideo(indice);
  }

  toggleSearch() {
    console.log('toggle search');
    this.searchView = !this.searchView;
  }
}
