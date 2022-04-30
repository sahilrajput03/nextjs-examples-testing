GraphQL's default scalar types are:

    Int: A signed 32‐bit integer
    Float: A signed double-precision floating-point value
    String: A UTF‐8 character sequence
    Boolean: true or false
    ID (serialized as a String): A unique identifier that's often used to refetch an object or as the key for a cache. Although it's serialized as a String, an ID is not intended to be human‐readable.

// ! means non-nullable.

// Without ! means, the field is nullable.

// Want to read about non-nullable thing ? Refer this stackoveflow answer: https://stackoverflow.com/a/46771890

## For cors in apollo-server-micro

Visit: https://github.com/apollographql/apollo-server/tree/main/packages/apollo-server-micro#cors-example

`yarn add micro micro-cors`

## i know typedefs and resolvers, but what is schema though.?

```js
// import {schema} from "../../lib/schema";// this is baically `typeDefs` only.
```
