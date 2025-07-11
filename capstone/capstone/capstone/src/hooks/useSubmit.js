import {useState} from "react";
import { useNavigate } from "react-router-dom";


const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);


  const submit = async (url, data) => {
    setLoading(true);
    try {
      await wait(2000);
      setResponse({
        type: 'success',
        message: `Thanks for your submission ${data.firstName}, we will get back to you shortly!`,
      })
    } finally {
      setLoading(false);
    }
  };

  const clearResponse = () => {
    setResponse(null);
  };

  return { isLoading, response, submit, clearResponse };
}

export default useSubmit;