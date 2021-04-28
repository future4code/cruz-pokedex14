import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useRequestData(url, initialState) {
  const [data, setData] = useState(initialState);

  //Requisição de dados gerais da Api
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);

  return data;
}
