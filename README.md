# Node.js Authentication

## Dependencies used

1. Config - to retrieve jwt private key
2. joi - validation
3. express - web framework
4. mongoose - MongoDB ORM
5. jsonwebtoken - generates and verify JWT
6. bcrypt - hashing the password to store in the database

## How to run and use this repo

### steps

```
1. Clone or download the repo
2. Go inside the folder node-authentication
3. set the environment variable
    eg: $env:myprivatekey = "myprivatekey" (command for mac users) 
        export myprivatekey=myprivatekey (command for linux users)
4. Run this command > node index.js
5. Open postman 
6. Type localhost:3000/api/users with POST and add body
    eg: {
            name: "some name",
            email: " somemail.com",
            password: "some password"
        }
7. Hit send
8. Copy the > x-auth-token from response header
9. Open new postman tab and type localhost:3000/api/users/current with GET
10. Add header key as 'x-access-token' and paste the copied x-auth-token as value
```
