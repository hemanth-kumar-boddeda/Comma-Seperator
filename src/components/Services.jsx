import React from 'react';
import './Services.css';
const Services = () => {
  return (
    <div className="services">
      <h2>Services</h2>
      <div className="service">
        <h3>1. Commasept Service</h3>
        <p>The Commasept service allows users to insert commas into text effortlessly. This is particularly useful when dealing with lists or numerical values that require proper formatting.</p>
        <h4>Usage:</h4>
        <p>To use the Commasept service, import the `Commasept` component into your React project and render it within your application where you want to add commas to text.</p>
        <pre>
          {`import Commasept from './components/Commasept';\n\n<Commasept />`}
        </pre>
      </div>
      <div className="service">
        <h3>2. Navbar Service</h3>
        <p>The Navbar service provides a navigation bar component for easy navigation within your application. It includes links to different sections or pages, enhancing user experience and accessibility.</p>
        <h4>Usage:</h4>
        <p>To use the Navbar service, import the `Navbar` component into your React project and render it within your application to display the navigation bar.</p>
        <pre>
          {`import Navbar from './components/Navbar';\n\n<Navbar />`}
        </pre>
      </div>
      <div className="service">
        <h3>3. Sidebar Service</h3>
        <p>The Sidebar service offers a sidebar component that can be used to display additional information, navigation options, or settings within your application. It helps organize content and provides a clean user interface.</p>
        <h4>Usage:</h4>
        <p>To use the Sidebar service, import the `Sidebar` component into your React project and render it within your application to display the sidebar.</p>
        <pre>
          {`import Sidebar from './components/Sidebar';\n\n<Sidebar />`}
        </pre>
      </div>
      <div className="service">
        <h3>4. About Service</h3>
        <p>The About service provides a component for displaying information about your application, team, or project. It helps users understand the purpose and functionality of your application.</p>
        <h4>Usage:</h4>
        <p>To use the About service, import the `About` component into your React project and render it within your application to display relevant information.</p>
        <pre>
          {`import About from './components/About';\n\n<About />`}
        </pre>
      </div>
      <div className="service">
        <h3>5. Footer Service</h3>
        <p>The Footer service offers a footer component for displaying copyright information, links to important pages, or contact details within your application. It provides a consistent layout and enhances the professionalism of your application.</p>
        <h4>Usage:</h4>
        <p>To use the Footer service, import the `Footer` component into your React project and render it within your application to display the footer.</p>
        <pre>
          {`import Footer from './components/Footer';\n\n<Footer />`}
        </pre>
      </div>
    </div>
  );
};

export default Services;
