import React from "react";

const Blog = () => {
  return (
    <div className="text-justify">
      <div className="px-8 py-3">
        <h2 className="text-2xl font-medium mt-5">
          1. Tell us the differences between uncontrolled and controlled components.


        </h2>
        <p className="py-3">Controlled and uncontrolled components are two ways of handling user input specifically form inputs. </p>
        <p className="pb-3">
        Controlled component is a way to handle user inputs fully controlled by React. We do that by using state. The values of the component value are stored in state. The changes that occurs to the value are handled by React event handlers. If we want to update the value of the component, we have to  update the state using setState. They provide us more control over the user input. But in controlled component we need to write more code and they can be more complex sometimes.
        </p>
        <p className="pb-3">
            On the other hand in uncontrolled components form data are handled directly by the DOM itself. They work like  traditional HTML form elements.The data for each input element is stored in the DOM instead of the component. But rather than using an event handler for all the state updates, we can use a ref to get the values from the DOM.
        </p>
      </div>

      <div className="px-8 py-3">
        <h2 className="text-2xl font-medium mt-5">
          2. How to validate React props using PropTypes?
        </h2>
        <p className="py-3">
        We use React props to send data from one component to another. PropTypes is an internal mechanism of React  that adds type checking to component props. By using PropTypes we can make sure the correct type of properties are passed to components. 
           </p>
          <p>
          For using PropTypes we need to install the react prop-type package and import it to our project files.
          Then we use propTypes to set up type checking in react components. When we pass props to a React component, they are checked against the type definitions configured in the propTypes property. When a value is passed for a prop that do not match the predefined definition, a warning is displayed on the console.
          </p>
        
      </div>

      <div className="px-8 py-3">
        <h2 className="text-2xl font-medium mt-5">
          3. Tell us the difference between nodejs and express js.
        </h2>
        <p className="py-3">
        Node.js is a server-side runtime environment for executing JavaScript code. It is used for building server-side, input-output, event-driven apps.It is built on top of google's V8 engine. Node.js codes are written using C, C++ and JavaScript.
           </p>
          <p>
          On the other hand, Express.js is a web application framework that is built on top of Node.js. It is used for building web-apps using approaches and principles of Node.js.Express.js codes are written using  JavaScript.
          </p>
        
      </div>
      <div className="px-8 py-3">
        <h2 className="text-2xl font-medium mt-5">
          4. What is a custom hook, and why will you create a custom hook?
        </h2>
        <p className="py-3">
          A custom hook in react is a reusable JavaScript function that can use
          one or more existing react hooks and return a non jsx data that can be
          shared across multiple components. The name of a custom hook starts
          with use and it can use other hooks within it. </p>
          <p className="pb-10"> Custom hooks
          makes it easier to write cleaner code while saving time by letting us
          defining logic that are reusable and separate from the UI which
          minimizes code duplication.
          </p>
        
      </div>
    </div>
  );
};

export default Blog;
