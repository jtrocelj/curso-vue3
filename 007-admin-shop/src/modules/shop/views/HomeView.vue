<template>

<!-- Title -->
<div class="pt-32  bg-white">
  <h1 class="text-center text-2xl font-bold text-gray-800">All Products</h1>
</div>

<!-- Tab Menu -->
<div class="flex flex-wrap items-center  overflow-x-auto overflow-y-hidden py-10 justify-center   bg-white text-gray-800">
	<a rel="noopener noreferrer" href="#" class="flex items-center flex-shrink-0 px-5 py-3 space-x-2text-gray-600">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
			<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
		</svg>
		<span>Architecto</span>
	</a>
	<a rel="noopener noreferrer" href="#" class="flex items-center flex-shrink-0 px-5 py-3 space-x-2 rounded-t-lg text-gray-900">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
			<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
			<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
		</svg>
		<span>Corrupti</span>
	</a>
	<a rel="noopener noreferrer" href="#" class="flex items-center flex-shrink-0 px-5 py-3 space-x-2  text-gray-600">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
			<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
		</svg>
		<span>Excepturi</span>
	</a>
	<a rel="noopener noreferrer" href="#" class="flex items-center flex-shrink-0 px-5 py-3 space-x-2  text-gray-600">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
			<circle cx="12" cy="12" r="10"></circle>
			<polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
		</svg>
		<span>Consectetur</span>
	</a>
</div>


<!-- Product List -->
<section class="py-10 bg-gray-100">
  <div class="mx-auto grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    <article v-for="product in products" :key="product.id" class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300">
      <a href="#">
        <div class="relative flex items-end overflow-hidden rounded-xl">
          <img :src="product.image[0]" alt="Product Image" class="w-full" />
          <div class="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
            <button class="text-sm">Add to cart</button>
          </div>
        </div>

        <div class="mt-1 p-2">
          <h2 class="text-slate-700">{{ product.title }}</h2>
          <p class="mt-1 text-sm text-slate-400">{{ product.gender }}</p>

          <div class="mt-3 flex items-end justify-between">
            <p class="text-lg font-bold text-blue-500">${{ product.price }}</p>

            <div v-if="product.stock > 0" class="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
              <button class="text-sm">Add to cart</button>
            </div>
            <p v-else class="text-sm text-red-500">Out of stock</p>
          </div>
        </div>
      </a>
    </article>
  </div>
</section>

<ButtonPagination 
:has-more-data="!!products && products.length < 10" 
:page="page"/>


</template>

<script lang="ts" setup>
  import { useQuery, useQueryClient } from '@tanstack/vue-query';
  import { getProducts} from '../../../modules/products/actions/get-products.action';
  import ButtonPagination from '../../../modules/common/components/ButtonPagination.vue';
  import { useRoute } from 'vue-router';
  import { ref, watch, watchEffect } from 'vue';

  const route = useRoute();
  const page = ref(Number(route.query.page || 1));
  const queryClient = useQueryClient();

  const {data:products} = useQuery({
    queryKey: ['products',{page:page}], //                                                                                                                                                                                                                                                                                                                                      
    queryFn: ()=> getProducts(page.value),
  });

  watch(
    () => route.query.page,(newPage) => {
      page.value = Number(newPage) || 1;

      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  )

  //PRECARGA LA INFORMACION POR ADELANTADA EN LA PAGINACION , ES DECIR SI SE ESTA EN LA PRIMERA PAGINA A SU VEZ DEVUELVE LA INFORMACION DE LA SEGUNDA PAGINA
  watchEffect(() => {
    queryClient.prefetchQuery({
      queryKey: ['products',{page:page.value + 1}],
      queryFn: () => getProducts(page.value + 1),
    });
  })

</script>