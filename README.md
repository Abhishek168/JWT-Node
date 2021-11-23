# JWT with SEQUELIZE
### source : https://www.youtube.com/watch?v=mbsmsi7l3r4

### main concept : accessToken,refreshToken,

1. access Token:
-> There is no expiration date.
-> Forever access for it.
-> Not secure.

2. refresh Token:
   -> we to save the refresh token to safe side.
   -> If someone is having access token then he will have access for the account for few minutes.
   -> when user use the refresh token it will create new refresh token.
   -> that will recreate every time. so it will secure.

3. logout :
-> deauthenticate refresh token
