import axios from "axios";
import { getToken } from "../helpers";

const BASE_URL = process.env.REACT_APP_API_URL;

const requestBuilder = (request, configData) => {
  const { body, method, url } = request;
  const { headers } = configData;
  const contentType =
    body instanceof FormData ? "multipart/form-data" : "application/json";

  const defaultHeaders = {
    "content-type": contentType,
    accessToken: getToken(),
  };

  const requestConfig = {
    baseURL: BASE_URL,
    data: body,
    headers: { ...headers, ...defaultHeaders },
    method,
    url,
  };

  return requestConfig;
};

export const defaultResponse = {
  status: 500,
  data: {
    error: "Server error",
  },
};

export const formatError = (err) => {


  let errorResponse = {
    status: err.status,
    data: {
      error: err.data.message,
    },
  };

  const response = errorResponse || defaultResponse;


  
  console.log(response, "response");
  
  
  return {
    code: response.status,
    message: response.errors,
  };
};

export const makeRequest = async (request, configData) => {
  const requestConfig = requestBuilder(request, configData);
  try {
    const res = await axios(requestConfig);
    if (configData.withHeaders) {
      return res;
    } else {
      return res.data;
    }
  } catch (err) {
    let error = (formatError(err?.response), "dasjdlkasj");
    return error;
  }
};
