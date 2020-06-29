import { Component, OnInit } from '@angular/core';
import { YoutubeService } from 'src/app/services/youtube.service';
import { Video } from 'src/app/models/video.dto';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
/// Home component; Shows UI of video player and videos list
export class HomeComponent implements OnInit {
  /// Triggers UI when resolution is under 768
  isMobileResolution: boolean;
  /// When on mobile resolution this is the video shown from the list
  currentSlide = 0;
  /// Triggers UI when to show search input
  searchView = false;
  /// Current main video url
  currentUrl: any;
  /// Current main video name
  currentName: string;
  /// Current main video description
  currentDescription: string;
  /// List of videos being shown
  videos: Video[] = [];
  /// Year that will be displayed at the footer
  currentYear: number;

  constructor(
    private sanitizer: DomSanitizer,
    private youtubeService: YoutubeService,
  ) {
  }

  ngOnInit() {
    /// Initial load for list of videos
    this.youtubeService.getListOfVideos().subscribe(data => {
      let resp;
      console.log('videos: ', data);
      resp = data;
      resp.items.forEach((video: Video) => {
        this.videos.push({
          etag: video.etag,
          id: video.id,
          kind: video.kind,
          url: 'https://www.youtube.com/embed/' + video.id,
          snippet: video.snippet
        });
      });
      console.log('videos: ', this.videos);
      this.currentUrl = this.mySecureVideo(0);
      this.currentName = this.videos[0].snippet.title;
      this.currentDescription = this.videos[0].snippet.description;
    });
    /// Gets current year
    this.currentYear = new Date().getFullYear();
    /// Validation for responsive resolution
    if (window.innerWidth < 768) {
      this.isMobileResolution = true;
    } else {
      this.isMobileResolution = false;
    }
  }

  /// Method to ensure url security
  mySecureVideo(index: number) {
    const url = this.sanitizer.bypassSecurityTrustResourceUrl(this.videos[index].url);
    console.log(url);
    return url;
  }

  /// Method to show previous slide
  prevSlide() {
    if (this.currentSlide === 0) {
      this.currentSlide = this.videos.length - 1;
    } else {
      this.currentSlide -= 1;
    }
  }

  /// Method to show next slide
  nextSlide() {
    if (this.currentSlide === this.videos.length - 1) {
      this.currentSlide = 0;
    } else {
      this.currentSlide += 1;
    }
  }

  /// Method to show only needed slide
  hideSlide(index: number) {
    return index === this.currentSlide ? false : true;
  }

  /// Method to toggle main video
  toggleVideo(indice: number) {
    this.currentName = this.videos[indice].snippet.title;
    this.currentDescription = this.videos[indice].snippet.description;
    this.currentUrl = this.mySecureVideo(indice);
  }

  /// Method to toggle search view
  toggleSearch() {
    this.searchView = !this.searchView;
  }

  /// Method to request videos from service and react to the response
  searchVideo(value?: string) {
    /// Empty list of videos
    this.videos = [];
    /// Make videos request
    this.youtubeService.getListOfVideos(value).subscribe(data => {
      let resp;
      resp = data;
      /// Store all videos received
      resp.items.forEach((video: Video) => {
        const myurl = 'https://www.youtube.com/embed/' + video.id.videoId;
        this.videos.push({
          etag: video.etag,
          id: video.id.videoId,
          kind: video.kind,
          url: myurl,
          snippet: video.snippet
        });
      });
      /// Change current variables according to data received
      this.currentUrl = this.mySecureVideo(0);
      this.currentName = this.videos[0].snippet.title;
      this.currentDescription = this.videos[0].snippet.description;
    });
  }
}
