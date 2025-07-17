// Получаем элементы
const buttons = document.querySelectorAll('.block-menu__button');
const sections = {
    coffee: document.getElementById('coffee'),
    desserts: document.getElementById('desserts'),
    snacks: document.getElementById('snacks')
};

// Функция переключения активных состояний с анимацией
function setActive(buttonType) {
    // Скрываем все секции
    Object.values(sections).forEach(section => {
        section.classList.remove('active');
    });

    // Удаляем класс active у всех кнопок
    buttons.forEach(btn => btn.classList.remove('active'));

    // Активируем нужную секцию и кнопку
    sections[buttonType].classList.add('active');
    document.querySelector(`.block-menu__button[data-type="${buttonType}"]`).classList.add('active');
}

// Инициализация: активируем "Кофе" по умолчанию
setActive('coffee');

// Добавляем обработчики событий на кнопки
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const type = btn.getAttribute('data-type');
        setActive(type);
    });
});

document.querySelector('.top__img-coffee').addEventListener('click', () => setActive('coffee'));
document.querySelector('.top__img-desserts').addEventListener('click', () => setActive('desserts'));
document.querySelector('.top__img-snacks').addEventListener('click', () => setActive('snacks'));

function scrollToMenu() {
    document.getElementById('menu').scrollIntoView({ 
        behavior: 'smooth' // Плавная прокрутка
    });
}

