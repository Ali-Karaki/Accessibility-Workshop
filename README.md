# Site

https://ali-karaki.github.io/Accessibility-Workshop/

# Evaluation

https://wave.webaim.org/report#/https://ali-karaki.github.io/Accessibility-Workshop/

# Web Accessibility Workshop

Hello everyone! Today, we'll discuss some common web accessibility problems and demonstrate their solutions using a React app. We'll cover keyboard navigation, color contrast, alternative text for images, accessible forms. By addressing these issues, we can create a more inclusive web experience for all users, including those with disabilities.

## Keyboard Navigation

First, let's discuss keyboard navigation. People with mobility impairments often rely on keyboards or other assistive technologies to interact with websites. In our React app, we show an example of a non-focusable custom button using a `<div>` element. This is problematic because users who rely on keyboards cannot interact with this button.

To solve this issue, we use a `<button>` element, which is natively focusable and accessible. This allows users to interact with the button using a keyboard or other assistive technologies.

## Color Contrast

Next, let's talk about color contrast. People with visual impairments, including color blindness, may struggle to read text with low contrast. In our example, we show a low contrast text that can be difficult to read for some users. To address this issue, we use a high contrast color combination for the text and background, making it easier for users with visual impairments to read the content.

## Alternative Text for Images

Alternative text for images is crucial for users with visual impairments who rely on screen readers. We demonstrate an image without alt text, which is not accessible to screen reader users. To make the image accessible, we add a descriptive alt attribute to provide a textual description of the image content for screen reader users.

## Inaccessible Forms

Inaccessible forms can pose challenges for people with visual impairments or cognitive disabilities who rely on screen readers or other assistive technologies. Our app shows a form without proper HTML markup, making it difficult for assistive technology users to understand and interact with the form. To improve accessibility, we use proper HTML markup, including `<label>` elements and the `required` attribute for input fields, making it easier for users to fill out the form.

## Adjustable Font Sizes

Adjustable font sizes are an important accessibility feature that allow users to increase the size of text on the screen. This is especially useful for people with visual impairments. To implement this feature, software should provide the ability to adjust font sizes in the settings menu.

## Closed captioning

Closed captioning is a text display of the audio content of a video that can be turned on and off by the viewer. This feature is especially useful for people with hearing impairments, as it allows them to follow the dialogue of the video. For example, YouTube provides an automatic closed captioning feature for videos uploaded to its platform, and this feature can be manually edited for accuracy.

## Games

Games can be designed with accessibility features to make them playable for people with different abilities. Here are some examples of accessibility features that can be implemented in games:

- Customizable controls: allow players to map game actions to buttons or keys that are easier for them to use. This is especially useful for players with physical disabilities who may have difficulty using standard game controllers.
- Adjustable Difficulty Levels: allow players to modify settings, such as slowing down the game speed, granting invincibility to accommodate various skill levels and cognitive abilities.
- Audio cues: incorporate audio cues to provide information to players who are visually impaired. For example, a game might use sound effects to indicate when the player has successfully completed a task.
- Subtitles: make the dialogue and other audio content accessible to players who are deaf or hard of hearing. Subtitles include sound effects.

## Embedded software

Embedded software refers to software that is integrated into hardware devices, such as medical devices, smart home technology. Here are some examples of embedded software that can be designed with accessibility in mind:

- Medical devices: Medical devices can be designed with accessibility features to make them usable for people with disabilities. For example, a glucose meter could include a screen reader to read out the test results for someone who is visually impaired.
- Smart home technology: Smart home technology can be designed with accessibility features to make it easier for people with disabilities to control their home environment. For example, a smart thermostat could include voice recognition technology to allow someone with limited mobility to adjust the temperature of their home without having to physically interact with the thermostat.
- Automotive systems: Automotive systems can be designed with accessibility features to make them easier for people with disabilities to use. For example, a car's infotainment system could be designed with larger buttons and fonts to make it easier for someone with a visual impairment to read and navigate the interface.

## Conclusion

By addressing these common accessibility problems, we can create a more inclusive and user-friendly software experience for everyone. Thank you for attending this presentation, and we hope you've gained valuable insights on how to improve accessibility in your software projects!
