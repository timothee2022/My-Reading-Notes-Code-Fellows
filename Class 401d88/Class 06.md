# Class 6

## Here is my Class 6 reading notes

[Securing Passwords](https://thehackernews.com/2014/04/securing-passwords-with-bcrypt-hashing.html)

1. Cryptographic hash algorithms MD5, SHA1, SHA256, SHA512, SHA-3 are general purpose hash functions, designed to calculate a digest of huge amounts of data in as short a time as possible. Hashing is the greatest way for protecting passwords and considered to be pretty safe for ensuring the integrity of data or password.
"Quoting from the reading material"

2. Bcrypt is an adaptive hash function based on the Blowfish symmetric block cipher cryptographic algorithm and introduces a work factor (also known as security factor), which allows you to determine how expensive the hash function will be.
"Quoting from the reading material"

3. BCrypt, IT's SLOW AND STRONG AS HELL
To overcome such issues, we need algorithms which can make the brute force attacks slower and minimize the impact. Such algorithms are PBKDF2 and BCrypt, both of these algorithms use a technique called Key Stretching.
"Quoting from the reading material"

[Basic Auth](https://en.wikipedia.org/wiki/Basic_access_authentication)

1. basic access authentication is a method for an HTTP user agent (e.g. a web browser) to provide a user name and password when making a request. In basic HTTP authentication, a request contains a header field in the form of Authorization: Basic <credentials>, where credentials is the Base64 encoding of ID and password joined by a single colon :.
"Quoting from the reading material"

2. Because the BA field has to be sent in the header of each HTTP request, the web browser needs to cache credentials for a reasonable period of time to avoid constantly prompting the user for their username and password. Caching policy differs between browsers.

    HTTP does not provide a method for a web server to instruct the client to "log out" the user. However, there are a number of methods to clear cached credentials in certain web browsers. One of them is redirecting the user to a URL on the same domain, using credentials that are intentionally incorrect. However, this behavior is inconsistent between various browsers and browser versions.
"Quoting from the reading material"

3. In HTTP Basic authentication, the "password:username" is encoded in Base64. Since it's not encrypted, it's cleartext.
"Quoting from the reading material"

[OWASP auth cheatsheet](https://www.owasp.org/index.php/Authentication_Cheat_Sheet)

1. Authentication is the process of verifying that an individual, entity or website is whom it claims to be. Authentication in the context of web applications is commonly performed by submitting a username or ID and one or more items of private information that only a given user should know.
"Quoting from the reading material"

For live access to my page, please visit the following link: 
https://github.com/timothee2022/My-Reading-Notes-Code-Fellows.git