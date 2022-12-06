document.addEventListener(
  "touchmove",
  function (e) {
    e.preventDefault();
    console.log("test", e);
  },
  { passive: false }
);

//https://developers.google.com/youtube/iframe_api_reference#Loading_a_Video_Player
//The IFrame player API lets you embed a YouTube video player on your website and control the player using JavaScript.
//Any web page that uses the IFrame API must also implement the following JavaScript function:
//onYouTubeIframeAPIReady – The API will call this function when the page has finished downloading the JavaScript for the player API,
//which enables you to then use the API on your page. Thus, this function might create the player objects that you want to display when the page loads.

// 2. This code loads the IFrame Player API code asynchronously.
const tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player) after the API code downloads.
// After the API's JavaScript code loads, the API will call the onYouTubeIframeAPIReady function,
//at which point you can construct a YT.Player object to insert a video player on your page.

let player;
function onYouTubeIframeAPIReady() {
  //The constructor for the video player specifies the following parameters: The first parameter specifies either the DOM element or the id of the HTML element
  //where the API will insert the <iframe> tag containing the player. By default, an <iframe> displays as an inline-block element. The second parameter is an object
  //that specifies player options.

  player = new YT.Player("ytPlayer", {
    videoId: "vwrvbjBF7YQ",
    playerVars: {
      loop: 1,
      autoplay: 1,
      mute: 1,
      playlist: "vwrvbjBF7YQ",
      rel: 0, //this parameter indicates whether the player should show related videos when playback of the initial video ends. If the parameter's value is set to 1, which is the default value, then the player does show related videos. If the parameter's value is set to 0, then the player does not show related videos. After the change, you will not be able to disable related videos. Instead, if the rel parameter is set to 0, related videos will come from the same channel as the video that was just played.
      showinfo: 0,
      modestbranding: 1, //This parameter lets you use a YouTube player that does not show a YouTube logo. Set the parameter value to 1 to prevent the YouTube logo from displaying in the control bar.
      playsinline: 1, //This parameter controls whether videos play inline or fullscreen on iOS. Valid values are: 0: Results in fullscreen playback. This is currently the default value, though the default is subject to change. 1: Results in inline playback for mobile browsers and for WebViews created with the allowsInlineMediaPlayback property set to YES.
      controls: 0,
      color: "white",
    },
    events: {
      onReady: onPlayerReady,
    },
  });
}

// 4. The API will call this function when the video player is ready.
const onPlayerReady = (event) => {
  event.target.playVideo();
  event.target.mute();
};
