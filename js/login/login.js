document.getElementById("form-login").addEventListener("submit", async (e) => {
   e.preventDefault();

   const email = document.getElementById("email").value;
   const password = document.getElementById("password").value;
   const status = document.getElementById("message");

   const handleForm = {
      email: email,
      password: password,
   };

   status.textContent = "Processing...";
   try {
      const response = await fetch("http://127.0.0.1:3000/api/login", {
         method: "POST",
         headers: {
            "Content-type": "application/json",
         },
         body: JSON.stringify(handleForm),
         credentials: 'include' 
      });

      if (!response.ok) {
         const data = await response.json();
         status.textContent = `❌ ${data.message}`;
         return;
      }

      const data = await response.json();
      console.log(data.token);
      document.cookie = `token=${data.token}; path=/; secure; HttpOnly; SameSite=Strict`;
      window.location.href = "../admin.html";
   } catch (err) {
      console.log(err);
      if (err instanceof TypeError) {
         status.textContent = "❌ Network Error: Failed to fetch. Please check your network connection and try again.";
      } else {
         status.textContent = `❌ ${err.message}`;
      }
   }
});
