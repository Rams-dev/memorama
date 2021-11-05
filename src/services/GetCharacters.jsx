import {apiUrl, character} from './settings'

const endpointCharacter = apiUrl + character

export function GetCharacter(){
    return fetch(endpointCharacter)
    .then(response => response.json())
    .then(data => {
        return data.results
    })

    
}