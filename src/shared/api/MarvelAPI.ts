import axios from "axios";
const _publickey = "daf4024145d4176879bb994889f44c75";
const _ts = "timestamp";
const _hash = "da8dbe4c60bf39c30812b3967425f954";
const TMDBapi = axios.create({
  baseURL: "http://gateway.marvel.com/v1/public",
  params: {
    apikey: _publickey,
    ts: _ts,
    hash: _hash,
  },
});
export default TMDBapi;
