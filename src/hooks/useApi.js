// To do api calls. 
// fetch , axios 

import { useEffect, useState } from "react";
import axios from "axios";

function useApi(urlName, met) {
  const [state, setState] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    axios({
      method: met,
      url: urlName
    }).then(response => {
      console.log(response);
      setState(response);
      setIsLoading(false);
    }).catch(err => {
      setIsLoading(false);
      setError(err.message)
    })
  }, [met, urlName])

  return [state, error, isLoading];
};


export default useApi;