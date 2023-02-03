import { URL } from "url";

class SocialMedia {
  name: string;
  url: URL;
  icon: URL;

  constructor(name: string, url: URL, icon: URL) {
    this.name = name;
    this.url = url;
    this.icon = icon;
  }

  getEmbedded() {
    return `<a href="${this.url}">${this.name}</>`;
  }
}

class Facebook extends SocialMedia {
  profileWidget: string;
  constructor(name: string, url: URL, icon: URL, profileWidget: string) {
    super(name, url, icon);
    this.profileWidget = profileWidget;
  }

  getEmbedded() {
    return this.profileWidget;
  }
}

class Twitter extends SocialMedia {
  embeddedTweet: string;
  constructor(name: string, url: URL, icon: URL, embeddedTweet: string) {
    super(name, url, icon);
    this.embeddedTweet = embeddedTweet;
  }

  getEmbedded() {
    return this.embeddedTweet;
  }
}

export { SocialMedia, Facebook, Twitter };
