# Web Accessibility Workshop

Hello everyone! Today, we'll discuss some common web accessibility problems and demonstrate their solutions using a React app. We'll cover keyboard navigation, color contrast, alternative text for images, accessible forms, and headings and landmarks. By addressing these issues, we can create a more inclusive web experience for all users, including those with disabilities.

## Keyboard Navigation

First, let's discuss keyboard navigation. People with mobility impairments often rely on keyboards or other assistive technologies to interact with websites. In our React app, we show an example of a non-focusable custom button using a `<div>` element. This is problematic because users who rely on keyboards cannot interact with this button.

To solve this issue, we use a `<button>` element, which is natively focusable and accessible. This allows users to interact with the button using a keyboard or other assistive technologies.

## Color Contrast

Next, let's talk about color contrast. People with visual impairments, including color blindness, may struggle to read text with low contrast. In our example, we show a low contrast text that can be difficult to read for some users. To address this issue, we use a high contrast color combination for the text and background, making it easier for users with visual impairments to read the content.

## Alternative Text for Images

Alternative text for images is crucial for users with visual impairments who rely on screen readers. We demonstrate an image without alt text, which is not accessible to screen reader users. To make the image accessible, we add a descriptive alt attribute to provide a textual description of the image content for screen reader users.

## Inaccessible Forms

Inaccessible forms can pose challenges for people with visual impairments or cognitive disabilities who rely on screen readers or other assistive technologies. Our app shows a form without proper HTML markup, making it difficult for assistive technology users to understand and interact with the form. To improve accessibility, we use proper HTML markup, including `<label>` elements and the `required` attribute for input fields, making it easier for users to fill out the form.

## Headings and Landmarks

Lastly, we address the use of headings and landmarks. Proper use of these elements is crucial for users with visual impairments, cognitive disabilities, or learning disabilities who rely on assistive technologies to navigate content. We show an example of non-semantic markup and improper heading hierarchy. To improve accessibility, we use semantic HTML elements like `<header>`, `<main>`, `<section>`, and `<footer>` along with hierarchical headings, such as `<h1>` and `<h2>`. This helps users with assistive technologies to better understand and navigate the content.

## Conclusion

By addressing these common accessibility problems, we can create a more inclusive and user-friendly web experience for everyone. Thank you for attending this workshop, and we hope you've gained valuable insights on how to improve web accessibility in your projects!
