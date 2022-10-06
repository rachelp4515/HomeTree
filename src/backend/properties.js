import { hostProp } from "../data"



export function createNewProperty(data) {
    fetch("some url", {

        body: JSON.stringify(data)
    })
}

export function deleteProperty(data) {

}

export function updateProperty(data) {

}

export function getProperty(data) {
    return hostProp
}

// export function createUser() {
    

//     fetch("http://localhost:3000", {
//         method: 'POST',
//         mode: 'cors',
//         headers: {
//             'Content-Type': 'application/json',
//             'Access-Control-Allow-Credentials': true,
//             'Access-Control-Allow-Origin': "http://localhost:4000"
//         },
//         credentials: "include",
//         body: JSON.stringify({ username, password, email, phone }),

//     })


//         .then(res => res.json())
//         .then(json => {
//             setCookie("nToken", json.token)
//             nav("/")

//         })
// }

// export function login() {
//     fetch("http://localhost:3000", {
//         method: 'POST',
//         mode: 'cors',
//         headers: {
//             'Content-Type': 'application/json',
//             'Access-Control-Allow-Credentials': true,
//             'Access-Control-Allow-Origin': "http://localhost:4000"
//         },
//         credentials: "include",
//         body: JSON.stringify({ username, password }),

//     })


//         .then(res => res.json())
//         .then(json => {
//             setCookie("nToken", json.token)
//             nav("/")
//         })
// }

