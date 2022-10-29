import React from "react";

const Blog = () => {
  return (
    <div >
      <div className="bg-gradient-to-r from-cyan-900 via-green-200 to-cyan-700 p-4 w-full text-start mt-5 bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
          What is cors?
        </h5>
        <p>
          CORS (Cross-Origin Resource Sharing) is a system, consisting of
          transmitting HTTP headers, that determines whether browsers block
          frontend JavaScript code from accessing responses for cross-origin
          requests. The same-origin security policy forbids cross-origin access
          to resources. But CORS gives web servers the ability to say they want
          to opt into allowing cross-origin access to their resources. avatar
          Leroy Jenkins
        </p>
      </div>
      <div className="bg-gradient-to-br from-cyan-900 via-green-200 to-cyan-700   p-4 text-start mt-5 w-full  bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
          Why we using firebase?
        </h5>
        Firebase Authentication provides backend services, easy-to-use SDKs, and
        ready-made UI libraries to authenticate users to your app. It supports
        authentication using passwords, phone numbers, popular federated
        identity providers like Google, Facebook and Twitter, and more.
        <br />
        <h5 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
          {" "}
          What other options do you have to implement authentication?
        </h5>
        Usually, authentication by a server entails the use of a user name and
        password. Other ways to authenticate can be through cards, retina scans,
        voice recognition, and fingerprints.
      </div>
      <div className="bg-gradient-to-tr from-cyan-900 via-green-200 to-cyan-700  p-4 text-start mt-5 w-full  bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
        How does the private route work?
        </h5>

        <p>
        The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
</p>



        </div>
      <div className="bg-gradient-to-l from-cyan-900 via-green-200 to-cyan-700 p-4 text-start mt-5 w-full  bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
        What is Node?
        </h5>

        <p>
        As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. In the following "hello world" example, many connections can be handled concurrently. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep.
</p>
<h5 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">    How does Node work?
        </h5>
        <p>
        It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
        </p>

        </div>
    </div>
  );
};

export default Blog;
