async function getNameData(){

    const request = await fetch('https://jsonplaceholder.typicode.com/users')
    //const request = await fetch(' Https://rickandmortyapi.com/api/character/1')
    const data = await request.json()
    try{ 
      const results = await data() 
      // setTimeout(()=>{
      //     const showMonth = sendCB.map(x => x.toLowerCase());
      //     console.log(showMonth);
      // }, 5000)
    }
  // }catch(err){ 
  //     switch(err.message){ 
  //         case 'Input Bulan': { 
  //             console.log('failed, ', err.message)  
  //             break
  //         }
  //     }
  // }
    // .then(data => {
    //     data.map(elment => {
    //         console.log(elment.name)
    //     })
    // }).catch()
}

getNameData()