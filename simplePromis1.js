function namaDepan(terimaNamaDepan){
    return new Promise(function(resolve, reject){
      setTimeout(function(){
        resolve(terimaNamaDepan+' Setiawan');
      }, 2000);
    });
  }
    
  async function main(){
    let munculkanNama = await namaDepan('Asep');
    console.log(munculkanNama);
  }
  
  main();
