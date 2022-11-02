const grid = document.querySelector('.grid');

// array com lista das cartas
const characters = [
    'jorge1',
    'meme1',
    'meme2',
    'meme3',
    'meme4',
    'meme5',
    'meme6',
    'meme7',
    'meme8',
    'meme9',
    'meme10',
    'meme11',
]

const createElement  = (tag, className) =>{
    const element = document.createElement(tag);
    element.className = className;
    return element;
}
let firstCard ='';


const revealCard = ({target}) => {
    target.parentNode.classList.add('reveal-card');
}

const createCard = (character) => {
    
    // criação dos elementos
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../Imagens/${character}.jpg')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);
    
    return card;
}

const loadGame = () => {

    const shuffledArray = characters.sort(() => Math.random() -0.5 );

    shuffledArray.forEach((character) => {
    const card = createCard(character);
    grid.appendChild(card);

    });
}

loadGame();
