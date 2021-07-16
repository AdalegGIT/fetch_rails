

document.addEventListener("DOMContentLoaded", () => {
    console.log("I am here")
    let form = document.querySelector("#new_task");

    let my_list = document.querySelector("ul");

    form.addEventListener("submit", (e)=> {
        e.preventDefault();
        e.stopPropagation();
        console.log("form submitted");
        const request_data = new FormData(form);

        //console.log( request_data);
        fetch(form.action, {
           method: form.method,
           body: request_data,
           headers : {
            //    Accept : "application/json"
            Accept : "text/html"
           }
        // }).then((data) => data.json())
    }).then((data) => data.text())
        .then((data) => {
            // do something
            console.log(data)

            // makeYourLi(data, my_list);
            addYourLi(data, my_list)
            form.reset();

        }).catch((err) => console.log(err))


        
    });

});

function makeYourLi(data, my_list){
    let my_li = document.createElement("li");
    my_li.innerText = data.name;
    my_list.append(my_li);

}

function addYourLi(data, my_list){
    my_list.insertAdjacentHTML("beforeend", data)
}