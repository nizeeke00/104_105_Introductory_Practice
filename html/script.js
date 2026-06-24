const projects = [
    { id: 1, title: 'Дизайн-система', category: 'Дизайн', likes: 245, technologies: ['Figma', 'Adobe XD'] },
    { id: 2, title: 'Портфолио-сайт', category: 'Веб', likes: 89, technologies: ['HTML', 'CSS', 'JS'] },
    { id: 3, title: 'Мобильное приложение', category: 'Дизайн', likes: 156, technologies: ['Figma', 'UX/UI'] },
    { id: 4, title: 'E-commerce', category: 'Веб', likes: 312, technologies: ['React', 'CSS', 'Node'] },
    { id: 5, title: 'Панель аналитики', category: 'Бекенд', likes: 45, technologies: ['Python', 'Django'] },
    { id: 6, title: 'Игровой лендинг', category: 'Веб', likes: 178, technologies: ['HTML', 'CSS', 'JS', 'GSAP'] }
];

const galleryContainer = document.querySelector('.projects-gallery');

projects.forEach(project => {
    const card = document.createElement('div');
    card.classList.add('project-card');
    
    const title = document.createElement('h3');
    title.textContent = project.title;
    
    const category = document.createElement('p');
    category.textContent = project.category;
    
    const likes = document.createElement('span');
    likes.textContent = ` ${project.likes}`;
    
    card.append(title, category, likes);
    galleryContainer.append(card);
});
