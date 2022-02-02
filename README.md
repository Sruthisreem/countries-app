# `Countries App`

## An application that displays list of countries in the world. On selecting a country, user can see more information about the country in the details screen. The details page will display country flag, population, capital, currency and language.The details screen also shows a list of bordering countries. User can navigate to the country listing screen on clicking back button.

### `Deployed Application URL`

[https://countries-app-sruthisreem.vercel.app/](https://countries-app-sruthisreem.vercel.app/)

## `Installation and Setup Instructions`

- You will need node and npm installed globally on your machine.

- Clone this project repository -[https://github.com/Sruthisreem/countries-app.git](https://github.com/Sruthisreem/countries-app.git)

  ```
  git clone https://github.com/Sruthisreem/countries-app.git
  ```

- `Installation`:
  ```
   npm install
  ```
- `To Run Test Suite` :

  - Unit testing with jest and react testing library

    ```
    npm test
    ```

  - For Integration testing

    ```
    npm run cypress
    ```

- `To Run the development server:` :

  ```
  npm run dev
  ```

- `To build`
  ```
  npm run build
  ```
- `To Visit App` : http://localhost:3000/

## `Technologies/Tools`

A list of technologies used within the project:

- Next JS
- Typescript
- Jest Testing
- React Testing Library
- CSS modules
- Cypress

## `Project Explanation`

This Application is a Next JS project paired with REST Countries API to get country data. This Application shows list of countries with its flag, capital, name and population in the screen. On selecting a country user will be navigated to details screen, where the selected country details are displayed. The details screen will display the flag, capital, country name, language and currency. The details screen will display the bordering countries for the selected country. The bodering countries are displayed with its flag, country name and population.

I started this project by using the npx create-next-app boilerplate.First started with creating UI, for the country item with flag,country name and other details for the countries listing screen. Then created a header and layout for the page. once these components are completed, started with listing the country Items in the screens.After listing was completed an API call to get countries data was integrated to the home page and result were integrated to the component.

Once listing screen was completed, started with country details component for showing country details. Then started with border country component for showing the list of bordering countries. Then created a dynamic country page and added these CountryDetails and borderCountries component to the page and added a back button in the details page.
After completing UI, started with API call for fetching selected country details and selected country border details.
For the components, unit testing is done with the help of jest and react testing library.

## `Things to improve`

- Add more test cases
