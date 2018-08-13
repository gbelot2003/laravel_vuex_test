<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link class="navbar-brand" to="/">Navbar</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <template v-if="!currentUser">
                    <router-link tag="li" to="/login"><a>Login</a></router-link>
                </template>
                <tempate v-else>
                    <router-link tag="li" to="/custumers"><a>Custumers</a></router-link>

                    <li class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {{ currentUser.name }} <span class="caret"></span>
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a href="#!/" @click.prevent="logout" class="dropdown-item">Logout</a>
                        </div>
                    </li>
                </tempate>

            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'app-header',
        methods:{
            logout(){
                this.$store.commit('logout');
                this.$router.push('/login');
            }
        },
        computed:{
            currentUser(){
                return this.$store.getters.currentUser;
            }
        }

    }
</script>