
### 1. How to start the progject
1. Go to [GIFHY API](https://developers.giphy.com/docs/api#quick-start-guide) get a beta API key, create a .env file and copy your API key in it, see `example.env` file.
2. Run following commands in your terminal to install all the dependencies
```
cd geofy
npm install
```
3. run following commands in your terminal to start the server
```
npm run start:backend
npm start
```

4. run test
 ```npm test```

5. build
 `npm run build`

### 3. How to make this project production ready?

GIPHY API production requirements:

  1. All apps that use the GIPHY API to conspicuously display "Powered By GIPHY" attribution marks where the API is utilized.You can find [approved official logo marks](https://media.giphy.com/giphy-attribution-marks.zip) here. You may also be asked to provide screenshots or a video of app during the application process.

  2. Get a production API Key
  When you create an app, you will receive a rate limited beta key, which we advise you to use in development. These beta keys are rate limited to a maximum of 42 search requests an hour and 1000 search requests a day. We highly recommend when your app is ready to go live with higher traffic that you apply to upgrade your beta key to production.

  3. Masking API Key(done)




### 2. Road map
##### Understanding the requirements

1. Create a page that shows GIFs based on a search term entered by the user.

- Your page should show gifs for two additional "adjacent" search terms. Note: The word "adjacent" in this context is purposely vague. Feel free to decide how to determine two additional search terms based on the search term entered by the user.

2. Respond to the user’s input without the user having to press a "Search" button.

4. Always return 3 results per search term, or 0 results if there are less than 3 available per search term.

5. Markdown file to specify how to build, test and start the server on port 8080. Add section what improvements you would make, if any, to make it "production-ready".

#### Evaluation:
1. Meet all requirements
2. Clear instructions
3. Easy to read the code and test the code

##### MVP
1. Build a search bar that user can type words
2. Read API documentation and test API keys
3. Make search bar display gif below the search bar(always 3 results)
4. Error handling/No results indication
5. Adjacent words, Utlizing public API https://www.datamuse.com/api/

#### UX Optimization
1. Show funny Gifs if results not found to calm the user
2. Restrict Gif content rating for creating positive experience

#### Optimization
1. Basic styling
2. Mask API Key in the url by creating a backend server

#### Why no question?
1. Simple task, show ownership and think independently

#### Retrospective
1. Need more test suite