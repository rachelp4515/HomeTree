import { hostProp } from "../data"

export async function createNewProperty(data) {
    let res = await fetch("http://localhost:4000/create-prop", {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(data)
    })
    let json = res.json()
    return json
}

export function deleteProperty(data) {

}

export function updateProperty(data) {

}

export function getProperty(data) {
    return hostProp
}



