<template>
    <v-container>
        <h1 class="text-h2">Laraberg</h1>
        <textarea id="laraberg" name="laraberd" hidden></textarea>
    </v-container>
</template>

<script>
export default {
    mounted () {
        console.log('laraberg', Laraberg)
        Laraberg.init('laraberg')
    }    
}
</script>