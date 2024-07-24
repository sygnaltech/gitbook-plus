
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


            const headingTitle = this.findGroupHeading() || "Sync ToC"; 


            const linkElement = document.createElement('a');
            linkElement.href = 'https://example.com';
            linkElement.textContent = '<< ' + headingTitle;
            headerElement.prepend(linkElement);
            console.log('Link added to header!'); 

            // .text-primary 

            // Add click event listener to link
            linkElement.addEventListener('click', (event) => {
              event.preventDefault(); // Prevent default link behavior





                // Select the container of the scrollable area
                const scrollContainer = document.querySelector<HTMLElement>('aside.relative.group > div'); // Adjust selector as needed
                console.log(scrollContainer); 

                const selectedItem = scrollContainer?.querySelector<HTMLElement>('.text-primary');
console.log(selectedItem); 

                if (selectedItem && scrollContainer) {
                  // Calculate the top position of the element within the container
                  const elementTop = selectedItem.offsetTop - 200; // 200px offset
                  
                  // Scroll to the element with the offset
                  scrollContainer.scrollTo({
                    top: elementTop,
                    behavior: 'smooth'
                  });
                }

              // // Find the navigation item with the class 'text-primary'
              // const selectedItem = document.querySelector('.text-primary');
              // if (selectedItem) {
              //   // Scroll to the navigation item
              //   selectedItem.scrollIntoView({ behavior: 'smooth', block: 'start' });


              // }
            }); 

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

    findGroupHeading(): string | undefined {
      // Find the selected item with the class text-primary
      const selectedItem = document.querySelector('.text-primary') as HTMLElement;

      if (!selectedItem) {
          console.log('Selected item not found');
          return undefined;
      }

      // Traverse up to find the closest parent UL element
      let parent = selectedItem.closest('ul');

      if (parent) {
          // Get the previous element which is assumed to be the heading container
          const previousHeading = parent.previousElementSibling as HTMLElement;

          // Validate if the found element is the heading
          if (previousHeading && previousHeading.classList.contains('px-5')) {
              console.log('Group heading found:', previousHeading.textContent?.trim());
              return previousHeading.textContent?.trim(); 
          } else {
              console.log('No group heading found');
          }
      } else {
          console.log('No parent UL found for the selected item');
      }

      return undefined;  
  }

}
