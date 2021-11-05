Vue.config.devtools = true;
dayjs.extend(window.dayjs_plugin_localizedFormat);
dayjs.extend(window.dayjs_plugin_relativeTime);

window.addEventListener("DOMContentLoaded", function () {
    const app = new Vue ({
        el: "#root",
        data:{
            contacts:
            [
                {
                    name: 'Michele',
                    avatar: 'img/avatar_2.jpg',
                    messages: 
                    [
                        {
                
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent',
                        date: dayjs().format('LLL'),
                        },

                        {  
                                         
                        text: 'Ricordati di dargli da mangiare',
                        status: 'recived',
                        date: dayjs().format('LLL')
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
                        status: 'sent',
                        date: dayjs().format('LLL')
                        },
                        {
                        
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received',
                        date: dayjs().format('LLL')
                        },

                    ]
                },


                {
                    name: 'Samuele',
                    avatar: 'img/avatar_4.jpg',
                    messages: 
                    [
                        {
                        text: 'La Marianna va in campagna',
                        status: 'sent',
                        date: dayjs().format('LLL')
                        },
                        {
                    
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'received',
                        date: dayjs().format('LLL')
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
                        status: 'sent',
                        date: dayjs().format('LLL')
                        },
                        {
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received',
                        date: dayjs().format('LLL')
                        }
                    ],

                },
            ],
            risposte:["ok","tutto bene","a che ora ci vediamo?","a che ora?","va bene a domani",'Lo sai che ha aperto una nuova pizzeria?'],
            newMsg:"",
            activeChat:{},
            filter:"",
            arrayVuoto:[],
            
            
        },
// devo creare una funzione che al click di un determinato elemento 
        methods: {
            // // metodo currentIndex
            // selezionaUtente(index){
            //     this.currentindex = index
            //     console.log(index)
            // },
             

            // creo una funzione che al click mi vada a trasferire l'elemento designato nel mio arrat vuoto
            selectChat(el){
                this.activeChat = el;
            },


            lastElementList(messages){


                if (messages.length === 0) {
                    return {}
                  }
            
                  const message = messages[messages.length - 1];
            
                  return message;
                  
                  //.slice(0, 20)
                // const message = messages[messages.length - 1].text;

                // return message; //.slice(0, 20)
            },

            // creo una funzione per stampare i messaggi  ovverò pusho la variabile impostata nell'input 
            //  creo un'altra funzione all'interno  dove pusho la risposta dopo un determinato lasso di tempo

            senTMsg(){
                if (this.newMsg === ""){
                    return
                }

                this.activeChat.messages.push({
                    text: this.newMsg,
                    status:'sent',
                    date: dayjs().format('LLL'),
                })
                this.newMsg = "";

                setTimeout(() => {
                    // push del messaggio nell'array dei messaggi
                    this.activeChat.messages.push({
                        text: this.risposte[Math.floor(Math.random() * this.risposte.length)],
                        status:"received",
                        date: dayjs().format('LLL'),
                    })
                  }, 2000);
                },
                 

               
                cancellaElemento(index){
                    this.activeChat.messages.splice(index, 1)
                },

            // //   provo a creare una funzione per filtrare le parole
                FilteredList() {
                    return this.contacts.filter((elemento) => {
                      return elemento.name .toLowerCase().includes(this.filter.toLowerCase());
                    });
                  },


             
            },


            beforeMount(){
                this.activeChat = this.contacts[0]
            }



            

            
    })



})

