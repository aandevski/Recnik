const handleResponse = (response) => {
	if(response.ok) {
		return response.json();
	} else {
		throw new Error('Invalid response!');
	}
}

const handleError = (error) => {
	console.error(error)
}

export class Repository {

    static getWords(query) {
        const url = '/api/words/' + query;

        return fetch(url).then(handleResponse).then(jsonResponse => {
            return jsonResponse.words;
        }).catch(handleError);
    }

    static getWord(query) {
        console.log("Called repo getword with " + query);
        const url = '/api/word/' + query;

        return fetch(url).then(handleResponse).then(jsonResponse => {
            return jsonResponse;
        }).catch(handleError);
    }
}