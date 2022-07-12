function handleCredentialResponse(response) {
  const data = jwt_decode(response.credential);

  console.log("data", data);
}

window.onload = function () {
  google.accounts.id.initialize({
    client_id:
      "1003534003122-pbjp2aao1s7qls8g9efahk1e98difr0n.apps.googleusercontent.com",
    callback: handleCredentialResponse,
  });

  google.accounts.id.renderButton(
    document.getElementById("buttonDiv"),
    {
      theme: "filled_blue",
      size: "large",
      type: "standard",
      text: "sign_in_with",
      shape: "pill",
      logo_alignment: "left",
    } // customization attributes
  );
  google.accounts.id.prompt(); // also display the One Tap dialog
};
