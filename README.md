# `Countries App`

## An application displays lists of countries in the world. On selecting a country, user can see more details about the country in the details screen. The details page will be with selected country flag, population, capital, currency and language.The details screen also has a list of bordering countries. User can navigate to the country listing screen on clicking back button.

### `Deployed Application URL`

[need to fill](need to fill)

## `Installation and Setup Instructions`

- You will need node and npm installed globally on your machine.

- Clone this project repository -[https://github.com/Sruthisreem/posts-and-comments.git](https://github.com/Sruthisreem/posts-and-comments.git)

  ```
  git clone https://github.com/Sruthisreem/countries-app.git
  ```

- `Installation`:
  ```
   npm install
  ```
- `To Run Test Suite` :

  - unit testing with jest and react testing library

  ```
  npm test
  ```

- `To Run the development server:` :

  ```
  npm start
  ```

- `To Visit App` : http://localhost:3000/

## `Technologies/Tools`

A list of technologies used within the project:

- Next JS
- Typescript
- Jest Testing
- React Testing Library
- CSS modules

## `Project Explanation`

This Application is a Next JS project paired with REST Countries API to get country data. This Application shows list of countries with its flag, capital, name and population in the screen. On selecting a country user will be navigated to details screen, where the selected country details are displayed. The details screen will display the flag, capital, country name, language and currency. The details screen will display the bordering countries for the selected country. The bodering countries are displayed with its flag, country name and population.

I started this process by using the npx create-next-app boilerplate.First started with creating UI, for that country item with flag,country name and other details for the countries listing screen was created. Then created a header and layout for the page. once these components are completed, started with listing the country Items in the screens.After listing was completed an API call to get countries data was integrated to the home page and result were integrated to the component.

Once listing screen was completed, started with country details component for showing country details. then started with border country component for showing the list of bordering countries. Then created a dynamic country page and added these CountryDetails and borderCountries component to the page and and a back button is added to the details page.
After completing UI, started with API call for fetching selected country details and selected country border details.
For the components unit testing was performed with the help of jest and react testing library.

## `Things to improve`

- Add more test cases
