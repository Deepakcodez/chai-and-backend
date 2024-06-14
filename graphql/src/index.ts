import express = require('express')
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';

async function init() {
    
const app = express()
const port = 5000

app.use(express.json())
//creating graphql server
const gqlServer = new ApolloServer({
    typeDefs:`
    type Query {
                hello : String      
    }
    `,
    resolvers:{
        Query :{
            hello : ()=> `hello acknowlwdged`
        }
    },
    
})


//start graphql server

await gqlServer.start();

app.use('/graphql',expressMiddleware(gqlServer))

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
}

init()