import { createApp } from 'vue';

import App from './App.vue';
// import TheHeader from './components/TheHeader.vue';
import BaseBadge from './components/BaseBadge.vue';
// import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';

import BaseCard from './components/BaseCardSlot.vue';

const app = createApp(App);

// app.component('the-header', TheHeader);
app.component('base-badge', BaseBadge);
// app.component('badge-list', BadgeList);
app.component('user-info', UserInfo);
app.component('base-card', BaseCard);

app.mount('#app');
