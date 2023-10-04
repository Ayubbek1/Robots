fetch("http://localhost:8080/users")
    .then(res => res.json())
    .then(res => reload(res))


let add_btn = document.querySelector('#add')
let item = document.querySelector(".item")
let fif = document.querySelector(".fif")
let other = document.querySelector(".other")
let name = document.querySelector("#name")
let age = document.querySelector("#age")




function reload(data) {
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
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
        div.style.backgroundImage = `url(${element.image})`
        if (element.age <= 25) {
            item.append(div)
        } else if (element.age > 25 && element.age <= 40) {
            fif.append(div)
        } else {
            other.append(div)
        }
        div.append(name, block)
        block.append(age, age_num)
        block.ondblclick = () => {
            if (data[i].id !== 31) {
                fetch("http://localhost:8080/users/" + data[i].id, {
                    method: "delete"
                })
                    .then(res => {
                        if (res.status === 200 || res.status === 201) {
                            div.remove()
                        }
                    })
            }


            console.log(data[i].id);
        }

        name.onclick = () =>{
            prom = prompt(`изменить ${name.innerHTML} на ...`) 
            let time = {
                firstName: prom,
                age: age_num.innerHTML,
                image: element.image,
                id: data[i].id
            }
            name.innerHTML = prom
            fetch("http://localhost:8080/users/" + data[i].id, {
                method: "PUT",
                body:JSON.stringify(time),
                headers: {
                    "Content-type": "application/json"
                }
            })
        }

    }


}

add_btn.onclick = () => {
    fetch("http://localhost:8080/users", {
        method: "post",
        body: JSON.stringify({ firstName: name.value, age: age.value, image: "https://cdnn21.img.ria.ru/images/18087/12/180871214_0:0:485:485_1920x0_80_0_0_f9ec552eff3c6becd92fe56951d6661b.jpg" }),
        headers: {
            "Content-type": "application/json"
        }
    })
    setTimeout(() => {

        location.reload()
    }, 100);
}