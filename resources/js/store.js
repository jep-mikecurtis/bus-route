import { defineStore } from 'pinia'
import { router } from '@inertiajs/vue3'


export const useStore = defineStore('store', {
    state: () => ({
        auth: {
            user: {
                id: null,
                name: null,
                email: null,
                email_verified_at: null,
                current_team_id: null,
            }
        },
        route: {},
        routes: [],
        routesPagination: [],
        stop: {},
        stops: [],
        stopsPagination: [],
        contact: {},
        contacts: [],
        contactsPagination: [],
        pickup: {},
        pickups: [],
        pickupsPagination: [],
        request: {},
        redirect: "",
        loadingArray: [],
    }),
    getters: {},
    actions: {
        setData(obj) {
            for (let [key, value] of Object.entries(obj)) {
                this[key] = value;
            }
        },

        async dispatch(controller, method, obj) {
            this.loadingArray.push(true);

            let data = {...obj, ...this.getQueryParams()};
            // Use Fetch With Post
            let req = await fetch('/' + controller + '/' + method, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                },
                body: JSON.stringify(data),
            });

            // Get Response
            let res = await req.json();

            // Set Data
            this.setData(res);

            if(res.redirect) {
                router.visit(res.redirect);
            }

            this.redirect = "";

            // Remove Loading
            this.loadingArray = [];
        },

        async submit(controller, method, arrayOfKeys) {
            let obj = {};
            for (let key of arrayOfKeys) {
                obj[key] = this[key];
            }
            await this.dispatch(controller, method, obj);
        },

        getQueryParams() {
            let params = new URLSearchParams(window.location.search);
            let obj = {};
            for (let [key, value] of params.entries()) {
                obj[key] = value;
            }
            return obj;
        }
    },
});
