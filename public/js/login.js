const loginHandler = async (e) => {
    e.preventDefault();
  
    const username = document.getElementById('username-login').value.trim();
    const password = document.getElementById('password-login').value.trim();
   
    if (username && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: {'Content-Type': 'application/json'}
      });
  
      if (response.ok) {
        document.location.replace('/')
      } else {
        alert("Fail")
      }
    }
  }

document
.querySelector('.login-class')
.addEventListener('submit', loginHandler);