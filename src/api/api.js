// const fetch = require('node-fetch');

const url = 'https://foreca-weather.p.rapidapi.com/location/search/mumbai?lang=en&country=in';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'foreca-weather.p.rapidapi.com',
    'X-RapidAPI-Key': '705922a292msh6d646bbf08cb4b8p19d753jsnc52069117369'
  }
};

// fetch(url, options)
// 	.then(res => res.json())
// 	.then(json => console.log(json))
// 	.catch(err => console.error('error:' + err));


export const test = async () => {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result)
}

export const getWeather = async () => {
}

