// problem1.js - Interactive DOM Manipulation
// Modern JavaScript using const/let and querySelector()

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Image Replacement and Styling
    // Find the existing KKU logo image
    const logoImage = document.querySelector('img');
    
    if (logoImage) {
        // Replace with Faculty of Engineering image
        logoImage.src = 'https://www.en.kku.ac.th/wp-content/uploads/2019/07/eng-logo.png';
        logoImage.alt = 'Faculty of Engineering KKU';
        
        // Create a clickable link wrapper
        const linkWrapper = document.createElement('a');
        linkWrapper.href = 'https://www.en.kku.ac.th';
        linkWrapper.target = '_blank'; // Open in new tab for better UX
        
        // Get the parent element of the image
        const imageParent = logoImage.parentNode;
        
        // Insert the link before the image
        imageParent.insertBefore(linkWrapper, logoImage);
        
        // Move the image inside the link
        linkWrapper.appendChild(logoImage);
        
        // Add hover effect for better user experience
        logoImage.style.cursor = 'pointer';
        logoImage.style.transition = 'opacity 0.3s ease';
        
        // Add hover effects
        linkWrapper.addEventListener('mouseenter', function() {
            logoImage.style.opacity = '0.8';
        });
        
        linkWrapper.addEventListener('mouseleave', function() {
            logoImage.style.opacity = '1';
        });
    }
    
    // 2. Dynamic Content Creation
    // Create a new paragraph element
    const newParagraph = document.createElement('p');
    
    // Set the text content
    newParagraph.innerHTML = 'We hope you enjoy learning';
    
    // Apply styling using JavaScript
    newParagraph.style.color = 'white';
    newParagraph.style.backgroundColor = 'black';
    newParagraph.style.fontSize = '24px';
    newParagraph.style.padding = '15px';
    newParagraph.style.textAlign = 'center';
    newParagraph.style.margin = '20px 0';
    newParagraph.style.borderRadius = '8px';
    newParagraph.style.fontWeight = 'bold';
    newParagraph.style.boxShadow = '0 2px 4px rgba(0,0,0,0.3)';
    
    // Find where to insert the paragraph (after the image)
    const imageContainer = document.querySelector('img').closest('div') || document.querySelector('img').parentNode;
    
    // Insert the paragraph after the image container
    if (imageContainer.nextSibling) {
        imageContainer.parentNode.insertBefore(newParagraph, imageContainer.nextSibling);
    } else {
        imageContainer.parentNode.appendChild(newParagraph);
    }
    
    // 3. Document Metadata Modification
    // Change the HTML document title
    document.title = 'KKU Engineering';
    
    // 4. Additional Responsive Design Enhancements
    // Ensure the image is responsive
    if (logoImage) {
        logoImage.style.maxWidth = '100%';
        logoImage.style.height = 'auto';
        logoImage.style.display = 'block';
        logoImage.style.margin = '0 auto';
    }
    
    // Make the paragraph responsive
    newParagraph.style.maxWidth = '90%';
    newParagraph.style.margin = '20px auto';
    newParagraph.style.wordWrap = 'break-word';
    
    // Add media query effects through JavaScript for mobile
    function applyMobileStyles() {
        if (window.innerWidth <= 480) {
            newParagraph.style.fontSize = '18px';
            newParagraph.style.padding = '12px';
        } else {
            newParagraph.style.fontSize = '24px';
            newParagraph.style.padding = '15px';
        }
    }
    
    // Apply mobile styles on load and resize
    applyMobileStyles();
    window.addEventListener('resize', applyMobileStyles);
    
    // Add a subtle animation to the new paragraph
    newParagraph.style.opacity = '0';
    newParagraph.style.transform = 'translateY(20px)';
    newParagraph.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    
    // Animate in after a short delay
    setTimeout(() => {
        newParagraph.style.opacity = '1';
        newParagraph.style.transform = 'translateY(0)';
    }, 300);
    
    console.log('DOM manipulation completed successfully!');
    console.log('- Image replaced with Faculty of Engineering logo');
    console.log('- Clickable link added to image');
    console.log('- New styled paragraph created');
    console.log('- Document title changed to "KKU Engineering"');
    console.log('- Responsive design applied');
});