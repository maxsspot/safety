{
    const aab = localStorage.getItem ("LdoOdk32x");
    if (aab == "fSxem21") {
        eea.display = "none";
        eer.display = "block";
    }
    const eea = document.getElementById ("eea").style;
    const eer = document.getElementById ("eer").style;
    const password = "nggyunglyd32!";
    const guess = document.getElementById ("req");
    function attempt () {
        if (password == guess.value) {
            eea.display = "none";
            eer.display = "block";
            localStorage.getItem ("LdoOdk32x", "fSxem21");
        } else {
            location.reload();
        }
    }
    function send () {
        if (window.Notification && Notification.permission !== "denied") {
	Notification.requestPermission((status) => {
    // status is "granted", if accepted by user
		var n = new Notification(document.getElementById("title").value, {
			body: document.getElementById("info").value,
			icon: 'https://imgs.search.brave.com/1M_Ubq8q0eZ_jPZJLpKtQuit9e8XnBpZE-McYDYwP5A/rs:fit:512:512:1/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvYmFzaWMtdWkt/ZWxlbWVudHMtMjQv/NTEyLzEwMDFfQWxl/cnRfZGFuZ2VyX3dh/cm5pbmdfc2lnbi01/MTIucG5n' // optional
		})
	})
}
    }
}
