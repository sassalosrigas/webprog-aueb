function renderCourses(courses) {
    const container = document.getElementById('courses-container');
    if (!container) return;

    container.innerHTML = '';

    courses.forEach(course => {
        const html = `
            <article class="course-card">
                <img src="${course.image}" alt="${course.title}">
                <h3>${course.title}</h3>
                <p>${course.description}</p>
                <span class="badge">${course.category}</span>
                <a href="course-details.html?id=${course.id}" class="btn">Δείτε περισσότερα</a>
            </article>
        `;
        container.insertAdjacentHTML('beforeend', html);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderCourses(coursesData);
});