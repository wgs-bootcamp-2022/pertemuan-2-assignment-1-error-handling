const validator = require('validator');
console.log(validator.isEmail('yazakkars@gmail.com'));
console.log(validator.isMobilePhone('+6289523333','id-ID'));

const fs = require('fs')
const readline = require('readline');
const filepath = './data/contact.json' // inisiasi file path berdasarkan folder data/json
const exixst = fs.existsSync('./data') // inisiasi cek folder data 
const exixstFile = fs.existsSync(filepath) //inisiasi cek file contact.json


rl = readline.Interface({
    input: process.stdin,
    output: process.stdout
})

if(!exixst){ //cek apakah folder data tidak ada
    fs.mkdirSync('./data', (err)=> { //membuat folder baru bernama data
        if (err) throw err
    })
}
if(!exixstFile){ //cek apakah file tidak ada
    fs.writeFileSync(filepath,'[]') //membuat file baru contact.json
}

rl.question('What is your name ? ', (name)=> { // input nama
    rl.question('your mobile number ? ', (mobile)=>{ //input nomor telepon
        const contact = {name, mobile} //inisiasi contact
        const file = fs.readFileSync(filepath,'utf-8') //membaca filepath
        const contacts = JSON.parse(file) // parsing json 
        contacts.push(contact) // push data contacts kepada contact
        fs.writeFileSync(filepath,JSON.stringify(contacts)) //membuat file contact yang sudah di konversi menjadi string
        console.log('Terimakasih sudah memasukkan data')
        rl.close() //keluar readline
    })
})




