import { STRAPI_URL } from "./config";
export function getImage(element) {
  const { url } = element.attributes.image.data.attributes;
  return `http://127.0.0.1:1337${url}`;
}

export function getImageProduct(element) {
  const { url } = element.image.data.attributes;
  return `http://127.0.0.1:1337${url}`;
}
