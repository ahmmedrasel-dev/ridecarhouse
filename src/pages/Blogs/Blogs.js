import React from 'react';

const Blogs = () => {
  return (
    <div className='container mx-auto my-12'>
      <div className='text-center'>
        <h2 className='text-4xl mb-8 text-sky-500 uppercase border-2 inline-block p-3 rounded-md'>Our Blogs</h2>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 sm:grid-cols-1 my-8">
        <div className='bg-slate-100 p-4 rounded-lg drop-shadow-md'>
          <p className='font-medium'>Differeant between Javascript and Node Js?</p>
          <article className='pt-4'>
            NodeJS is a asynchronous event-driven and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. its designed to build scalable network applications.

            JavaScript is a scripting, object-oriented programming language. it is used both on the client-side and server-side that allows you to make web pages interactive and more dynamic.
          </article>
        </div>

        <div className='bg-slate-100 p-4 rounded-lg drop-shadow-md'>
          <p className='font-medium'>Different Between SQL adn NONSQL Database?</p>
          <article className='pt-4'>
            SQL databases are relational, the databases use structured query language and have a predefined schema and the SQL databases are table-based.its are better for multi-row transactions.
            On the Other hand, NoSQL databases are non-relational databse.NoSQL databases have dynamic schemas for unstructured data and NoSQL databases are document, key-value. it is better for unstructured data like documents or JSON.
          </article>
        </div>

        <div className='bg-slate-100 p-4 rounded-lg drop-shadow-md'>
          <p className='font-medium'>What is the purpose of jwt and how does it work?</p>
          <article className='pt-4'>
            JSON Web Token is used to create access tokens for an application. It works this way: the server generates a token that certifies the user identity, and sends it to the client.

            The client will send the token back to the server for every subsequent request, so the server knows the request comes from a particular identity. When the token is used, the receiving party verifies that the header and payload match the signature.
          </article>
        </div>
      </div>
    </div>
  );
};

export default Blogs;