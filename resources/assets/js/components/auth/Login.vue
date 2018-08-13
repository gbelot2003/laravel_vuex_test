<template>
    <div class="login row justify-conten-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-heder">
                    Login
                </div>
                <div class="card-body">
                    <form @submit.prevent="authenticate">
                        <div class="form-group row">

                                <label>Email</label>
                                <input type="email" v-model="form.email" class="form-control" placeholder="Email">

                        </div>
                        <div class="form-group row">
                                <label>Password</label>
                                <input type="password" v-model="form.password" class="form-control">
                        </div>

                        <div class="form-group row">
                              <input type="submit" value="Login" class="btn btn-success"/>
                        </div>

                        <div class="form-group row justify-content-center" v-if="authError">
                             <p class="error">
                                 {{ authError }}
                             </p>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {login} from "../../helpers/auth";

    export default {
        name: "login",
        data(){
          return{
              form: {
                  email: 'gbelot2003@hotmail.com',
                  password: ''
              },
              error: ''
          }
        },
        methods:{
            authenticate(){
                this.$store.dispatch('login');
                login(this.form)
                    .then(res => {
                        this.$store.commit("loginSuccess", res);
                        this.$router.push({path: '/'});
                    }).catch(err => {
                      this.$store.commit('loginFail', {err});
                })
            }
        },
        computed:{
            authError(){
                return this.$store.getters.authError;
            }
        }
    }
</script>

<style>
    .error{
        text-align: center;
        color: red;
    }
</style>