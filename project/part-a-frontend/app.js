function renderCourses(coursesList) {
    const container = document.getElementById('courses-grid');
    if (!container) return;

    container.innerHTML = '';

    if (coursesList.length === 0) {
        container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 20px;">No courses found.</p>';
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
                        <a href="course-details.html?id=${course.id}" class="btn-outline">Details</a>
                    </div>
                </div>
            </article>
        `;
        
        container.insertAdjacentHTML('beforeend', courseCard);
    });
}

function renderBooks(booksList) {
    const container = document.getElementById('books-grid');
    if (!container) return;

    container.innerHTML = '';

    if (booksList.length === 0) {
        container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 20px;">No books found.</p>';
        return;
    }

    booksList.forEach(book => {
        const bookCard = `
            <article class="book-card">
                <div class="card-header">
                    <img src="${book.image}" alt="${book.title}" loading="lazy">
                    <span class="badge ${book.level.toLowerCase()}">${book.level}</span>
                </div>
                <div class="card-body">
                    <span class="category">${getCategoryName(book.category)}</span>
                    <h3>${book.title}</h3>
                    <p>${book.description}</p>
                    <div class="card-footer">
                        <span class="price">${book.price}</span>
                        <a href="book-details.html?id=${book.id}" class="btn-outline">Details</a>
                    </div>
                </div>
            </article>
        `;
        
        container.insertAdjacentHTML('beforeend', bookCard);
    });
}

function getCategoryName(catSlug) {
    const names = {
        'web-dev': 'Web Development',
        'programming': 'Programming',
        'security': 'Cybersecurity',
        'databases': 'Databases'
    };
    return names[catSlug] || catSlug;
}


/* =========================================
   2. MAIN LOGIC (Page Detection)
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {

    const coursesContainer = document.getElementById('courses-grid');
    
    if (coursesContainer) {
        const searchInput = document.getElementById('searchInput');
        const categorySelect = document.getElementById('categorySelect');
        const levelSelect = document.getElementById('levelSelect');
        const clearBtn = document.getElementById('clearFiltersBtn');

        if (!searchInput) {
            if (typeof courses !== 'undefined') {
                renderCourses(courses.slice(0, 3));
            }
        } else {
            if (typeof courses !== 'undefined') {
                renderCourses(courses);
            }

            function filterCourses() {
                const searchTerm = searchInput.value.toLowerCase().trim();
                const selectedCategory = categorySelect.value;
                const selectedLevel = levelSelect.value;

                const filteredData = courses.filter(course => {
                    const matchesSearch = course.title.toLowerCase().includes(searchTerm) || 
                                          course.description.toLowerCase().includes(searchTerm);
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
        }
    }

    const booksContainer = document.getElementById('books-grid');
    
    if (booksContainer) {
        const searchInput = document.getElementById('searchInput'); // Books page also has search
        const categorySelect = document.getElementById('categorySelect');
        const levelSelect = document.getElementById('levelSelect');
        const clearBtn = document.getElementById('clearFiltersBtn');

        if (typeof books !== 'undefined') {
            renderBooks(books);
        }

        if (searchInput) {
            function filterBooks() {
                const searchTerm = searchInput.value.toLowerCase().trim();
                const selectedCategory = categorySelect.value;
                const selectedLevel = levelSelect.value;

                const filteredData = books.filter(book => {
                    const matchesSearch = book.title.toLowerCase().includes(searchTerm) || 
                                          book.description.toLowerCase().includes(searchTerm);
                    const matchesCategory = selectedCategory === 'all' || book.category === selectedCategory;
                    const matchesLevel = selectedLevel === 'all' || book.level === selectedLevel;

                    return matchesSearch && matchesCategory && matchesLevel;
                });

                renderBooks(filteredData);
            }

            searchInput.addEventListener('input', filterBooks);
            categorySelect.addEventListener('change', filterBooks);
            levelSelect.addEventListener('change', filterBooks);

            clearBtn.addEventListener('click', () => {
                searchInput.value = '';
                categorySelect.value = 'all';
                levelSelect.value = 'all';
                renderBooks(books);
            });
        }
    }

    const titleElement = document.getElementById('course-title');
    
    if (titleElement) {
        loadCourseDetails();
    }

    const bookTitleElement = document.getElementById('book-title');
    
    if (bookTitleElement) {
        loadBookDetails();
    }
});


/* =========================================
   3. DETAILS PAGE LOGIC
   ========================================= */

function loadCourseDetails() {
    const params = new URLSearchParams(window.location.search);
    const courseId = params.get('id');

    const course = courses.find(c => c.id == courseId);

    if (!course) {
        const container = document.querySelector('.details-container') || document.body;
        container.innerHTML = '<h2 style="text-align:center; padding: 50px;">Course not found. <a href="courses.html">Return</a></h2>';
        return;
    }

    const elTitle = document.getElementById('course-title');
    if (elTitle) elTitle.textContent = course.title;

    const elCat = document.getElementById('course-category');
    if (elCat) elCat.textContent = getCategoryName(course.category);

    const elDesc = document.getElementById('course-desc');
    if (elDesc) elDesc.textContent = course.description;

    const elLongDesc = document.getElementById('course-long-desc');
    if (elLongDesc) elLongDesc.textContent = course.longDescription || course.description;

    const elImg = document.getElementById('course-image');
    if (elImg) {
        elImg.src = course.image;
        elImg.alt = course.title;
    }
    
    const elPrice = document.getElementById('course-price');
    if (elPrice) elPrice.textContent = course.price;

    const elDuration = document.getElementById('course-duration');
    if (elDuration) elDuration.textContent = course.duration || "N/A";

    const elLevel = document.getElementById('course-level');
    if (elLevel) elLevel.textContent = course.level;

    const elInstr = document.getElementById('course-instructor');
    if (elInstr) elInstr.textContent = course.instructor || "E-Learning Team";

    const syllabusContainer = document.getElementById('course-syllabus');
    if (syllabusContainer && course.syllabus) {
        syllabusContainer.innerHTML = '';
        course.syllabus.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            li.style.marginBottom = '10px';
            li.style.paddingLeft = '10px';
            syllabusContainer.appendChild(li);
        });
    }
}

/* =========================================
   4. BOOK DETAILS PAGE LOGIC
   ========================================= */

function loadBookDetails() {
    const params = new URLSearchParams(window.location.search);
    const bookId = params.get('id');

    const book = books.find(b => b.id == bookId);

    if (!book) {
        const container = document.querySelector('.details-container') || document.body;
        container.innerHTML = '<h2 style="text-align:center; padding: 50px;">Book not found. <a href="books.html">Return</a></h2>';
        return;
    }

    const elTitle = document.getElementById('book-title');
    if (elTitle) elTitle.textContent = book.title;

    const elCat = document.getElementById('book-category');
    if (elCat) elCat.textContent = getCategoryName(book.category);

    const elDesc = document.getElementById('book-desc');
    if (elDesc) elDesc.textContent = book.description;

    const elLongDesc = document.getElementById('book-long-desc');
    if (elLongDesc) elLongDesc.textContent = book.longDescription || book.description;

    const elImg = document.getElementById('book-image');
    if (elImg) {
        elImg.src = book.image;
        elImg.alt = book.title;
    }
    
    const elPrice = document.getElementById('book-price');
    if (elPrice) elPrice.textContent = book.price;

    const elPages = document.getElementById('book-pages');
    if (elPages) elPages.textContent = book.pages || "N/A";

    const elLevel = document.getElementById('book-level');
    if (elLevel) elLevel.textContent = book.level;

    const elAuthor = document.getElementById('book-author');
    if (elAuthor) elAuthor.textContent = book.author || "E-Learning Team";

    const elISBN = document.getElementById('book-isbn');
    if (elISBN) elISBN.textContent = book.isbn || "N/A";

    const syllabusContainer = document.getElementById('book-syllabus');
    if (syllabusContainer && book.syllabus) {
        syllabusContainer.innerHTML = '';
        book.syllabus.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            li.style.marginBottom = '10px';
            li.style.paddingLeft = '10px';
            syllabusContainer.appendChild(li);
        });
    }
}