<template>
   <div id="main">
       <div class="container">
           <headers />
           <router-view></router-view>
       </div>
   </div>
</template>

<script>
    import Header from './Header';

    export default {
        name: 'main-app',
        components:{
            'headers': Header
        }
    }
</script>
