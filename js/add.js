$('#new_d').submit(function (e) {
    e.preventDefault();

    let input = {};
    input.nama = $(this).find('[name="nama"]').val();
    input.lokasi = $(this).find('[name="lokasi"]').val();

    let Input = firebase.database().ref('Data');

    Input.push(input).then(function (data) {
        window.location.href = 'index.html?id=' + data.getKey()
    }).catch(function (error) {
        alert(error);
        console.error(error);
    })

    return false;
});