import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-3xl text-center'>Question and Answer</h1>
              <h1 className='text-2xl mt-2'>1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
              <p>Ans: Access Token: When a user logins in, the authorization server issues an access token, which is an artifact that client applications can use to make secure calls to an API server. When a client application needs to access protected resources on a server on behalf of a user, the access token lets the client signal to the server that it has received authorization by the user to perform certain tasks or access certain resources. <br />

              Refresh Token: As mentioned, for security purposes, access tokens may be valid for a short amount of time. Once they expire, client applications can use a refresh token to "refresh" the access token. That is, a refresh token is a credential artifact that lets a client application get new access tokens without having to ask the user to log in again. <br />
              Access token and refresh token shouldn't be stored in the local/session storage, because they are not a place for any sensitive data. Hence I would store the access token in a httpOnly cookie (even though there is CSRF) and I need it for most of my requests to the Resource Server anyway.
              </p>

              <h1 className='text-2xl mt-2'>2.Compare SQL and NoSQL databases?</h1>
              <p>Ans: SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables, with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>

              <h1 className='text-2xl mt-2'>3.What is express js? What is Nest JS?</h1>
              <p>Ans:Express is a minimalist and flexible framework that is easy to use and has a large community of developers. NestJS, on the other hand, is a newer framework that provides additional features such as dependency injection, a modular architecture, and an intuitive CLI.</p>

              <h1 className='text-2xl mt-2'>4.What is MongoDB aggregate and how does it work?</h1>
              <p>Ans:What is Aggregation in MongoDB? Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.</p>
        </div>
    );
};

export default Blog;