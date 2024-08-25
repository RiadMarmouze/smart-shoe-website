// form-handler.js

// Import the Firestore instance from your config file
import { db } from "./config.js";
import {
  collection,
  addDoc,
  serverTimestamp,
} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";

$("#date, #department").change(function () {
  console.log("Date:", $("#date").val());
  console.log("Department:", $("#department").val());
});

$(document).ready(function () {
  // Handle form submission
  $("#appointment-form").submit(async function (event) {
    event.preventDefault();

    // Get form values using jQuery
    const name = $("#name").val();
    const email = $("#email").val();
    const date = $("#date").val();
    const department = $("#department").val();
    const phone = $("#phone").val();
    const message = $("#message").val();

    // Ensure the values are being read correctly
    console.log({ name, email, date, department, phone, message });

    try {
      // Add the form data to the 'demandes' collection in Firestore
      await addDoc(collection(db, "smart-shoe-website-demands"), {
        name: name,
        email: email,
        date: date,
        department: department,
        phone: phone,
        message: message,
        timestamp: serverTimestamp(),
      });

      // Show a success message and reset the form
      alert("Your appointment request has been sent!");
      $("#appointment-form")[0].reset();
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  });
});
