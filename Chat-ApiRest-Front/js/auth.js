document.addEventListener('DOMContentLoaded', () => {
    // Elementos del DOM
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const showRegister = document.getElementById('showRegister');
    const showLogin = document.getElementById('showLogin');
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');

    // Mostrar formulario de registro
    showRegister.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.classList.add('hidden');
        registerForm.classList.remove('hidden');
    });

    // Mostrar formulario de login
    showLogin.addEventListener('click', (e) => {
        e.preventDefault();
        registerForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
    });

    // Login
    loginBtn.addEventListener('click', () => {
        const username = document.getElementById('loginUsername').value.trim();
        const password = document.getElementById('loginPassword').value.trim();

        if (!username || !password) {
            alert('Por favor completa todos los campos');
            return;
        }

        // Simulación de login exitoso (reemplazar con llamada real a tu API)
        console.log('Llamando a tu API de login...');
        simulateLogin(username, password);
    });

    // Registro
    registerBtn.addEventListener('click', () => {
        const username = document.getElementById('registerUsername').value.trim();
        const password = document.getElementById('registerPassword').value.trim();
        const confirm = document.getElementById('registerConfirm').value.trim();

        if (!username || !password || !confirm) {
            alert('Por favor completa todos los campos');
            return;
        }

        if (password !== confirm) {
            alert('Las contraseñas no coinciden');
            return;
        }

        // Simulación de registro exitoso (reemplazar con llamada real a tu API)
        console.log('Llamando a tu API de registro...');
        simulateRegister(username, password);
    });

    // Función simulada de login (reemplazar con llamada real a tu API)
    function simulateLogin(username, password) {
        // EJEMPLO con fetch (descomenta y adapta):
        /*
        fetch('http://tu-api.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
        .then(response => response.json())
        .then(data => {
            if (data.token) {
                localStorage.setItem('token', data.token);
                localStorage.setItem('username', username);
                window.location.href = 'chat.html';
            } else {
                alert(data.message || 'Error al iniciar sesión');
            }
        });
        */

        // Simulación exitosa (eliminar en producción)
        localStorage.setItem('token', 'simulated-token');
        localStorage.setItem('username', username);
        window.location.href = 'chat.html';
    }

    // Función simulada de registro (reemplazar con llamada real a tu API)
    function simulateRegister(username, password) {
        // EJEMPLO con fetch (descomenta y adapta):
        /*
        fetch('http://tu-api.com/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Registro exitoso. Ahora puedes iniciar sesión');
                registerForm.classList.add('hidden');
                loginForm.classList.remove('hidden');
            } else {
                alert(data.message || 'Error al registrar');
            }
        });
        */

        // Simulación exitosa (eliminar en producción)
        alert('Registro exitoso. Ahora puedes iniciar sesión');
        registerForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
    }
});