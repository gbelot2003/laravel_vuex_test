export default  {
    state:{
        welcomeMessage: 'This is from store'
    },
    getters:{
        welcome(state){
            return state.welcomeMessage
        }
    },
    mutations:{},
    actions:{}
}