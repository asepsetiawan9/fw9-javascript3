const getmonth = (callback) => {
    setTimeout(()=>{
        let error = false;
        let month = ['january', 'february', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Desember'];
        if(!error){
            callback(null, month)
            //console.log(month);
        }else{
            callback(new Error('Sorry Data Not Found',[]))
        }
    }, 4000)
}
getmonth((result, month) => {
    if(result == null){
        const hasil = month.forEach(el => {
            
            console.log(el)
        });
  
    }else{
        console.log(result.msg);
    }
})