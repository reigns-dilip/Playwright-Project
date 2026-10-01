
import {test , expect, request} from "@playwright/test"


test.skip("Get-Request -> Get all users" , async ()=>{

    const apiRequest = await request.newContext()

    const response = await apiRequest.get(process.env.API_BASE_URL + '/users')

    const body = await response.json()

    console.log(body)

    await expect(await response.status()).toBe(200)

})


let token

test("Post - Request -> Login user and get tokens" , async()=>{

    const apiRequest = await request.newContext()

    const response = await apiRequest.post(process.env.API_BASE_URL + '/user/login',
    {
        headers : { 'Content-Type': 'application/json' },
        data : {
            username : process.env.API_USER_NAME,
            password : process.env.API_PASSWORD
        }
    }
)

    const body = await response.json()

    console.log(body)

    token = await body.accessToken

    await expect(await response.status()).toBe(200)

})


test("Get - Request -> Get current authenticated user" , async()=>{

    const apiRequest = await request.newContext()

    const response = await apiRequest.get(process.env.API_BASE_URL + '/user/me',
        {
            headers : { 'Authorization': 'Bearer '+ token},
        })

    const body = await response.json()

    console.log(body)

    await expect(await response.status()).toBe(200)
    
})


test("Post - Request -> Add a new user" , async ({request})=>{
    const response = await request.post(process.env.API_BASE_URL + '/users/add' , {
        headers : { 'Content-Type': 'application/json' },
        data : {
            "firstName" : "Mohammed",
            "lastName" : "Imran",
            age : 28
        }
})

const body = await response.json()

console.log(body)

console.log("STATUS CODE IS :" , await response.status())

await expect(await response.status()).toBe(201)
})


test("Put - Request -> Update a user" , async ({request})=>{
    const response = await request.put(process.env.API_BASE_URL + '/users/2', {
        headers : { 'Content-Type': 'application/json' },
        data : {
            "lastName" : 'Owais',
        }
    })

const body = await response.json()

console.log(body)

await expect(await response.status()).toBe(200)

})


test("Delete - Request -> Delete a user" , async ({request})=>{
    const response = await request.delete(process.env.API_BASE_URL + '/users/1')
        

const body = await response.json()

console.log(body)

console.log("STATUS CODE IS :" , await response.status())
await expect(await response.status()).toBe(200)

})


test.only("Search - Request -> Search a user" , async ({request})=>{
    const response = await request.get(process.env.API_BASE_URL + '/users/search?q=John')
        

const body = await response.json()

console.log(body)

console.log("STATUS CODE IS :" , await response.status())
await expect(await response.status()).toBe(200)

})










