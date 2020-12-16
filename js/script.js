let app = new Vue (
    {
        el: "#root",
        data: {
            emails: [],
        },
        mounted: function () {
            for (var i = 0; i < 10; i++) {
                axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then( (result) => {
                    this.emails.push(result.data.response);
                });
            }
        }
    }
);
