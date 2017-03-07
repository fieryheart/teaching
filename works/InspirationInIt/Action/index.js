const BASIC_URL = 'https://api.dribbble.com/v1';
const header = {
	method: 'GET',
	mode: 'cors',
	headers: {
		'Accept' : 'application/json',
		'Content-Type': 'text/plain',
		'Authorization': 'Bearer aeaa7f0a2a037ee0e021d23a0e3a1eb07b119d0217a31101c8d226631a10f1f6'
	}
};


const actions = {

	fetchShots: () => (dispatch) => {

				// let url = BASIC_URL + '/shots';
				
				// let request = new Request(url, header);

				// fetch( request ).then( response => response.json() )
				// 	.then( (json) => {
				// 		dispatch( actions.getShots(json) );		
				// 	})
				// 	.catch((error) => {
				// 		console.error(error);
				// 	})
				
				let request = new Request('http://10.0.2.2:8888' , {
				  method: 'GET',
				  mode: 'cors',
				  headers: {
				    'Accept' : 'text/xml',
				    'Content-Type': 'text/plain;charset=UTF-8',
				  }
				});


				 fetch(request).then(response => {
					console.error(response);
				 })
						.then(json => {
							console.error(1);
							dispatch( actions.getShots(json) )
						})
				                      	.catch((error) => {
				                              		console.error(1);
				                     	});

	},

	getShots: (json) => ({
		type: 'GET_SHOTS',
		payload: json
	})
}

export default actions;