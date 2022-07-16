# React with Tailwind

this is how this simple template was constructed. It uses `npx create-react-app` to start the project but any project created in this way may be used to add tailwind in at a later date

firstly then the project is created ( without tailwind ) with :

```
npx create-react-app react-tailwind
cd react-tailwind/
```

next tailwind is added :

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

The files `tailwind.config.js`, `src/index.css` & `src/App.js` are editted from the default created by `create-react-app` - see this repo and the below link for details

> https://medium.com/codingthesmartway-com-blog/how-to-use-tailwind-css-with-react-9dd78bbdc0e0

run the app as normal with `npm start`
