/*
  scripts/main.js
  Global JavaScript for Macha Makings

  This file contains JavaScript code that provides interactivity for the site,
  such as handling the mobile navigation menu.
*/

// --- Mobile Navigation Toggle ---
/*
  This script handles the functionality of the mobile navigation menu.
  When the hamburger icon is clicked, it toggles an 'active' class on both
  the icon and the mobile navigation menu. The CSS then uses this 'active'
  class to show/hide the menu and animate the hamburger icon into an 'X'.
*/

// The 'DOMContentLoaded' event ensures that the script runs only after the
// entire HTML document has been loaded and parsed. This prevents errors
// that can occur if the script tries to access elements that don't exist yet.
document.addEventListener('DOMContentLoaded', () => {

  // Get references to the hamburger button and the mobile navigation menu.
  // Using 'const' is best practice for variables that will not be reassigned.
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');

  // Check if both elements were found in the document. This is a good
  // defensive programming practice.
  if (hamburger && mobileNav) {

    // Add a 'click' event listener to the hamburger button.
    // When the button is clicked, the arrow function () => {...} is executed.
    hamburger.addEventListener('click', () => {

      // The 'classList.toggle' method adds the 'active' class if it's not
      // present, and removes it if it is. This is a concise way to handle
      // the on/off state.
      hamburger.classList.toggle('active');
      mobileNav.classList.toggle('active');
    });
  }

    // --- Sitemap Page ---
    const saveContactButton = document.getElementById('save-contact');
    if (saveContactButton) {
        saveContactButton.addEventListener('click', () => {
            alert('Contact information saved! (Placeholder)');
        });
    }

    const copyLinkButton = document.getElementById('copy-link-button');
    const sitemapLink = document.getElementById('sitemap-link');
    if (copyLinkButton && sitemapLink) {
        copyLinkButton.addEventListener('click', () => {
            sitemapLink.select();
            sitemapLink.setSelectionRange(0, 99999); // For mobile devices
            document.execCommand('copy');
            alert('Link copied to clipboard!');
        });
    }
});

function copyLink() {
    const linkInput = document.getElementById('shareLink');
    const textToCopy = linkInput.value;
    const copyButton = document.querySelector('.share-link-container button');

    // Use the modern Clipboard API
    navigator.clipboard.writeText(textToCopy).then(() => {
        // Provide user feedback
        const originalButtonText = copyButton.textContent;
        copyButton.textContent = 'Copied!';

        // Change the text back after a short delay
        setTimeout(() => {
            copyButton.textContent = originalButtonText;
        }, 2000); // 2 seconds
    }).catch(err => {
        console.error('Failed to copy text: ', err);
        // Fallback for older browsers (less common now)
        try {
            linkInput.select();
            document.execCommand('copy');
            const originalButtonText = copyButton.textContent;
            copyButton.textContent = 'Copied!';
            setTimeout(() => {
                copyButton.textContent = originalButtonText;
            }, 2000);
        } catch (e) {
            console.error('Fallback copy method failed: ', e);
            alert('Failed to copy link.');
        }
    });
}
