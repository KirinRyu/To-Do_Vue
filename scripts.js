
var tarefas = []

Vue.createApp({
    data () {
        return {
            done: window.tarefas.done,
            tarefas: window.tarefas,
            textIn: ''
        }
    },
    methods: {
        setDone (item) {
            item.done = !item.done ;
        },
        adicionar () {
            if(this.textIn!=''){
                this.tarefas.push({
                    tarefa: this.textIn,
                    done: false,
                })
                localStorage.setItem("tarefas", JSON.stringify(this.tarefas))
                // stringify transforma em String pros devs conseguirem ler no local storage 
                this.textIn=''
            }
        },
        limpar () {
           this.tarefas = []
        }   
    },
    created () { // Usar 'parse' pra transformar string em objeto denovo, caso tenha algo no Storage
        this.tarefas = localStorage.getItem("tarefas") ? JSON.parse(localStorage.getItem("tarefas")) : this.tarefas;
    },
    updated () {
        localStorage.setItem("tarefas", JSON.stringify(this.tarefas))
    }
}).mount('#app')
