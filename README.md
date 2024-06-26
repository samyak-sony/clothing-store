# DrainStore
A clothing store website made using react.js and firebase. The user can browse various clothing items, add items to their cart and log-in using their google account or with email & password.
Website Link -> [https://master--ephemeral-nasturtium-b28d89.netlify.app/checkout](DrainStore
)

## Features
* Authentication with Google account.
* Authentication with email & password.
* Cart: User can add and remove products. It displays the products information such as product             price and quantity.
* Checout Page: User can edit the quantity of the item selected or remove the item from their cart.
* Sign-in Page: User can sign-in using their google account or sign-in/ sign-up using email &                password.

# Working
* Routes implemented using React router, responsive design using SASS.
* Store data and products are loaded from the server.
* User information is stored in the firebase firestore database.
* Total Quantity of items selected is shown in the cart with the total billing amount.
* Added Stripe payment feature for secure and efficient transactions.
* Cancelling of orders from the checkout page or from the item cart.

# Future plan
* Setting up a payment method such as stipe payment.(done ✔️)
* Addition of new items.
* user reviews of items.
* Generating discount codes in the discount section.

# Technologies Used
* **Deployment**: *Netlify*
* **Design**: *Sass*
* **Database**: *Firebase Firestore*
* **Backend**: *Firebase*
* **Frontend**: *Reactjs*

## ScreenCaps of routes
 **HOME PAGE**
 
![image](https://github.com/samyak-sony/clothing-store/assets/74599537/f3882c00-c1d7-442b-b5a1-26ecbfa593c6)

<----------------------------------------------------------------------------------------->
<----------------------------------------------------------------------------------------->

**SHOP PAGE**

![image](https://github.com/samyak-sony/clothing-store/assets/74599537/80c0fb2e-9868-4aaa-8ef5-bc743f6cec40)

<----------------------------------------------------------------------------------------->
<----------------------------------------------------------------------------------------->

**CHECKOUT PAGE**

![image](https://github.com/samyak-sony/clothing-store/assets/74599537/e359bc07-d0b9-4742-a828-f491b31ce21b)





## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.


### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)


### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)
ok.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
