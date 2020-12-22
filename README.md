# buber-server
The practice clone code for Uber server with GraphQL, Typescript and Nodejs

## Resolvers
---
### Public Resolvers
- [x] Sign In / Sign Up with Facebook
- [x] Sign In with Email
- [x] Start Phone Number Verification
- [x] Complete Phone Number Verification
- [x] Sign Up with Email
---
### Authuentication
- [x] Generate JWT
- [x] Verifiy JWT

---
### Private Resolvers
- [x] Get My Profile
- [x] Request Email Verification
- [x] Complete Email Verification
- [x] Update my profile
- [x] Toggle Driving Mode
- [x] Report Location / Orientaion
- [x] Add Place
- [x] Edit Place
- [x] Delete Place
- [x] Get My Place
- [x] See Nearby Drivers
- [x] Subscribe to Nearby Drivers
- [x] Request a Ride
- [x] Get Nearby Rides
- [x] Subscribe to Nearby Ride Requests
- [x] Subscribe to Ride Status
- [x] Get Chat Room Messages
- [x] Subscribe to Chat Room Messages
- [x] Send a Chat Message
- [x] Get Ride History
- [x] See Ride Detail

---

## Build Setup

``` bash
# typescirpt compiler (yarn run types)
yarn predev

# serve with hot reload at localhost:8080
yarn dev

# delete local dist folder
yarn prebuild

# exec tsc
yarn build

# graphql files copy & paste
yarn postbuild

# local start node server
yarn start
```