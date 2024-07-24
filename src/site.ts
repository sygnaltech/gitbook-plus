
/*
 * Site
 */

import { IRouteHandler, Page } from "@sygnal/sse";

// import gsap from 'gsap'; 
 

export class Site implements IRouteHandler {

  constructor() {
  }

  setup() {

    Page.loadEngineCSS("site.css"); 
   
  }

  exec() {

    // Put your site-level custom code here
    // it will have full access to the DOM 

console.log("test"); 



const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === 'childList') {
      const mainElement = document.querySelector('main');
      if (mainElement) {
        const headerElement = mainElement.querySelector('header');
        if (headerElement) {
          // Check if the link is already there to avoid duplicates
          if (!headerElement.querySelector('a[href="https://example.com"]')) {
            const linkElement = document.createElement('a');
            linkElement.href = 'https://example.com';
            linkElement.textContent = 'Click here';
            headerElement.prepend(linkElement);
            console.log('Link added to header!'); 
            // .text-primary
          }
        }
      }
    }
  });
});

// Configuration of the observer:
const config = { childList: true, subtree: true };

// Start observing the document body for DOM changes:
observer.observe(document.body, config);




// Call the function to execute the operation
   // this.prependLinkToHeader(); 


  }

// This function will find the first header in the first main element and prepend a link
    prependLinkToHeader() {
      // Get the first main element on the page
      const mainElement = document.querySelector('main');

      // Check if the main element exists
      if (mainElement) {
        // Get the first header element within the main element
        const headerElement = mainElement.querySelector('header');

        // Check if the header element exists
        if (headerElement) {
          // Create the link element
          const linkElement = document.createElement('a');
          linkElement.href = 'https://example.com'; // Set link URL
          linkElement.textContent = 'Click here'; // Set link text

    console.log("creating link"); 

          console.log(headerElement);

          console.log(headerElement.firstChild);

    headerElement.prepend(linkElement); 

          // Prepend the link to the header
//          headerElement.insertBefore(linkElement, headerElement.firstChild);
        } else {
          console.log('No header element found inside the main element.');
        }
      } else {
        console.log('No main element found on the page.');
      }
    }



}
