document.getElementById('employeeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    document.querySelectorAll('.error').forEach(function(error) {
        error.textContent = '';
    });

    let isValid = true;

    const name = document.getElementById('name').value.trim();
    if (name === '') {
        document.getElementById('nameError').textContent = 'Nama harus diisi.';
        isValid = false;
    }

    const email = document.getElementById('email').value.trim();
    if (email === '') {
        document.getElementById('emailError').textContent = 'Email harus diisi.';
        isValid = false;
    }

    const position = document.getElementById('position').value.trim();
    if (position === '') {
        document.getElementById('positionError').textContent = 'Jabatan harus diisi.';
        isValid = false;
    }

    const salary = document.getElementById('salary').value.trim();
    if (salary === '') {
        document.getElementById('salaryError').textContent = 'Gaji harus diisi.';
        isValid = false;
    }

    if (isValid) {
        alert('Form berhasil disubmit!');
    }
});