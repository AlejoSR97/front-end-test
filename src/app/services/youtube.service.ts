import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  apikey = 'AIzaSyDCBQDvLk4teLKuy5YJJVDTGeb-BaOrcnQ';

  constructor(
    public http: HttpClient,
  ) { }

  getListOfVideos() {
    const url = 'https://www.googleapis.com/youtube/v3/videos?chart=mostPopular&maxResults=6&part=snippet&key=' + this.apikey;
    return this.http.get(url);
  }
}
