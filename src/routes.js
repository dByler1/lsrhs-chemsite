import Home from './components/Home.vue';
import SyllabusHome from './components/syllabus/SyllabusHome.vue';
import Homework from './components/Homework.vue';
import ResourcesHome from './components/resources/ResourcesHome.vue';
import Contact from './components/Contact.vue';

export const routes = [
    { path: '/', component: Home },
    { path: '/syllabus/home', component: SyllabusHome },
    { path: '/homework', component: Homework },
    { path: '/resources/home', component: ResourcesHome },
    { path: '/contact', component: Contact }
];