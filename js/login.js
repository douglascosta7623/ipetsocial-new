
function handleCredentialResponse(response) { 
  const data = jwt_decode(response.credential)

  console.log("data", data);

}

window.onload = function () {
	google.accounts.id.initialize({
		client_id: "358455980716-dfi1airggefko2poadftotl5069fgt5l.apps.googleusercontent.com",
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
      logo_alignment: "left"
		} // customization attributes
	);
	google.accounts.id.prompt(); // also display the One Tap dialog
};
