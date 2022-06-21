const getmonth = (callback) => {
    setTimeout(()=>{
        let error = false;
        let month = ['january', 'february', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Desember'];
        if(!error){
            callback(null, month)
            console.log(month);
        }else{
            callback(new Error('Sorry Data Not Found',[]))
        }
    }, 4000)
}
async function sendMont(str){ 
    try{ 
        const results = await getmonth(str) 
        setTimeout(()=>{
            const showMonth = sendCB.map(x => x.toLowerCase());
            console.log(showMonth);
        }, 5000)
    }catch(err){ 
        switch(err.message){ 
            case 'Input Bulan': { 
                console.log('failed, ', err.message)  
                break
            }
        }
    }
}

evalHari('ss')

// async function main(){
//     let sendCB = await getmonth(()=>{});
//     setTimeout(()=>{
//     const showMonth = sendCB.map(x => x.toLowerCase());
//     console.log(showMonth);
// }, 5000)
//   }
  
 // main();
