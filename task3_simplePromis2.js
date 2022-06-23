  const checkSetia = (ciriciri) =>{
    ciriciri = ciriciri.toLowerCase();
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{ 
            const gejala =  ['Selingkuh', 'Bohong', 'Ingkar Janji'] 
            const lowercaseGejala = gejala.map(x => x.toLowerCase());
            // console.log(lowercaseGejala);
            let result = lowercaseGejala.find((item)=>{ 
                //console.log(ciriciri);
                return item === ciriciri 
            })
          
            if(result){ 
                resolve(result) 
            }else{ 
                reject(new Error('Gejala tidak setia tidak terdeteksi'))
           }
        }, 3000)
    })
}
checkSetia('SEliNgkuh')
.then((ciriciri)=> console.log('Pacarmu', ciriciri, 'dia tidak setia')) 
.catch((e)=>{ 
    switch(e.message){ 
        case 'Gejala tidak setia tidak terdeteksi': {
            console.log(e.message, ', Tapi masih mungkin dia tidak setia :p')
            break
        }
        default: {
            console.log('Error') 
        }
    }
})