document.addEventListener("DOMContentLoaded", async () => {
   try {
      const response = await fetch("http://127.0.0.1:3000/api/admin", {
         method: "GET",
         credentials: "include", // ให้ Browser ส่ง Cookie ไปด้วย
      });

      if (!response.ok) {
         window.location.href = "../login.html";
         return;
      }

      const data = await response.json();
      console.log("Admin Data:", data);
   } catch (err) {
      console.error("Error:", err);
      alert("Failed to load admin data.");
   }
});



const logout = async () => {
   try {
      const res = await fetch("http://127.0.0.1:3000/api/logout", {
         method: "POST",
         headers: {
            "Content-type": "application/json",
         },
         credentials: "include",
      });

      if (res.ok) {
         const overlay = document.querySelector(".loading-overlay");
         const spinner = document.querySelector(".spinner");
   
         overlay.style.display = "flex";
         spinner.style.display = "block";
   
         setTimeout(() => {
            window.location.href = "../../index.html";
         }, 400);
      } else {
         console.error("Logout failed:", await res.json());
      }
   } catch (err) {
      console.log(err);
   }
};


