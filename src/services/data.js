import { facebook, google } from "../firebase/firebaseConfi";

export const loginProvider = [
    {
      name: "google",
      image: "https://play-lh.googleusercontent.com/aFWiT2lTa9CYBpyPjfgfNHd0r5puwKRGj2rHpdPTNrz2N9LXgN_MbLjePd1OTc0E8Rl1",
      provider: google,
    },
    {
      name: "facebook",
      image: "https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-3-1.png",
      provider: facebook,
    },
  ];


  export const category = [
    {
      label: "fast food",
      value: 1,
    },
    {
      label: "pizza",
      value: 2,
    },
    {
      label: "cafe",
      value: 3,
    }
  ];