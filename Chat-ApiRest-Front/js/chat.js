// Configuración - Reemplaza con tus endpoints reales
const API_BASE_URL = 'http://tu-gateway.com/api';
let currentRoomId = null;
let currentUser = 'Usuario1'; // Reemplaza con tu sistema de autenticación


// Al inicio del archivo, verifica si el usuario está logueado
document.addEventListener('DOMContentLoaded', () => {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    
    if (!token || !username) {
        window.location.href = 'index.html';
        return;
    }

    // El resto de tu lógica actual del chat...
    // (todo el código que ya tenías en app.js)
    
    // Ejemplo de cómo usar el username:
    currentUser = username;
});


document.addEventListener('DOMContentLoaded', () => {
    // Elementos del DOM
    const roomNameInput = document.getElementById('roomNameInput');
    const createRoomBtn = document.getElementById('createRoomBtn');
    const roomsList = document.getElementById('roomsList');
    const messageInput = document.getElementById('messageInput');
    const sendMessageBtn = document.getElementById('sendMessageBtn');
    const messagesContainer = document.getElementById('messagesContainer');
    const currentRoomDisplay = document.getElementById('currentRoom');

    // Cargar salas iniciales (simulado)
    loadRooms();

    // Crear nueva sala
    createRoomBtn.addEventListener('click', createRoom);

    // Manejar eventos en la lista de salas
    roomsList.addEventListener('click', handleRoomActions);

    // Enviar mensaje
    sendMessageBtn.addEventListener('click', sendMessage);
    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });

    // Función para cargar salas (simulada)
    function loadRooms() {
        // En una implementación real, harías una llamada a tu API:
        // fetch(`${API_BASE_URL}/rooms`)
        //     .then(response => response.json())
        //     .then(rooms => renderRooms(rooms));
        
        // Datos de ejemplo
        const exampleRooms = [
            { id: '1', name: 'Sala General' },
            { id: '2', name: 'Sala de Trabajo' }
        ];
        
        renderRooms(exampleRooms);
    }

    // Función para renderizar salas
    function renderRooms(rooms) {
        roomsList.innerHTML = '';
        rooms.forEach(room => {
            const roomItem = document.createElement('li');
            roomItem.className = 'room-item';
            roomItem.dataset.id = room.id;
            roomItem.innerHTML = `
                <span class="room-name">${room.name}</span>
                <button class="delete-room-btn" title="Eliminar sala">×</button>
            `;
            roomsList.appendChild(roomItem);
        });
    }

    // Función para crear sala
    function createRoom() {
        const roomName = roomNameInput.value.trim();
        if (!roomName) return;

        // En una implementación real, harías:
        // fetch(`${API_BASE_URL}/rooms`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Authorization': 'Bearer TU_TOKEN_JWT'
        //     },
        //     body: JSON.stringify({ name: roomName })
        // })
        // .then(response => response.json())
        // .then(data => {
        //     if (data.success) {
        //         addRoomToUI(data.room);
        //         roomNameInput.value = '';
        //     }
        // });

        // Simulación de creación exitosa
        const newRoom = {
            id: Date.now().toString(),
            name: roomName
        };
        
        addRoomToUI(newRoom);
        roomNameInput.value = '';
    }

    // Función para añadir sala al UI
    function addRoomToUI(room) {
        const roomItem = document.createElement('li');
        roomItem.className = 'room-item';
        roomItem.dataset.id = room.id;
        roomItem.innerHTML = `
            <span class="room-name">${room.name}</span>
            <button class="delete-room-btn" title="Eliminar sala">×</button>
        `;
        roomsList.appendChild(roomItem);
    }

    // Función para manejar acciones en salas
    function handleRoomActions(e) {
        // Eliminar sala
        if (e.target.classList.contains('delete-room-btn')) {
            e.stopPropagation();
            const roomItem = e.target.closest('.room-item');
            const roomId = roomItem.dataset.id;
            deleteRoom(roomId, roomItem);
        }
        
        // Seleccionar sala
        if (e.target.classList.contains('room-item') || e.target.classList.contains('room-name')) {
            const roomItem = e.target.closest('.room-item');
            selectRoom(roomItem);
        }
    }

    // Función para eliminar sala
    function deleteRoom(roomId, roomElement) {
        if (!confirm('¿Estás seguro de eliminar esta sala?')) return;

        // En una implementación real, harías:
        // fetch(`${API_BASE_URL}/rooms/${roomId}`, {
        //     method: 'DELETE',
        //     headers: {
        //         'Authorization': 'Bearer TU_TOKEN_JWT'
        //     }
        // })
        // .then(response => response.json())
        // .then(data => {
        //     if (data.success) {
        //         roomElement.remove();
        //         if (currentRoomId === roomId) {
        //             resetChatArea();
        //         }
        //     }
        // });

        // Simulación de eliminación exitosa
        roomElement.remove();
        if (currentRoomId === roomId) {
            resetChatArea();
        }
    }

    // Función para seleccionar sala
    function selectRoom(roomItem) {
        // Desactivar todas las salas
        document.querySelectorAll('.room-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Activar sala seleccionada
        roomItem.classList.add('active');
        
        // Actualizar UI
        currentRoomId = roomItem.dataset.id;
        currentRoomDisplay.textContent = roomItem.querySelector('.room-name').textContent;
        
        // Habilitar chat
        messageInput.disabled = false;
        sendMessageBtn.disabled = false;
        
        // Cargar mensajes (simulado)
        loadMessages(currentRoomId);
    }

    // Función para resetear área de chat
    function resetChatArea() {
        currentRoomId = null;
        currentRoomDisplay.textContent = 'Selecciona una sala';
        messagesContainer.innerHTML = '';
        messageInput.disabled = true;
        sendMessageBtn.disabled = true;
    }

    // Función para cargar mensajes (simulada)
    function loadMessages(roomId) {
        // En una implementación real, harías:
        // fetch(`${API_BASE_URL}/rooms/${roomId}/messages`)
        //     .then(response => response.json())
        //     .then(messages => renderMessages(messages));
        
        // Datos de ejemplo
        const exampleMessages = [
            {
                id: '1',
                content: 'Bienvenido a esta sala de chat!',
                sender: 'Sistema',
                timestamp: new Date().toISOString()
            }
        ];
        
        renderMessages(exampleMessages);
    }

    // Función para renderizar mensajes
    function renderMessages(messages) {
        messagesContainer.innerHTML = '';
        
        messages.forEach(msg => {
            const messageElement = document.createElement('div');
            messageElement.className = 'message';
            messageElement.innerHTML = `
                <div class="meta">
                    <span class="user">${msg.sender}</span>
                    <span class="time">${formatTime(msg.timestamp)}</span>
                </div>
                <p>${msg.content}</p>
            `;
            messagesContainer.appendChild(messageElement);
        });
        
        // Scroll al final
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    // Función para enviar mensaje
    function sendMessage() {
        const content = messageInput.value.trim();
        if (!content || !currentRoomId) return;

        // En una implementación real, harías:
        // fetch(`${API_BASE_URL}/rooms/${currentRoomId}/messages`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Authorization': 'Bearer TU_TOKEN_JWT'
        //     },
        //     body: JSON.stringify({ content })
        // })
        // .then(response => response.json())
        // .then(data => {
        //     if (data.success) {
        //         messageInput.value = '';
        //         loadMessages(currentRoomId);
        //     }
        // });

        // Simulación de mensaje enviado
        const newMessage = {
            id: Date.now().toString(),
            content: content,
            sender: currentUser,
            timestamp: new Date().toISOString()
        };
        
        // Agregar mensaje al chat
        const messageElement = document.createElement('div');
        messageElement.className = 'message';
        messageElement.innerHTML = `
            <div class="meta">
                <span class="user">${newMessage.sender}</span>
                <span class="time">${formatTime(newMessage.timestamp)}</span>
            </div>
            <p>${newMessage.content}</p>
        `;
        messagesContainer.appendChild(messageElement);
        
        // Limpiar input y hacer scroll
        messageInput.value = '';
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    // Función para formatear hora
    function formatTime(timestamp) {
        const date = new Date(timestamp);
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
});