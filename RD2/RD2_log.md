# #100daysofcode

## UpScaling is a go...Round II

### Day1 August 7, Wednesday

**Today's Work**: Setting up apollo-graphql server for a large scale application

**Thoughts**: What can I build with this setup? maybe a microservice

**Link to work**: Apollo Docs

### Day2 August 8, Thursday

**Today's Work**: Updated the post queries and mutations.

**Thoughts**: I get this mongoose error while trying to update an array... how do I solve this?

**Link to work**: Apollo Docs, mongoose docs

### Day3 August 9, Friday

**Today's Work**: Added users datasource

**Thoughts**: we move on...

**Link to work**: Apollo Docs, mongoose docs

### Day4 August 10, Saturday

**Today's Work**: Login user and delete user

**Thoughts**: we have to implement auth next

**Link to work**: Apollo Docs, mongoose docs

### Day5 August 11, Sunday

**Today's Work**: Fix Authentication issues

**Thoughts**: The inital concept stopped every authenticated call, even when trying to login... how the kcuf would you get the token then?

**Link to work**: So much debugging and console logging, with long hours of thinking and reading blog posts. Just take a sneak peak at the authentication branch

### Day6 August 12, Monday

**Today's Work**: Minor resturcturing and reading

**Thoughts**: Read a bit off apollo implementations

**Link to work**: [jacob herrington's post](https://dev.to/jacobherrington/5-programming-languages-to-stretch-your-brain-mmg)

### Day7 August 13, Tuesday

**Today's Work**: Reading about role implementations

**Thoughts**: How do we really manage roles?

**Link to work**: [jedireza's GitHub wiki](https://github.com/jedireza/drywall/wiki/Users,-Roles-&-Groups)

### Day8 August 14, Wednesday

**Today's Work**: Edited some datasource logics

**Thoughts**: Got to work on some standards

**Link to work**: locally done

### Day9 August 15, Thursday

**Today's Work**: Read through class in Javascript.info

**Thoughts**: Read through class in Javascript.info

**Link to work**: [javascript.info](https://www.javascript.info)

### Day10 August 16, Friday

**Today's Work**: Reading about mircroservices and monoliths

**Thoughts**: I think I have to add microservices to my learning curve

**Link to work**: Eureka blogs

### Day12 August 17, Saturday

**Today's Work**: Trying to figure out why `populate` will not work durationa mongoose operation

**Thoughts**: It must be something I am missing

**Link to work**: mongodb docs, [SO](https://stackoverflow.com/questions/47370229/mongoose-document-populate-is-not-working)

**The Fix**: When calling a mongoose populate method, be sure that the `path` and the `model` are same names before you can use:

```js
// calling populate with no options

await collection.find({}).populate('Author');

/*
 * Be sure that the path and model are named Author, else try what is below
 */

// calling populate with options

await collection.find({}).populate({
	path: 'author',
	model: 'User'
});

/*
 * Where you have the schema property name of your collection as "author", and the model you want to referrence as "User"
 */
```

### Day13 August 18, Sunday

**Today's Work**: Fixed the relationship issue and improve other areas

**Thoughts**: It was some docs healing...

**Link to work**: Read the source code ni :nerd_face:

### Day14 August 19, Monday

**Today's Work**: Continued reading from javascript.info

**Thoughts**: I have to get some control on this class thing

**Link to work**: Read the source code ni 🤕

### Day15 August 20, Tuesday

**Today's Work**:

- Add relationship between the `user` and `post`
- Setup a basic next app for the frontend of our app

**Thoughts**: Let's get some fun stuff going on with `next`

**Link to work**: Read the source code ni 🤕
