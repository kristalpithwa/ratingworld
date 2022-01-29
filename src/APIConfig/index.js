const localUrl = 'https://api.myvisualresume.com/api/v1'; // new domain server

export const Config = {
  baseURL: localUrl,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeOut: 60000,
};
