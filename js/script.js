document
   .getElementById("form-register")
   .addEventListener("submit", async (e) => {
      e.preventDefault();

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      const handleForm = [
         {
            email: email,
            password: password,
         },
      ];

      console.log(handleForm);

      if (!email) {
         alert("key email Please !!🤬");
         return;
      }

      if (password.length < 6) {
         alert("Password should most 6 characters");
         return;
      }

      document.getElementById("form-register").reset();
   });
