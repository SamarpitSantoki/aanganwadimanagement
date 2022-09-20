import axios from "axios";
const VITE_REACT_APP_BACKEND_BASE_URL = import.meta.env
  .VITE_REACT_APP_BACKEND_BASE_URL;
const axiosFetch = async ({
  url,
  method,
  data = null,
  headers = null,
  dev = false,
  token = null,
}) => {
  //api to fetch data from postman mock server
  try {
    // axios.get("dsa", {});
    const response = await axios.request({
      url: import.meta.env.VITE_REACT_APP_BACKEND_BASE_URL + url,
      method,
      data: data,
      headers: {
        ...headers,
        Authorization: token ? `Bearer ${token}` : "",
      },
    });
    return response;
  } catch (err) {
    return err;
  }
};

export default axiosFetch;
