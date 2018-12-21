export default {
    data() {
        return {
            fields: {},
            errors: {},
            success: false,
            loaded: true,
            action: '',
            progressBarActive: false
        }
    },

    methods: {
        submit() {
            if (this.loaded) {
                this.progressBarActive = true;
                this.loaded = false;
                this.success = false;
                this.errors = {};
                axios.post(this.action, this.fields).then(response => {
                    this.fields = {}; //Clear input fields.
                    this.loaded = true;
                    this.success = true;
                }).catch(error => {
                    this.loaded = true;
                    if (error.response.status === 422) {
                        this.errors = error.response.data.errors || {};
                    }
                });
            }
        },
    },
    mounted() {
        this.timer = setInterval(() => {
            if(this.success === true ){
                this.progressBarValue = 100;
                clearInterval(timer);
            }
            if(this.progressBarActive){
                this.progressBarValue +=30;
            }
        }, 2000)
    }
}