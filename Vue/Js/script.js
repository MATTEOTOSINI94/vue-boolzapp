Vue.config.devtools = true;

window.addEventListener("DOMContentLoaded", function () {
    const app = new Vue ({
        el: "#root",
        data:{
            contacts:
            [
                {
                    name: 'Michele',
                    avatar: 'img/avatar_2.jpg',
                    messages: [{
                        
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                         },
                        {
                        
                        text: 'Ricordati di dargli da mangiare',
                        status: 'recived'
                        },
                     
                        ],
                        },



                    {
                    name: 'Fabio',
                    avatar: 'img/avatar_3.jpg',
                    messages:
                     [  
                        {
                        text: 'Ciao come stai?',
                        status: 'sent'
                        },
                        {
                        
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                        },

                     ]},
                    {
                    name: 'Samuele',
                    avatar: 'img/avatar_4.jpg',
                    messages: 
                     [
                        {
                        text: 'La Marianna va in campagna',
                        status: 'received'
                        },
                        {
                    
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                        },
                   
                     ]
                    },

                {
                name: 'Luisa',
                avatar: 'img/avatar_5.jpg',   
                messages: 
                [
                    {
                
                    text: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                    },
                    {
                    text: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                    }
                ],

            },
            ],

            newMsg:"",
            activeChat: null,
            currentindex:0
            
        },
// devo creare una funzione che al click di un determinato elemento 
        methods: {
            // metodo currentIndex
            selezionaUtente(index){
                this.currentindex = index
                console.log(index)
            },
            

             
            selectChat(el){
                this.activeChat = el;
            }
        }
    })



})

