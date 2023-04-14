import './bootstrap';
import '../css/app.css';

import { createApp, h, onMounted } from 'vue';
import { createInertiaApp, Link} from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';
import { createPinia } from 'pinia'

const pinia = createPinia()
const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';
import {useStore} from './store';

window.onMounted = onMounted;

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .use(pinia)
            .component('Link', Link)
            .mixin({
                data() {
                    return {
                        store: useStore(),
                    };
                },
                async mounted() {
                    window.store = this.store;
                    // Set Request
                    window.request = props.initialPage.props.request;
                },
            })
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
