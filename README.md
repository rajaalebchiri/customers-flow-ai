# Customers Flow AI

customer services ai chatbot


open source customer services ai chatbot

tech stack


next.js


typescript


tailwindcss


shadcn-ui


auth0


convex

contentlayer for blog with mdx files  : need to finish


you can use ngrok to test the auth0 triggers before deployment with a domain

the post login and post registration are a must to add to auth0
post login
```
exports.onExecutePostLogin = async (event, api) => {
  await axios.post("[ngork_url_here || your_domain]/api/auth/post-signup", { email: event.user.email, authId: event.user.user_id });
};
```
post registration
```
const axios = require("axios");

exports.onExecutePostUserRegistration = async (event, api) => {
await axios.post("https://6aa5-41-250-151-59.ngrok-free.app/api/auth/post-signup", { email: event.user.email, authId: event.user.user_id });
};
```

