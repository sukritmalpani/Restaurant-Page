import { createDiv, createImage, createParagraph, createTitle } from "./elements";

const cardFactory = (image, title, paragraph) => {
    let idCounter = 1;
    let newId = true;
    const card = createDiv(idCounter);

    const newImage = createImage(idCounter, image);
    const newTitle = createTitle(idCounter, idCounter, title);
    const newParagraph = createParagraph(idCounter, paragraph);

    if (newId === true) {
        idCounter += 1;
    }

    newImage.classList.add('card-image');
    newTitle.classList.add('card-title');
    card.classList.add('menu-items');
    card.appendChild(newImage);
    card.appendChild(newTitle);
    card.appendChild(newParagraph);
    return card;
}

export function createSection() {
    const content = document.getElementById('content');
    const section = document.createElement('section');
    const dish = cardFactory('/img/dish1.jpg', `Burger`, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, nihil.');
    const dish1 = cardFactory('/img/dish1.jpg', `Burger`, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, nihil.');
    const dish2 = cardFactory('/img/dish1.jpg', `Burger`, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, nihil.');
    const dish3 = cardFactory('/img/dish1.jpg', 'Burger', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, nihil.');
    const dish4 = cardFactory('/img/dish1.jpg', `Burger`, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, nihil.');
    const dish5 = cardFactory('/img/dish1.jpg', `Burger`, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, nihil.');
    const dish6 = cardFactory('/img/dish1.jpg', `Burger`, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, nihil.');
    const dish7 = cardFactory('/img/dish1.jpg', `Burger`, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, nihil.');
    const dish8 = cardFactory('/img/dish1.jpg', 'Burger', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, nihil.');

    content.appendChild(section);
    section.appendChild(dish);
    section.appendChild(dish1);
    section.appendChild(dish2);
    section.appendChild(dish3);
    section.appendChild(dish4);
    section.appendChild(dish5);
    section.appendChild(dish6);
    section.appendChild(dish7);
    section.appendChild(dish8);
    section.classList.add('menu-grid')


}