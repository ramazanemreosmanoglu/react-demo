const axios = require("axios");


const DELETE_URL = "http://127.0.0.1:8000/delete/";
const UPDATE_URL = "http://127.0.0.1:8000/update/";
const INSERT_URL = "http://127.0.0.1:8000/insert/";

// Neden bu fonksiyonlar promise kullaniyor?
// Axios request tamamlanmadan devam ediyor normal sartlarda. Promise ve await kullanarak
// request tamamlanmadan devam etmemesini sagliyoruz, boylece tablo ve veritabani arasinda zamanlama
// problemi kalmiyor.

export function delete_data(id) {
    return new Promise(function (resolve, reject) {
        axios.get(DELETE_URL, {params: {target_id: id}}).then(res => {
            resolve(0);
        });  
    })

}  

export function edit_data(edited) {
    return new Promise(function (resolve, reject) {
        axios.get(UPDATE_URL, {
            params: {
                target_id: edited.id,
                new_name: edited.name,
                new_mail: edited.email,
                new_phone: edited.phone,
            }
        })
        resolve(0);    
    });
}

export function insert_data(name, email, phone) {
    return new Promise(function (resolve, reject) {
        axios.get(INSERT_URL, {
            params: {
                name: name,
                email: email,
                phone: phone,
            }
        })
        resolve(0);
    
    })
}