export default function ({ $axios, store, redirect }) {
  $axios.onRequest((config) => {
    config.https = process.env.NODE_ENV === "production";
    config.baseURL = process.env.BASE_URL;
    const { url, baseURL, method } = config;
  });
}
