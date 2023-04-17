import { createImage } from "./elements";

export function createSection1() {
    const content = document.getElementById('content');
    const section = document.createElement('section');
    const image = createImage('title-image', '/img/chefina.jpg');
    image.classList.add('image-title');
    section.classList.add('snacks');

    content.appendChild(section);
    section.appendChild(image);
}