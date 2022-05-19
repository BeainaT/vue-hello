// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.
const app = new Vue ({
    el: "#main_container",
    data: {
        text: "Hello Vue Js, nice to meet you",
        style: "title",
        answer: "Are you sure?",
        icon: {
            img: "https://cdn.eshirt.it/wp-content/uploads/2018/05/thm_00001_emoticons_smile_felice.png",
            desc: "smile emoji"
        }
    },
    methods: {
        getAnswer() {
            this.text = "Uhm, I wouldn't be so sure!",
            this.style = "sad",
            this.icon.img = "https://images.emojiterra.com/google/noto-emoji/v2.034/512px/1f628.png",
            this.answer = "but don't give up!"
        }
    }
});