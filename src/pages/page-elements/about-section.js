import { createDiv, createImage, createTitle, createParagraph } from "./elements";

export function createAboutSection() {
    const content = document.getElementById('content');

    const aboutContainer = createDiv('about-container');
    aboutContainer.classList.add('about-container');

    const titleParagraphContainer = createDiv('about-t-p-container');
    titleParagraphContainer.classList.add('about-t-p-container');

    const aboutImage = createImage('about-image', '/img/home.jpg');
    aboutImage.classList.add('about-image');

    const aboutTitle = createTitle(1, 'about-title', '24/7 Rooftop Restaurant');
    aboutTitle.classList.add('about-title');

    const aboutParagraph = createParagraph('about-paragraph', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga odio iure sit impedit delectus reprehenderit pariatur rem maiores illo qui vitae facere itaque tenetur esse nostrum modi ipsam, corrupti labore molestiae deleniti, ex assumenda. Numquam cum hic modi consequatur, aliquid debitis deleniti vero quam libero molestiae excepturi ducimus ea provident.');
    aboutParagraph.classList.add('about-paragraph');

    content.appendChild(aboutContainer);
    aboutContainer.appendChild(aboutImage);
    aboutContainer.appendChild(titleParagraphContainer);
    titleParagraphContainer.appendChild(aboutTitle);
    titleParagraphContainer.appendChild(aboutParagraph);
}