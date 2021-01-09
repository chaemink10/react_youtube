class Youtube {
  constructor(keys) {
    this.requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    this.key = keys;
  }

  mostPopular() {
    return fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
      this.requestOptions
    ).then((response) => response.json());
  }

  search(query) {
    return fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${this.key}`,
      this.requestOptions
    ).then((response) => response.json());
  }

  home() {
    return fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
      this.requestOptions
    ).then((response) => response.json());
  }
}

export default Youtube;
