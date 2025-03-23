document
   .getElementById("form-register")
   .addEventListener("submit", async (e) => {
      e.preventDefault();
      
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const status = document.getElementById("message");
      const submitButton = document.getElementById("submit-btn");

      const handleForm = {
         name: name,
         email: email,
         password: password,
      };

      if (!email) {
         alert("Please enter an email address.");
         return;
      }

      if (password.length < 6) {
         alert("Password must be at least 6 characters.");
         return;
      }

      submitButton.disabled = true;
      status.textContent = "Processing...";
      try {
         const response = await fetch("http://127.0.0.1:3000/api/register", {
            method: "POST",
            headers: {
               "Content-type": "application/json",
            },
            body: JSON.stringify(handleForm),
         });

         if (response.ok) {
            const data = await response.json();
            console.log(data);
            status.textContent = data.message;
            document.getElementById("form-register").reset();
         } else {
            const errorData = await response.json();
            status.textContent = `❌ ${errorData.message}`;
         }
      } catch (err) {
         console.log(err);
         status.textContent = `❌ ${err.message}`;
      } finally {
         submitButton.disabled = false;
      }
   });
