import axios from "axios";
const axiosFetch = async ({ url, method, data = null }) => {
  //api to fetch data from postman mock server
  try {
    // axios.get("dsa", {});
    console.log("error");
    const token = JSON.parse(sessionStorage.getItem("user") ?? "{}").token;
    const response = await axios.request({
      url: import.meta.env.VITE_REACT_APP_BACKEND_BASE_URL + url,
      method,
      data: data,
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    });
    return response;
  } catch (err) {
    return err;
  }
};

export default axiosFetch;
