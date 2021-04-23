

## Evaluate News Article with Natural Language Processing
This project aims to build a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. When a user submits a URL of an article, the web page then dispalys sentiment analysis returned from meaningcloud API, based on the contents of the article.
## Get Up and Running

Fork this repo, then clone the branch of your choice from your forked repo down to your computer:

```
git clone -- https://github.com/Yasminabdallah/npl_udacity --
```

`cd` into your new folder and run:
- you have to create a file called .env and copy from env-example
- you can use this parameter in env for example :
    API_ID=333333333
    API_KEY=a2dc9bc5cfb65ada19a2ad7b789ea3e5
    API_URL=https://api.meaningcloud.com/sentiment-2.1
    PORT = 8081
- ```npm install```
- ```npm start build-dev``` to start for develpment
- ```npm start build-prod``` to start for production
- ```npm start start``` to start for backend
- this app runs on localhost:8081, but you can of course edit that in server.js
