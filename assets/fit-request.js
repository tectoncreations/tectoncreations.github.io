(function () {
  document.querySelectorAll("[data-pdf-download]").forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      var name = link.getAttribute("download") || "Tecton_Forge_Laptop_Grip_Strip_Compatibility.pdf";
      fetch(link.href).then(function (response) {
        if (!response.ok) throw new Error("download failed");
        return response.blob();
      }).then(function (blob) {
        var url = URL.createObjectURL(blob);
        var saver = document.createElement("a");
        saver.href = url;
        saver.download = name;
        document.body.appendChild(saver);
        saver.click();
        saver.remove();
        setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
      }).catch(function () {
        window.open(link.href, "_blank", "noopener");
      });
    });
  });

  var openers = document.querySelectorAll("[data-fit-open]");
  var dialog = document.querySelector("[data-fit-dialog]");
  if (!openers.length || !dialog || typeof dialog.showModal !== "function") return;

  var form = dialog.querySelector("[data-fit-form]");
  var error = dialog.querySelector("[data-fit-error]");
  var success = dialog.querySelector("[data-fit-success]");
  var submit = form.querySelector("[type='submit']");
  var email = form.querySelector("[name='email']");

  function showError(message) {
    error.hidden = !message;
    error.textContent = message || "";
  }

  function openDialog() {
    form.hidden = false;
    success.hidden = true;
    submit.disabled = false;
    submit.textContent = "Send request";
    showError("");
    dialog.showModal();
    email.focus();
  }

  openers.forEach(function (opener) {
    opener.addEventListener("click", openDialog);
  });

  dialog.querySelectorAll("[data-fit-close]").forEach(function (button) {
    button.addEventListener("click", function () {
      dialog.close();
    });
  });

  dialog.addEventListener("click", function (event) {
    if (event.target === dialog) dialog.close();
  });

  document.querySelectorAll("[data-fit-groups-open]").forEach(function (groupsButton) {
    var groups = document.getElementById(groupsButton.getAttribute("aria-controls"));
    if (!groups) return;
    groupsButton.addEventListener("click", function () {
      var open = groups.hidden;
      groups.hidden = !open;
      groupsButton.setAttribute("aria-expanded", open ? "true" : "false");
      groupsButton.textContent = open ? "Hide grip strip groups" : "See grip strip groups, thinnest to thickest";
    });
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    showError("");
    if (form.elements._honey.value) {
      form.hidden = true;
      success.hidden = false;
      return;
    }
    if (form.elements.loose.value === form.elements.tight.value) {
      showError("Choose two different strips so we can size one between the loose fit and the tight fit.");
      return;
    }

    var address = form.elements.email.value.trim();
    submit.disabled = true;
    submit.textContent = "Sending…";

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        access_key: "a974902d-4184-421c-bd11-fd85515d3d09",
        subject: "Grip strip between a loose and tight fit",
        from_name: "Tecton Forge fit request",
        email: address,
        "Loose Grip Strip Selection": form.elements.loose.value,
        "Tight Grip Strip Selection": form.elements.tight.value,
        "Laptop model": form.elements.laptop.value.trim(),
        botcheck: ""
      })
    }).then(function (response) {
      return response.json().then(function (data) {
        if (!response.ok || !data || data.success !== true) {
          var failure = new Error("send failed");
          failure.detail = data && data.message;
          throw failure;
        }
        form.reset();
        form.hidden = true;
        success.hidden = false;
      });
    }).catch(function (error) {
      submit.disabled = false;
      submit.textContent = "Send request";
      showError((error && error.detail) || "We couldn't send that. Please try again.");
    });
  });
})();
