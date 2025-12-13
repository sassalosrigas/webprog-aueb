function renderCourses(coursesList) {
    const container = document.getElementById('courses-grid');
        if (!container) return;

    container.innerHTML = '';

    if (coursesList.length === 0) {
        container.innerHTML = '<p>Δεν βρέθηκαν μαθήματα.</p>';
        return;
    }

    coursesList.forEach(course => {
        const courseCard = `
            <article class="course-card">
                <div class="card-header">
                    <img src="${course.image}" alt="${course.title}" loading="lazy">
                    <span class="badge ${course.level.toLowerCase()}">${course.level}</span>
                </div>
                <div class="card-body">
                    <span class="category">${getCategoryName(course.category)}</span>
                    <h3>${course.title}</h3>
                    <p>${course.description}</p>
                    <div class="card-footer">
                        <span class="price">${course.price}</span>
                        <a href="course-details.html?id=${course.id}" class="btn-outline">Λεπτομέρειες</a>
                    </div>
                </div>
            </article>
        `;
        
        container.insertAdjacentHTML('beforeend', courseCard);
    });
}

function getCategoryName(catSlug) {
    const names = {
        'web-dev': 'Web Development',
        'programming': 'Programming',
        'security': 'Security',
        'databases': 'Databases'
    };
    return names[catSlug] || catSlug;
}

document.addEventListener('DOMContentLoaded', () => {
    renderCourses(courses);
});

document.addEventListener('DOMContentLoaded', () => {
    renderCourses(courses);

    const searchInput = document.getElementById('searchInput');
    const categorySelect = document.getElementById('categorySelect');
    const levelSelect = document.getElementById('levelSelect');
    const clearBtn = document.getElementById('clearFiltersBtn');

    if (!searchInput) return;

    function filterCourses() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        const selectedCategory = categorySelect.value;
        const selectedLevel = levelSelect.value;

        const filteredData = courses.filter(course => {
            const matchesSearch = course.title.toLowerCase().includes(searchTerm);
            
            const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;

            const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;

            return matchesSearch && matchesCategory && matchesLevel;
        });

        renderCourses(filteredData);
    }

    searchInput.addEventListener('input', filterCourses);
    categorySelect.addEventListener('change', filterCourses);
    levelSelect.addEventListener('change', filterCourses);

    clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        categorySelect.value = 'all';
        levelSelect.value = 'all';
        renderCourses(courses);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const titleElement = document.getElementById('course-title');
    
    if (titleElement) {
        loadCourseDetails();
    }
});

function loadCourseDetails() {
    const params = new URLSearchParams(window.location.search);
    const courseId = params.get('id');

    const course = courses.find(c => c.id == courseId);

    if (!course) {
        document.querySelector('.details-container').innerHTML = '<h2>Το μάθημα δεν βρέθηκε. <a href="courses.html">Επιστροφή</a></h2>';
        return;
    }

    document.getElementById('course-title').textContent = course.title;
    document.getElementById('course-category').textContent = course.category;
    document.getElementById('course-desc').textContent = course.description;
    document.getElementById('course-long-desc').textContent = course.longDescription || course.description;
    document.getElementById('course-image').src = course.image;
    document.getElementById('course-image').alt = course.title;
    
    document.getElementById('course-price').textContent = course.price;
    document.getElementById('course-duration').textContent = course.duration || "N/A";
    document.getElementById('course-level').textContent = course.level;
    document.getElementById('course-instructor').textContent = course.instructor || "E-Learning Team";

    const syllabusContainer = document.getElementById('course-syllabus');
    if (course.syllabus) {
        course.syllabus.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            syllabusContainer.appendChild(li);
        });
    }
}