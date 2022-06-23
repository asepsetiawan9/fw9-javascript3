const cekHariKerja = (day) =>{ //merupakan arrowfunction dengan parameter day
    return new Promise((resolve, reject)=>{ //mereturn sebuah promise 
        setTimeout(()=>{ //mengatur waktu tunggu 
            const dataDay =  ['senin', 'selasa', 'rabu', 'kamis', 'jumat'] //sebuah data berisi array hari
            let cek = dataDay.find((item)=>{ //sebuah variable cek dengan isian untuk menemukan sebuah elemen didalam array
                return item === day // me return item yang di cek sama dengan isian dari value day
            })
            if(cek){ // jika parameter yang dikirim sama dengan salahsatu element pada array
                resolve(cek) // maka akan resolve
            }else{ //jika tidak
                reject(new Error('Hari ini bukan hari kerja'))// akan reject dan menampilkan error disamping
            }
        }, 3000)//merupakan waktu tunggu pengecekan
    })
}

 async function evalHari(str){ //sebuah fungsi asyncronus yang ddiawali dengan async
    try{ 
        const results = await cekHariKerja(str) //merupakan pengecekan kondisi yang akan di invoke ke cekHariKerja
        console.log('Hari Ini adalah hari, ', results, 'dan merupakan hari Kerja') // apabila kondisi sesuai dengan isi dari salahsatu elment maka akan dimunculkan pesan disamping
    }catch(err){ // dan apabila error, error di invoke
        switch(err.message){ //cek kondisi error
            case 'Hari ini bukan hari kerja': { //apabila error massage sperti disamping
                console.log('failed, ', err.message) // maka akan memunculkan pesan 
                break
            }
        }
    }
}


evalHari('ss')


//then and catch

//  cekHariKerja('senin') //ketika kita menjalankan fungsi cekHariKerja dengan isi atau value salasatu element didalam array dataDay
// .then ((str)=> console.log('Hari ini adalah hari', str, 'dan hari kerja'))//jika isi cekharikerja sesuai dengan eelement di array akan memunculkan message disamping
// .catch((e)=>{ //dan apabila error akan meng invoke error message
//     switch(e.message){ // jika kondisi error massage
//         case 'Hari ini bukan hari kerja': { //sperti disamping
//             console.log('Program Terminated', e.message)// maka akan muncul error disamping dan menginvoke juga pesan diatas
//             break
//         }
//         default: {
//             console.log('error happened') // kondisi dimana error yang ditampilkan tidak ada yang ter invoke dari atas
//         }
//     }
// })

//

