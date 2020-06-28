import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  apikey = 'AIzaSyApuk26qtOBpHAQW8nUnP-c-6UVk56b1Z4';

  constructor(
    public http: HttpClient,
  ) { }

  getListOfVideos(nombre?: string) {
    if (nombre !== '' && nombre != null) {
      // tslint:disable-next-line: max-line-length
      const url = 'https://www.googleapis.com/youtube/v3/search?maxResults=6&part=snippet&key=' + this.apikey + '&q=' + nombre;
      console.log('Peticion: ', url);
      return this.http.get(url);
    } else {
      const url = 'https://www.googleapis.com/youtube/v3/videos?chart=mostPopular&maxResults=6&part=snippet&key=' + this.apikey;
      console.log('Peticion: ', url);
      return this.http.get(url);
    }
  }
}
