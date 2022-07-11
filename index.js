function change(){
    document.getElementById("mydetails").style.display = "none"
         // fetch() -> promise -> reject / resolve -> if resolved -> render the date using map
 fetch("https://jsonplaceholder.typicode.com/users").then((data)=>{
       return data.json()
}).then((completedData)=>{
    let data1 =""
    completedData.map((curVal)=>{
       data1=`
       <div class="container">
    <div class="card"  style="width: 18rem; margin-left: 700px">
        
        <div class="card-body">
          <h5 class="card-title">${curVal.name}</h5>
          <p class="card-text">${curVal.address.city} , ${curVal.website}</p>
          <p class="card-text">${curVal.email}</p>
          <a href="/" class="btn btn-primary">Read More</a>
        </div>
      </div>
</div>
       `
    }); 
    document.getElementById("cards").innerHTML =  data1
})
}