<template>
    <section>
    
        <h3>Counter: {{ counter }}</h3>
        <h3>Square: {{ squareCount }}</h3>
    
        <div>
            <button class="p-2 bg-red-500 rounded mr-2" @click="decrementar()">-1</button>
            <button  class="p-2 bg-blue-500 rounded" @click="incrementar()">+1</button>
        </div>
    </section>
    </template>
    
    <script lang="ts"  src="./MyCounterScript2.ts"></script>
    