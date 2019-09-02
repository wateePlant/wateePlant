db.collection('users').onSnapshot(doc => {
    let changes = doc.docChanges();

    changes.forEach(ch => {
        if (ch.type == 'added') {
            let data = ch.doc.data();
            console.log(data);
            render(data);
        }
    })
})


function render(data) {
    let html = `<tr><td> ${data.Name} </td>  <td>${data.rfid}</td> <td>${data.uid}</td> <td>${data.time}</td> <td>${data.cost}</td><td>${data.nwater}</td><td>${data.cwater}</td> <td>${data.date}</td></tr>`;
    $('.table').append(html);
}

const form = document.querySelector('.form');
form.addEventListener('submit', e => {
    e.preventDefault();
    const name = $('#name').val();
    const rfid = $('#rfid').val();
    const uid = $('#uid').val();
    const time = $('#time').val();
    const cost = $('#cost').val();
    const cwater = $('#cwater').val();
    const nwater = $('#nwater').val();
    const date = $('#date').val();
    console.log(name, rfid, uid, time, cost, cwater, nwater, date);

    db.collection('users').add({
        Name: name,
        rfid: rfid,
        uid: uid,
        time: time,
        cost: cost,
        nwater: nwater,
        cwater: cwater,
        date: date

    });
    alert('success');
    form.reset();

})

/*db.collection('users').add({
    Name: 'navi',
    rfid: 'rf0003',
    uid: 'wp0003',
    time: '5:00',
    cost: '600',
    nwater: '10',
    cwater: '5',
    date: '05-10-2018'

})*/