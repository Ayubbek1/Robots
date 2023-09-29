fetch("https://dummyjson.com/users")
    .then(res => res.json())
    .then(res => reload(res))


let item = document.querySelector(".item")
let fif = document.querySelector(".fif")
let other = document.querySelector(".other")
console.log(fif);
function reload(data) {
    console.log(data);
    for (let i = 0; i < data.users.length; i++) {
        const element = data.users[i];
        let div = document.createElement("div")
        let name = document.createElement("p")
        let block = document.createElement("div")
        let age = document.createElement("p")
        let age_num = document.createElement("p")
    
        div.classList.add("age")
        block.classList.add("block")
        age.innerHTML = "age"
        age_num.innerHTML = element.age
        name.innerHTML = element.firstName
        console.log(element.image);

        div.style.backgroundImage = `url(${element.image})`
        if(element.age<=25){
            item.append(div)
        }else if(element.age>25 && element.age<=40){
            fif.append(div)
        }else{
            other.append(div)
        }
        div.append(name,block)
        block.append(age,age_num)
        
    }


}
    // <div class="age">
    //     <p>Charles</p>
    //     <div class="block">
    //         <p>age</p>
    //         <p>18</p>
    //     </div>
    // </div>


