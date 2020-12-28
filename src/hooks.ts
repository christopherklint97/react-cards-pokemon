import { useState, useEffect } from "react";
import axios from "axios";

function useFlip(initialFlipState = true) {
  const [isFlipped, setFlipped] = useState(initialFlipState);

  const flip = () => {
    setFlipped(isUp => !isUp);
  };

  return [isFlipped, flip] as const;
}

function useAxios(keyInLS: string, baseUrl: string) {
  const [responses, setResponses] = useLocalStorage(keyInLS);

  const addResponseData = async (formatter = (data: any) => data, restOfUrl = "") => {
    const response = await axios.get(`${baseUrl}${restOfUrl}`);
    setResponses(data => [...data, formatter(response.data)]);
  };

  const clearResponses = () => setResponses([]);

  return [responses, addResponseData, clearResponses] as const;
}

function useLocalStorage(key: string, initialValue: string[] = []) {
  if (localStorage.getItem(key)) {
    initialValue = JSON.parse(localStorage.getItem(key) as string);
  }
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue] as const;
}

export default useLocalStorage;

export { useFlip, useAxios, useLocalStorage };
