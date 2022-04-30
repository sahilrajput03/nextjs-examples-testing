# ~sahil

- Learn about non-null Assertion operator: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#non-null-assertion-operator

- A billion dollar mistake null: https://www.infoq.com/presentations/Null-References-The-Billion-Dollar-Mistake-Tony-Hoare/

- You may use

```js
export const typeDefs = gql`
	type Note {
		id: String!
		content: String
	}
`
```

instead of

```js
export const typeDefs = gql`
	type Note {
		id: ID!
		content: String
	}
`
```

Doing so will help in making id field as Int instead of being it a string, as graphql-codegen generates ID field as strings in generated typedefinition file, so you may use accordingly.

- For another config with codegen only, refer this video [here](https://youtu.be/DFTVPZvgnaQ) and code @ [here](https://github.com/d-dmytro/youtube-graphql-code-generator/tree/0adfaa7a1c5588f756595a78be96c7295fffa5cb)

## Also::There is `apollo-cli` to generate typescript types in watch mode for the schema from some graphql endpoint

For this: Simply refer to this [video](https://youtu.be/Tw_wn6XUfnU) and it has its code (with nextjs) [here](https://github.com/leighhalliday/apollo-codegen-demo). But what is the the downside to using apollo to generate types..? and why you should actually use `with-typescript-graphql` or this repo (using `graphql-let` and `graphql-codegen`)?

Because usig graphql-codegen you use your existing schema in .graphql file and that's sort of neat for defining query requests like you have in `reqs` folder. Secondly you have the hooks ready-made with graphql-let, and thats awesome, cause it feels like zero-configuration with apollol. Yikes! Thirdly, you can have the `UpdateNameMutation`, `ViewerQuery` types for the data to be retuned and `UpdateNameMutationVariables` like types for the input variable types for the query/mutations, yo! Say., import from file `viewer.graphqlql.d.ts` file respectively for this project. You can import these types for anything you want for HACKS (like to use any other graphql client library like urql, but its really awesome to use premade hooks with apollo/client so stick with it).

What is bad with apollo-cli tool..? See [in code here](https://github.com/leighhalliday/apollo-codegen-demo/blob/main/pages/index.tsx#L4-L11), and we get to import types for result data, for input variables, and the whole system is little complex, rather with `graphql-let` its pretty straight forward for inputing variable as you can see in this same repo in `index.ts` file, the way we use updateNameMuation with variables, yikes!!

## Others

learn about mutation options: get it here, and learn about the [update funciton](https://www.apollographql.com/docs/react/data/mutations/#options).

Read this article about [Rewriting and updating data in cache@apollo docs](https://www.apollographql.com/docs/react/caching/cache-interaction/).
