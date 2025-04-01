import api from "./app"

export const postRequest=<T>(endpoint:string,data:any):Promise<T>=>{
    return api.post(endpoint,data,
    )
    .then(response=>response.data as T)
    .catch(error=>{
        console.log('Error during post request',error)
        throw error;
    })
}
export const postFormDataRequest = async <T>(endpoint: string, data: FormData): Promise<T> => {

  return api
    .post(endpoint, data,{
      headers: { 'Content-Type': 'multipart/form-data' }
    } )
    .then((response) => response.data as T)
    .catch((error) => {
      console.log('Error during POST request with FormData', error);
      throw error;
    });
};

export const getRequest = <T>(endpoint: string, config: any): Promise<T> => {
    return api.get(endpoint, config)
      .then(response => response.data as T)
      .catch(error => {
        console.log('Error during GET request', error);
        throw error;
      });
  }
  
  export const putRequest = <T>(endpoint: string, data: any, config: any): Promise<T> => {
    return api.put(endpoint, data, config)
      .then(response => response.data as T)
      .catch(error => {
        console.log('Error during PUT request', error);
        throw error;
      });
  }

  export const deleteRequest = <T>(endpoint: string, data: any): Promise<T> => {
    return api.delete(endpoint, { data })
      .then(response => response.data as T)
      .catch(error => {
        console.log('Error during DELETE request', error);
        throw error;
      });
  };