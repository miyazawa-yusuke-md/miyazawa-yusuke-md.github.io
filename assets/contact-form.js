"use strict";
(() => {
  const form = document.getElementById("contact-form");
  if (!form) return;
  const fields = document.getElementById("contact-fields");
  const button = document.getElementById("contact-submit");
  const notice = document.getElementById("form-setup-notice");
  const endpoint = String(window.CONTACT_FORM_ENDPOINT || "").trim();
  // Fail closed. A missing or malformed configuration must never look successful.
  const valid = /^https:\/\/formspree\.io\/f\/[a-zA-Z0-9]{6,64}$/.test(endpoint)
    && !/FORM_ID|YOUR_|EXAMPLE/i.test(endpoint);
  form.addEventListener("submit", (event) => {
    if (!valid || form.dataset.ready !== "true") {
      event.preventDefault();
      notice.hidden = false;
    }
    // For a configured form use a real native POST, including Formspree's
    // hosted CAPTCHA / confirmation. No simulated success or local storage.
  });
  if (!valid) return;
  form.action = endpoint;
  form.dataset.ready = "true";
  fields.disabled = false;
  button.disabled = false;
  button.textContent = "送信する / Send";
  notice.hidden = true;
})();
