$(document).ready(
    function () {
        for (let i = 0; i < 10; i++) {
            $.ajax(
                {
                    url: "https://flynn.boolean.careers/exercises/api/random/mail",
                    method: "GET",
                    success: function (data, stato) {
                        const email = data.response;
                        console.log(email);
                        $("#mail-list").append(`
                            <li>${email}</li>
                        `)
                    },
                    error: function (richiesta, stato, errori) {
                        alert("E' avvenuto un errore. " + errore);
                    }
                }
            );
        }
    }
);
