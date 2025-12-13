document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registerForm');
    const passwordInput = document.getElementById('password');
    const confirmInput = document.getElementById('confirm-password');
    const matchError = document.getElementById('match-error');

    confirmInput.addEventListener('input', () => {
        if (confirmInput.value !== passwordInput.value) {
            confirmInput.setCustomValidity('Οι κωδικοί δεν ταιριάζουν');
            matchError.style.display = 'block';
        } else {
            confirmInput.setCustomValidity('');
            matchError.style.display = 'none';
        }
    });

    // 2. Διαχείριση Υποβολής Φόρμας
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (!form.checkValidity()) {
            return; 
        }

        const birthDate = new Date(document.getElementById('birthdate').value);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        if (age < 16) {
            alert('Πρέπει να είστε άνω των 16 ετών για εγγραφή.');
            return;
        }

        const selectedInterests = Array.from(document.querySelectorAll('input[name="interests"]:checked'))
            .map(cb => cb.value);

        const formData = {
            fullname: document.getElementById('fullname').value,
            email: document.getElementById('email').value,
            birthdate: document.getElementById('birthdate').value,
            level: document.querySelector('input[name="level"]:checked').value,
            interests: selectedInterests,
            registeredAt: new Date().toISOString()
        };

        console.log('User Data:', formData);

        saveUserLocally(formData);

        showSuccessSummary(formData);
    });
});

function saveUserLocally(data) {
    localStorage.setItem('currentUser', JSON.stringify(data));
}

function showSuccessSummary(data) {
    const formContainer = document.querySelector('.form-container');
    const successDiv = document.getElementById('success-message');
    
    formContainer.style.display = 'none';
    
    successDiv.classList.remove('hidden');
    document.getElementById('summary-name').textContent = data.fullname;
    
    document.getElementById('summary-data').textContent = JSON.stringify(data, null, 2);
}