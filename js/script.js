let app = new Vue (
    {
        el: "#root",
        data: {
            emails: [],
            neededEmails: 10,
        },
        mounted: function () {
            for (var i = 0; i < this.neededEmails; i++) {
                axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then( (result) => {
                    this.emails.push(result.data.response);
                });
            }
        }
    }
);
