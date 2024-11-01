<template>

<TopMenu/>

<RouterView></RouterView>

<!-- Footer -->
<FooterTemplate></FooterTemplate>


</template>

<script   lang="ts" setup>
import TopMenu from '../components/TopMenu.vue';
import FooterTemplate from '../components/FooterTemplate.vue';

</script>