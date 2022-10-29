import { Accordion } from "flowbite-react";
import React from "react";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
const Faq = () => {
  return (
    <div className="ml-5">
      <Accordion arrowIcon={BsFillArrowDownCircleFill}>
        <Accordion.Panel>
          <Accordion.Title>
            What is the best way to learn HTML and CSS?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-start text-gray-500 dark:text-gray-400">
              Learn-HTML.org is a reliable source for everything you need to
              know about HTML. There is plenty to dive into on Learn-HTML.org, a
              free online module course that will take you step-by-step into the
              world of coding. The site offers tutorials for HTML beginners that
              show them how to build HTML and CSS sites from scratch
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>What should we learn for ReactJS?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-start text-gray-500 dark:text-gray-400">
              React components implement a render() method that takes input data
              and returns what to display. This example uses an XML-like syntax
              called JSX. React saves you time and money on development because
              it's component-based. You can break down an interface into
              reusable components that allow you to build dynamic user
              interfaces. This taps into the current thinking behind 'Design
              Systems'.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Why can't browsers read JSX?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Because this is a specific form of code which is not fully clear
              JavaScript or HTML and browsers don't have engines to read it. To
              make this code understandable for browsers it must be converted
              with special tools like Babel.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            Can I use Firebase only for authentication?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              You can use Firebase Authentication to allow users to sign in to
              your app using one or more sign-in methods, including email
              address and password sign-in, and federated identity providers
              such as Google Sign-in and Facebook Login.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

export default Faq;
