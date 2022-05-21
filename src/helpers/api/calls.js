import request from '../request'
import endpoints from '../Endpoints/endpoints';

export function getProductos(){
	return new Promise((resolve, reject) => {
    request({
      url: endpoints.getProductos,
      method: 'get',
    })
		  .then(async function (response) {
		    resolve(response)
			console.log(response.data);
		  })
		  .catch(function (error) {
		    reject(error)
			console.log(error);
		  });
	})
}
export function getCategorias(){
	return new Promise((resolve, reject) => {
    request({
      url: endpoints.getCategorias,
      method: 'get',
    })
		  .then(async function (response) {
		    resolve(response)
			console.log(response.data);
		  })
		  .catch(function (error) {
		    reject(error)
			console.log(error);
		  });
	})
}