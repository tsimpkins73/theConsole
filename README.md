# theConsole

## https://theconsole-thankful-cassowary.now.sh/



### Landing Page
![Image of landing Page](https://i.imgur.com/ie5whQo.png)

### Sign Up Page
![Image of Sign Up Page](https://i.imgur.com/FyQNmYY.png)

### Dashboard
![Image of Dashboard](https://i.imgur.com/1SBnkK6.jpg)

### Article View
![Image of Article View](https://i.imgur.com/1SBnkK6.jpg)

### Add Comment View & Comments List
![Image of Add Comment View & Comments List](https://i.imgur.com/1SBnkK6.jpg)



### What is theConsole?

theConsole is a blog dedicated to republishing articles useful to and centered around web development. 
This app allows authorized users to read articles, save favorite articles, and comment on articles.
The user can also search for articles or peruse articles based on their category.

### What built theConsole?

theConsole client was built using React and vanilla HTML & CSS. It utilizes React-Router and other functions to navigate through content choices and maniupulation.

the Console API was built using Node, PostgreSQL, knex, and Express. It also utilizes chai & Mocha as testing methods.


# theConsole API Documentation

### GET https://the-console.herokuapp.com/api/articles
https://the-console.herokuapp.com/api/articles

Example Request
https://the-console.herokuapp.com/api/articles
curl --location --request GET 'https://the-console.herokuapp.com/api/articles'


### POST https://the-console.herokuapp.com/api/articles/
https://the-console.herokuapp.com/api/articles/

BODY raw
headline: "NEW ARTICLE HEADLINE",
summary: "NEW ARTICLE summary",
text: "NEW ARTICLE Text",
comments: ["NEW ARTICLE  Comment 1",  "NEW ARTICLE  Comment 2"],
categories: "News",
image: "NEW ARTICLE",
url: "www.NEW ARTICLE.com",
favorite: true


Example Request
https://the-console.herokuapp.com/api/articles/
curl --location --request POST 'https://the-console.herokuapp.com/api/articles/' \
--data-raw 'headline: "NEW ARTICLE HEADLINE",
summary: "NEW ARTICLE summary",
text: "NEW ARTICLE Text",
comments: ["NEW ARTICLE  Comment 1",  "NEW ARTICLE  Comment 2"],
categories: "News",
image: "NEW ARTICLE",
url: "www.NEW ARTICLE.com",
favorite: true
'


### GET https://the-console.herokuapp.com/api/users
https://the-console.herokuapp.com/api/users


Example Request
https://the-console.herokuapp.com/api/users
curl --location --request GET 'https://the-console.herokuapp.com/api/users'


### GET https://the-console.herokuapp.com/api/comments/1
https://the-console.herokuapp.com/api/comments/1


Example Request
https://the-console.herokuapp.com/api/comments/1
curl --location --request GET 'https://the-console.herokuapp.com/api/comments/1'


### POST https://the-console.herokuapp.com/api/comments/
https://the-console.herokuapp.com/api/comments/
BODY raw
article_id: 1,
text: "NEW Comment Text",
user_id: 1
authToken: 'bearer-1245'


Example Request
https://the-console.herokuapp.com/api/comments/
curl --location --request POST 'https://the-console.herokuapp.com/api/comments/' \
--data-raw 'article_id: 1,
text: "NEW Comment Text",
user_id: 1
authToken: '\''bearer-1245'\'''


### POST https://the-console.herokuapp.com/api/comments/
https://the-console.herokuapp.com/api/auth/login
BODY raw
username: 'test@test.com',
password: "Password35!",


Example Request
https://the-console.herokuapp.com/api/comments/
curl --location --request POST 'https://the-console.herokuapp.com/api/auth/login' \
--data-raw 'username: '\''test@test.com'\'',
password: "Password35!",'

