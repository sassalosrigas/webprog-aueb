document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registerForm');
    const passwordInput = document.getElementById('password');
    const confirmInput = document.getElementById('confirm-password');
    const matchError = document.getElementById('match-error');
    const interestsError = document.getElementById('interests-error');

    confirmInput.addEventListener('input', () => {
        if (confirmInput.value !== passwordInput.value) {
            confirmInput.setCustomValidity('Passwords do not match');
            matchError.style.display = 'block';
        } else {
            confirmInput.setCustomValidity('');
            matchError.style.display = 'none';
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (!form.checkValidity()) {
            return; 
        }

        // Check that at least one interest is selected
        const selectedInterests = Array.from(document.querySelectorAll('input[name="interests"]:checked'));
        
        if (selectedInterests.length === 0) {
            interestsError.style.display = 'block';
            return;
        } else {
            interestsError.style.display = 'none';
        }

        const birthDate = new Date(document.getElementById('birthdate').value);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        if (age < 16) {
            alert('You must be at least 16 years old to register.');
            return;
        }

        const interestsValues = selectedInterests.map(cb => cb.value);

        const formData = {
            fullname: document.getElementById('fullname').value,
            email: document.getElementById('email').value,
            birthdate: document.getElementById('birthdate').value,
            level: document.querySelector('input[name="level"]:checked').value,
            interests: interestsValues,
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