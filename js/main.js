window.onload = inicializar;

const config = {
    apiKey: "AIzaSyBbNGekWG9gqXsuD6zshavwm50xfkbPUeg",
    authDomain: "warungku-qwe234.firebaseapp.com",
    databaseURL: "https://warungku-qwe234.firebaseio.com",
    projectId: "warungku-qwe234",
    storageBucket: "warungku-qwe234.appspot.com",
    messagingSenderId: "253815813998"
};
firebase.initializeApp(config);

let dataRef;
let getEl;

function inicializar() {
    dataRef = firebase.database().ref().child("Data");
    getEl = document.getElementById("getEle");
    tampil();
}

function tampil() {

    dataRef.on("Data", function (snapshot) {
        let data = snapshot.val();
        let files = " ";

        for (var key in data) {
            files += "<tr>" +
                "<td>" + data.Nama + "</td>" +
                "<td>" + data.Deskripsi + "</td>"
                "<td>" + data.Latitude + "</td>"
                "<td>" + data.Longitude + "</td></tr>"
        }
        getEl.innerHTML = files;
    });
}
