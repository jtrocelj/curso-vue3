<template>
    <section class="flex flex-col">
        <h1>Personaje <small class="text-blue-600">#{{ id }}</small></h1>
        <h1 class="text-orange-700">{{ character }}</h1>
        <!-- <img src="https://dragonball-api.com/api/characters/1" 
        alt="" width="200" height="200"
        > -->

        <img :src="characterImage" id="characterImage" alt="Character Image" width="200" height="200" />
        <RouterLink class="bg-green-600 text-white rounded-xl" :to="{ name: 'dball', params: { id: nextId } }" @click.prevent="fetchNextCharacter">Siguiente</RouterLink>  <br>
        <RouterLink class="bg-slate-400 text-white rounded-xl" :to="{ name: 'dball', params: { id: beforeId } }" @click.prevent="fetchBeforeCharacter">Retroceder</RouterLink>    </section>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue';

// Definir interfaz para props
interface Props {
  id: string;
}

// Definir props
const props = defineProps<Props>();

// Declarar variable reactiva para la imagen del personaje
const characterImage = ref<string>('');
const character = ref<string>('');

// Declarar el ID del siguiente personaje
const nextId = ref<number>(parseInt(props.id) + 1);
const beforeId = ref<number>(parseInt(props.id) - 1);

// Función para obtener los datos del personaje
const fetchCharacter = async (id: number) => {
  const apiURL = `https://dragonball-api.com/api/characters/${id}`;
  try {
    const response = await fetch(apiURL);
    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.statusText}`);
    }
    const data = await response.json();
    characterImage.value = data.image; 
    character.value = data.name; 
  } catch (error) {
    console.error('Error fetching character data:', error);
  }
};

onMounted(() => {
  fetchCharacter(parseInt(props.id)); 
});


const fetchNextCharacter = () => {
  nextId.value += 1; 
  fetchCharacter(nextId.value); 
};

const fetchBeforeCharacter = () => {
  beforeId.value -= 1; 
  fetchCharacter(beforeId.value); 
};


// Observar cambios en el prop 'id' para actualizar la imagen
watch(() => props.id, (newId) => {
    nextId.value = parseInt(newId) + 1;
    beforeId.value = parseInt(newId) - 1;
  fetchCharacter(parseInt(newId)); 
});

</script>

