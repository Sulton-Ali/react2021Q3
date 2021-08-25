import React from 'react';

import './about.scss';

const About = (): JSX.Element => {
  return (
    <div className="about-page">
      <p className="about-page__paragraph">
        &nbsp;&nbsp;To get started you will need an API key. They are free while
        you are in development. Get API key You should know how to make web
        requests in your chosen programming language. We have included some
        crude ways to do this in our examples below if you need a place to
        start. Alternatively you can use one of our client libraries. Now let is
        consider two of the most popular use cases for News API and walk through
        each one:
      </p>
      <p className="about-page__paragraph">
        &nbsp;&nbsp;Search for news articles that mention a specific topic or
        keyword The main use of News API is to search through every article
        published by over 80,000 news sources and blogs in the last 3 years.
        Think of us as Google News that you can interact with programmatically!
        In this example we want to find all articles that mention Apple
        published today, and sort them by most popular source first (i.e.
        Engadget articles will be returned ahead of Mom and Pops Little iPhone
        Blog). For this we need to use the /everything endpoint. For more
        information about the /everything endpoint, including valid parameters
        for narrowing your search, see the Everything endpoint reference.
      </p>
      <p className="about-page__paragraph">
        &nbsp;&nbsp;Get the current top headlines for a country or category News
        API is great as a data source for news tickers and other applications
        where you want to show your users live headlines. We track headlines in
        7 categories across over 50 countries, and at over a hundred top
        publications and blogs, in near real time. Let is make a request to get
        live top headlines in the US right now. We will use the /top-headlines
        endpoint for this. This returns a JSON object with the results in an
        array we can iterate over. For more information about the /top-headlines
        endpoint, including valid parameters for focusing on specific countries
        and categories, see the Top Headlines endpoint reference.
      </p>
    </div>
  );
};

export default About;
