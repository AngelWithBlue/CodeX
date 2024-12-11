

const supabaseUrl = 'https://rmejbkztpamjpdtctzlm.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJtZWpia3p0cGFtanBkdGN0emxtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM4NjY0MjcsImV4cCI6MjA0OTQ0MjQyN30.UZ01Q8a24QnXZPE4suXmN14BV9G6bfhC7FwWd0I6-Is';

const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Primero, se crea el cliente de Supabase

// Inicializa el cliente de Supabase (asegúrate de que esto está primero)

// Función para registrar un usuario
async function registerUser(email, password) {
    console.log("Iniciando registro...");
    console.log("Email:", email, "Password:", password);

    // Insertar el usuario en la base de datos
    const { data, error } = await supabase
        .from('users')
        .insert([{ email, password }]);

    if (error) {
        console.error('Error al registrar usuario:', error.message);
        alert('Error al registrar usuario: ' + error.message);
    } else {
        console.log('Usuario registrado correctamente:', data);
        alert('Usuario registrado exitosamente.');
    }
}

// Función para iniciar sesión
async function loginUser(email, password) {
    const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('email', email)
        .eq('password', password)
        .single();

    if (error || !data) {
        console.error('Error al iniciar sesión:', error ? error.message : 'Usuario no encontrado');
        alert('Correo o contraseña incorrectos.');
    } else {
        console.log('Inicio de sesión exitoso:', data);
        alert('¡Bienvenido ' + email + '!');
    }
}

// Manejo de formularios de registro e inicio de sesión
document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    await registerUser(email, password);
});

document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    await loginUser(email, password);
});
