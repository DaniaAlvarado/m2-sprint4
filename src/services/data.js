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

  export const categoryFood = [
    {
      label: "Hot dog",
      value: 1,
    },
    {
      label: "Pizza",
      value: 2,
    },
    {
      label: "Cafe",
      value: 3,
    },
    {
      label: "Salad",
      value: 4,
    }
  ];

  export const inputList = [
    {
      label: "Nombre",
      type: "text",
      name: "name",
    },
    {
      label: "Categoría",
      type: "select",
      name: "category",
    },
    {
      label: "Descripción",
      type: "textarea",
      name: "description",
    },
    {
      label: "Before",
      type: "textarea",
      name: "before",
    },
    {
      label: "Time",
      type: "textarea",
      name: "time",
    },
    {
      label: "Imagen",
      type: "file",
      name: "image",
    },
  ];

  export const inputListFood = [
    {
      label: "Nombre",
      type: "textarea",
      name: "name",
    },
    {
      label: "Id",
      type: "textarea",
      name: "id",
    },
    {
      label: "Categoría",
      type: "select",
      name: "category",
    },
    {
      label: "Descripción",
      type: "textarea",
      name: "description",
    },
    {
      label: "Price",
      type: "number",
      name: "price",
    },
    {
      label: "Imagen",
      type: "file",
      name: "image",
    },
  ];