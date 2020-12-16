$(document).ready(
    function () {
        let neededEmails = 10;
        for (let i = 0; i < neededEmails; i++) {
            $.ajax(
                {
                    url: "https://flynn.boolean.careers/exercises/api/random/mail",
                    method: "GET",
                    success: function (data, stato) {
                        const email = data.response;
                        $("#mail-list").append(`
                            <li>${email}</li>
                        `);
                    },
                    error: function (richiesta, stato, errori) {
                        alert("E' avvenuto un errore. " + errore);
                    }
                }
            );
        }
    }
);
