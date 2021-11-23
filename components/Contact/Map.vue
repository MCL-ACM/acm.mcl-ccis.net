<template>
    <section class="bg-white p-10 rounded-3xl shadow-xl">
        <h1 class="text-2xl font-bold mb-6 text-black">Address</h1>
        
        <div class="relative h-full">

            <iframe  width="100%" height="240px" style="border:0" loading="lazy" allowfullscreen
            :src="mapENV"></iframe>
        
        </div>
        
        <p class="pt-4 tracking-widest"><span>Address:<br></span>Pulo-Diezmo Road, Cabuyao, 4025 Laguna</p>
    </section>
</template>

<script>
export default {
    data(){
        return{
            mapENV:process.env.MAP_KEY,
        }
        
    },

}

</script>

<style>

</style>