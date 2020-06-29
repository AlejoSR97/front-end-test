import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
/// Service that make requirements to youtube API and returns the response
export class YoutubeService {
  /// Project api key to request data from youtube
  apikey = 'AIzaSyBhJlU1xqW71z7h_P-6k67IsihTRM714qU';
  /// Endpoint url
  endpointUrl = 'https://www.googleapis.com/youtube/v3/';
  constructor(
    public http: HttpClient,
  ) { }

  /// Method that calls youtube API to get list of
  /// videos that will be shown on the page
  /// name: optional argument to search videos by its names
  getListOfVideos(name?: string) {
    /// Validation if name has some value then make request with that value
    /// otherwise the method will requeste most popular videos
    if (name !== '' && name != null) {
      return this.http.get(this.endpointUrl + 'search?maxResults=6&part=snippet&key=' + this.apikey + '&q=' + name);
    } else {
      return this.http.get(this.endpointUrl + 'videos?chart=mostPopular&maxResults=6&part=snippet&key=' + this.apikey);
    }
  }
}
