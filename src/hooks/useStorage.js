
function useStorage(key, data = null) {

  if (data) {
    localStorage.setItem(key, data);
  }

  const returnData = localStorage.getItem(key);

  return [returnData];

}

export default useStorage;