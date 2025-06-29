document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const loginError = document.getElementById('loginError');
  if (loginForm) {
    loginForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      loginError.textContent = '';
      const email = document.getElementById('loginEmail').value.trim();
      const password = document.getElementById('loginPassword').value;
      const remember = document.getElementById('loginRemember').checked;
      
      try {
        const res = await axios.post('/NeonNewsDefinitivo/login.php', { 
          email, 
          password, 
          remember 
        });
        if (res.data.success) {
          window.location.href = '/NeonNewsDefinitivo/pages/perfil.php';
        } else {
          loginError.textContent = res.data.error || 'Error desconocido.';
        }
      } catch (err) {
        loginError.textContent = err.response?.data?.error || 'Error de conexión.';
      }
    });
  }
});
