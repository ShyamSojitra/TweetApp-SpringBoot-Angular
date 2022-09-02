import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class Tweets {
  constructor(public id: number, public loginId: string, public tweets: string, public date: Date) { }
}

export class Likes {
  constructor(public id: number, public likes: number) { }
}

export class Comments {
  constructor(public comment: string, public tweetId: number, public date: Date, public loginId: string) { }
}

@Injectable({
  providedIn: 'root'
})
export class TweetsDataService {

  constructor(private http: HttpClient) { }

  //url = "http://localhost:5000";
  url = "http://tweetservice-env.eba-fuas7s2w.ap-south-1.elasticbeanstalk.com";


  getAllTweets() {
    return this.http.get<Tweets[]>(this.url + "/tweets/all")

  }

  getTweet(id: number) {
    return this.http.get<Tweets>(this.url + `/tweet/${id}`)
  }

  postTweets(loginId: String, tweets: Tweets) {
    return this.http.post(this.url + `/tweets/${loginId}/add`, tweets);
  }

  getTweetsofUser(loginId: string) {
    return this.http.get<Tweets[]>(this.url + `/tweets/${loginId}`)
  }

  deleteTweet(id: number) {
    return this.http.delete(this.url + `/tweets/delete/${id}`)
  }

  updateTweet(id: number, tweet: Tweets) {
    return this.http.put(this.url + `/tweets/update/${id}`, tweet)
  }

  getLikes(id: number) {
    return this.http.get<Likes>(this.url + `/tweet/${id}/likes`)
  }
  updateLikes(id: number, likes: Likes, loginId: string) {
    return this.http.put(this.url + `/tweet/${id}/likesUpdate/${loginId}`, likes)
  }

  getAllLikes() {
    return this.http.get<Likes[]>(this.url + "/tweet/all/likes")
  }

  deleteLikes(id: number) {
    return this.http.delete(this.url + `/tweet/${id}/delete`)
  }

  getComments(tweetId: number) {
    return this.http.get<Comments[]>(this.url + `/comments/${tweetId}`)
  }

  postComment(tweetId: number, comment: Comments) {
    return this.http.post(this.url + `/tweets/reply/${tweetId}`, comment)
  }

}
