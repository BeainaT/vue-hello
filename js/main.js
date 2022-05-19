// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.
const app = new Vue ({
    el: "#main_container",
    data: {
        text: "Hello Vue Js, nice to meet you",
        style: "title",
        icon: {
            img: "https://cdn.eshirt.it/wp-content/uploads/2018/05/thm_00001_emoticons_smile_felice.png",
            desc: "smile emoji"
        }
    }
});