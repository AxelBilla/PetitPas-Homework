# PetitPas-Homework
Coding homework made to pass E-Petitpas's screening process (only had 4h to make this due to the unexpected addition to my schedule)

[WEBSITE LINK](http://54.37.69.170:3000/)

## TEST USERS
1) email: "test@test.com"; name: "tester"
2) email "jean@globe.com"; name: "jean globe"

## INFO

Node/Express.js API ("back") setup on my own server at the port 999. <br>
React Web App ("front") setup on my own server at the port 3000 (default).
<br><br>

Wasn't asked to handle sign ups, so I only did logins.

Whenever a user puts their Email + Name, the "back" checks the DB for both infos and returns a boolean to say whether the "front" should go to the home page or stay on the login page. (user exists or not)

Email is kept in localStorage (could be sessionStorage instead, but doesn't really matter here. Should be using a token, but I wasn't asked to).

<br><br>
When entering the home page, a single fetch request is made to the "back" with the email kept in localStorage.
<br>
The "front" waits for a reply from the "back" then displays the user's infos (email, name, id).

<br>

The "back" can only reply to requests coming from the "front" hosted on my server.

Spent too much time trying to wrap my head around the Prisma documentation, so I skipped the CSS (was planning on reusing stuff I had already made for CaloricFool, since it already has a perfectly functional signup/login page, so there's some fragments of unused CSS I copypasted but never implemented).
