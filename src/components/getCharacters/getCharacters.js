


class getCharacters {
    _base = 'https://gateway.marvel.com:443/v1/public/characters';
    _api = 'apikey=b07ed54844254c507f265c38a8f42d4a';
    getResource = async (url) => {
        let res = await fetch(url);
        if (res.ok) {
            return await res.json()
        } else {
            throw new Error('something wrong');
        }
    }
    getSingleCharacter = async (id) => {
        console.log('hello');
        let character = await this.getResource(this._base + '/' + id + '?' + this._api);
        return this.getTransformData(character.data.results[0]);

    }
    getSpecificCharacter = async (offset) => {
        let char = await this.getResource(this._base + '?limit=1&offset=' + offset + '&' + this._api);
        return this.getTransformData(char.data.results[0]);
    }
    getTransformData = (obj) => {
        return {
            id: obj.id,
            name: obj.name,
            description: obj.description,
            thumb: obj.thumbnail.path + '.' + obj.thumbnail.extension,
            url: obj.urls[1].url,
            comics: obj.comics.collectionURI
        }
    }

}


export default getCharacters;