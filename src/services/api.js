import axios from "axios";
import { md5 } from 'js-md5';

const timestamp = new Date().getTime();


const hash = md5(timestamp + window.process.PRIVATE_KEY + window.process.PUBLIC_KEY);

export const api = axios.create({
    baseURL: "https://gateway.marvel.com/v1/public",
    params: {
      ts: timestamp,
      apikey: window.process.PUBLIC_KEY,
      hash,
    },
  });

  export const listCharacters = (page) => {
    return api.get(`/characters?offset=${page}`);
  };

  export const listCharactersByParams = (name, type, page) => {
    return api.get(`/characters?${type}=${name}&orderBy=name&offset=${page}&limit=13`);
  };

  export const listCharacterById = (id) => {
    return api.get(`/characters/${id}`);
  };