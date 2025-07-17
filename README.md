# PetitPas-Homework
Coding homework made to pass E-Petitpas's screening process (4h)

[WEBSITE LINK](http://54.37.69.170:3000/)

## INFO

Node/Express.js API ("back") setup on my own server at the port 999.<br>
React Web App ("front") setup on my own server at the port 3000 (default).
<BR>

Wasn't asked to handle sign ups, so I only did logins.

Whenever a user puts their Email + Name, the "back" checks the DB for both infos and returns a boolean to say whether the "front" should go to the home page or stay on the login page.

Email is kept in localStorage (could be sessionStorage instead, but doesn't really matter here).

<BR>
When entering the home page, a single fetch request is made to the "back" with the email kept in localStorage.
The "front" waits for a reply from the "back" then displays the user's infos (email, name, id).

<BR><br>

The "back" can only reply to requests coming from the "front" hosted on my server.
