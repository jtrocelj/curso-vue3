<template>

    <div class="flex flex-col">
        <!-- TOP MENU -->
         <TopMenu></TopMenu>
        <main>
        <!-- SIDE MENU -->
            <SideMenu></SideMenu>

            <router-view></router-view>
        </main>
    
    </div>

</template>

<script lang="ts" setup>
import TopMenu from '@/modules/common/components/TopMenu.vue'
import SideMenu from '../components/SideMenu.vue';

</script>