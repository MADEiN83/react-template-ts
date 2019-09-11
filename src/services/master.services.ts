interface IFetchArgs {
  url: string;
}

interface IGetArgs extends IFetchArgs {}

interface IPostArgs extends IFetchArgs {
  body?: any;
}

export const get = (args: IGetArgs) => {
  const { url } = args;

  return fetch(url, {
    method: "GET",
    headers: getHeaders()
  }).then(response => response.json());
};

export const post = (args: IPostArgs) => {
  const { url, body = {} } = args;

  return fetch(url, {
    method: "POST",
    headers: getHeaders(),
    body
  }).then(response => response.json());
};

const getHeaders = (currentPersonId?: string): any => ({
  apiauthentification: process.env.REACT_APP_API_TOKEN as string,
  "Content-Type": "application/json",
  currentPersonId
});
