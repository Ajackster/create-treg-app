# create-treg-app #

A command to create a starter app built with Typescript, React, Express, and GraphQL.

**What does TREG mean?**
**T** = Typescript
**R** = React
**E** = Express
**G** = GraphQL

*Don't judge, naming is hard!*


Getting Started
------------

You will need to have node on your computer to use this command. To install node, check out the official documentation at  https://nodejs.org/en/

**1.)** Open up a terminal/cmd, and you should be able to run the command `npm install create-treg-app yarn -g`.

<img width="645" alt="cta-1paint" src="https://user-images.githubusercontent.com/14223893/34325569-2a929a1e-e863-11e7-8bf7-87ce7df0ae9c.png">

------------

**2.)** Then go to the desired destination of your project and run the command `create-treg-app ExampleProject`. You can replace 'ExampleProject' with the desired name of your project.

<img width="513" alt="cta-2" src="https://user-images.githubusercontent.com/14223893/34325635-4a6df48a-e865-11e7-82af-b428610f99c5.png">

As you can see, the command generated a new directory called ExampleProject.

------------

**3.)** `cd` into the project. In my case, I run `cd ExampleProject`. I can then see two directories, *client* and *server*. Go into the *client* directory and run the command `yarn`. This will install all the dependencies required for the front-end. After you install these dependencies, run the command `npm run build`.

<img width="1065" alt="cta-3" src="https://user-images.githubusercontent.com/14223893/34325665-0c6995ee-e866-11e7-8f34-2ee39fe527ba.png">

------------

**4.)** Now go into the `server` directory and run `yarn`. Run the command `npm start app` and you should see an app server spin up at localhost:8080 and a graphql server spin up at localhost:3000. The app server serves your react project, whilst the graphql server provides the graphql.

<img width="758" alt="cta-4" src="https://user-images.githubusercontent.com/14223893/34325697-33b8f742-e867-11e7-86f4-ba357bdb3896.png">

Now that your server is running, you can go to localhost:3000 to see GraphiQL. https://github.com/graphql/graphiql

And to see your react application, go to localhost:8080.


Notable Dependencies
------------
* Typescript - https://www.typescriptlang.org/
* React - https://reactjs.org/
* Express.js - https://expressjs.com/
* GraphQL - http://graphql.org/
* Apollo (specifically react-apollo) - https://github.com/apollographql/react-apollo

Feel free to post issues in the issues log and I will try to address them as soon as possible. If you think you can fix an issue, feel free to make a Pull Request. Thanks!