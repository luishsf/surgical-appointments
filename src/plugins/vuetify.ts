import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#1396e6',
                secondary: '#151e47',
                tertiary: '#9eaabd',
            },
        },
    },
});
