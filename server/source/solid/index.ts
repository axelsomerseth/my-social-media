import { URL } from "url";
import { SocialMedia, Facebook, Twitter } from "./socialMedia";

// ! Open/Closed Principle.

// * ########## Undesired code. ##########

const myTruthSocial = {
  name: "Truth Social",
  url: "https://www.facebook.com/axelsomerseth",
  icon: "https://truthsocial.com/instance/images/truth-logo-dark.svg",
  embedded: `<a href="${"https://truthsocial.com/"}">${"Truth Social"}</>`,
};
const myFacebook = {
  name: "Facebook Profile",
  url: "https://www.facebook.com/axelsomerseth",
  icon: "https://www.facebook.com/images/fb_icon_325x325.png",
  profileWidget: `<div class="fb-page" data-href="https://www.facebook.com/facebook" data-tabs="timeline" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/facebook" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/facebook">Facebook</a></blockquote></div>`,
};
const myTwitter = {
  name: "Coolest Tweet",
  url: "https://twitter.com/AxelSomerseth",
  icon: "https://about.twitter.com/content/dam/about-twitter/en/brand-toolkit/brand-download-img-1.jpg.twimg.1920.jpg",
  embeddedTweet: `<blockquote class="twitter-tweet" data-theme="dark"><p lang="en" dir="ltr">ChatGPT knows ball <a href="https://t.co/OiS6yv3JCZ">pic.twitter.com/OiS6yv3JCZ</a></p>&mdash; Axel Somerseth🗽 (@AxelSomerseth) <a href="https://twitter.com/AxelSomerseth/status/1617717763346403330?ref_src=twsrc%5Etfw">January 24, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`,
};

function printEmbeddedWrong(obj: any) {
  if (obj.hasOwnProperty("embedded")) {
    console.log(`${obj.name}: `, obj.embedded);
  } else if (obj.hasOwnProperty("profileWidget")) {
    console.log(`${obj.name}: `, obj.profileWidget);
  } else if (obj.hasOwnProperty("embeddedTweet")) {
    console.log(`${obj.name}: `, obj.embeddedTweet);
  }
}

printEmbeddedWrong(myTruthSocial);
printEmbeddedWrong(myFacebook);
printEmbeddedWrong(myTwitter);

// ---------------------------------------------------------------------

// * ########## Desired code. ##########

function printEmbedded(socialMedia: SocialMedia) {
  console.log(`${socialMedia.name}: `, socialMedia.getEmbedded(), "\n");
}

const newSocialMedia = new SocialMedia(
  "Truth Social",
  new URL("https://truthsocial.com/"),
  new URL("https://truthsocial.com/instance/images/truth-logo-dark.svg")
);
printEmbedded(newSocialMedia);

const newFacebookProfile = new Facebook(
  "Facebook Profile",
  new URL("https://www.facebook.com/axelsomerseth"),
  new URL("https://www.facebook.com/images/fb_icon_325x325.png"),
  `<div class="fb-page" data-href="https://www.facebook.com/facebook" data-tabs="timeline" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/facebook" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/facebook">Facebook</a></blockquote></div>`
);
printEmbedded(newFacebookProfile);

const newTwitter = new Twitter(
  "Coolest Tweet",
  new URL("https://twitter.com/AxelSomerseth"),
  new URL(
    "https://about.twitter.com/content/dam/about-twitter/en/brand-toolkit/brand-download-img-1.jpg.twimg.1920.jpg"
  ),
  `<blockquote class="twitter-tweet" data-theme="dark"><p lang="en" dir="ltr">ChatGPT knows ball <a href="https://t.co/OiS6yv3JCZ">pic.twitter.com/OiS6yv3JCZ</a></p>&mdash; Axel Somerseth🗽 (@AxelSomerseth) <a href="https://twitter.com/AxelSomerseth/status/1617717763346403330?ref_src=twsrc%5Etfw">January 24, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`
);
printEmbedded(newTwitter);
