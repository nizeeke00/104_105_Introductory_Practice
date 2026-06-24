const portfolioData = {
    profile: {
        name: 'Кудашкин Алексей',
        profession: 'Frontend-разработчик',
        age: 20
    },
    projects: [
        { id: 1, title: 'Дизайн-система', category: 'Дизайн', likes: 245, technologies: ['Figma', 'Adobe XD'] },
        { id: 2, title: 'Портфолио-сайт', category: 'Веб', likes: 89, technologies: ['HTML', 'CSS', 'JS'] },
        { id: 3, title: 'Мобильное приложение', category: 'Дизайн', likes: 156, technologies: ['Figma', 'UX/UI'] },
        { id: 4, title: 'E-commerce', category: 'Веб', likes: 312, technologies: ['React', 'CSS', 'Node'] },
        { id: 5, title: 'Панель аналитики', category: 'Бекенд', likes: 45, technologies: ['Python', 'Django'] },
        { id: 6, title: 'Игровой лендинг', category: 'Веб', likes: 178, technologies: ['HTML', 'CSS', 'JS', 'GSAP'] }
    ],
    preferences: new Map([
        ['theme', 'dark'],
        ['language', 'ru']
    ])
};

console.log(Object.keys(portfolioData.profile));

const best = portfolioData.projects.filter(p => p.likes > 100).map(p => `Проект: ${p.title} из категории ${p.category}`);
console.log(best);

let total = 0;
portfolioData.projects.forEach(p => total += p.likes);
console.log('Общее число лайков:', total);

const techs = new Set();
portfolioData.projects.forEach(p => p.technologies.forEach(t => techs.add(t)));
console.log(techs);
