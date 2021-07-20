const ADDRESS = "https://front-test.beta.aviasales.ru/search";



class Api{
    constructor(addressSearchId){
        this.address = addressSearchId;
    }
    getSearchId(){
        return fetch(`https://front-test.beta.aviasales.ru/search`,{
            method: 'GET',
        })
        .then(res =>{
            return this._getResponseData(res);
        })
    }
    getTicketsData(id){
        return fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${id}`,{
            method: 'GET',
        })
        .then(res =>{
            return this._getResponseData(res);
        })
    }
    _getResponseData(res) {
        if (!res.ok) {
            return Promise.reject(res.status);
        }
        return res.json();
    }
}

const api = new Api(ADDRESS);
export default api;