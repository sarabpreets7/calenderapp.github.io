let div = document.querySelector(".weekday")

let height = div.offsetHeight;
let breadth = div.offsetWidth;
let x=1;
let day = document.getElementById("daY");
console.log(day)

let addNewSched = document.getElementById("nine");
addNewSched.addEventListener("click",function(){
    
    popUp();
})

let boxDat = {"teacher1":[]}

let selectedTeacher = "teacher1";

addRows();

function addEvent(box,i){
    box.addEventListener("click",function(){
        
        let modal = document.createElement("div");
        modal.classList.add("pop-up");
        modal.innerHTML=`  <div class="pop-head">Enter Details</div>
                            <div class="topic">
                                <input class="topic" placeholder="Topic:" type="text">
                            </div>
                            
                            <div class="start">
                                <input  placeholder="Start time:" type="text">
                            </div>
                            
                            <div class="end">
                                <input placeholder="End time:" type="text">
                            </div>

                            <div class="batch">
                                <input placeholder="Batch:" type="text">
                            </div>
                            <button class="submit">Done</div>`

        document.querySelector("body").append(modal);
        modal.animate({
            "height":"310px",
            "width":"570px"
        },300)
        document.querySelector(".submit").addEventListener("click",function(){
            let topic = document.querySelector(".topic input").value
            let st = document.querySelector(".start input").value
            let end = document.querySelector(".end input").value
            let batch = document.querySelector(".batch input").value
            box.classList.add("selected")
            boxDat[selectedTeacher][i-1].selected= true;
            boxDat[selectedTeacher][i-1].topic = topic;
                boxDat[selectedTeacher][i-1].start = st;
                boxDat[selectedTeacher][i-1].end = end;
                boxDat[selectedTeacher][i-1].batch = batch;
                modal.animate({
                    "width":"0vw"
                },300);
                setTimeout(() => {
                    modal.remove();
                }, 250);
            loadData();
            
        })
       
        

        
        
    })
}




function loadData(){
    $(".row-day").remove();
    let data = boxDat[selectedTeacher];
    for(let i=0;i<data.length;i++){
        if(data[i].selected==false || (data[i].selected==true && data[i].topic=="")){
            let box = document.createElement("div");

            box.classList.add("row-day");
            box.setAttribute('id',i+1);
            box.innerText=i+1;
            $(".calender-days").append(box);
            addEvent(box,i+1);
        }
        else{
            let box = document.createElement("div");
            box.classList.add("row-day");
            box.innerHTML = `<div class="topic"> Topic: ${data[i].topic}</div>
                             <div class="time">Time: ${data[i].start} - ${data[i].end} </div>
                             <div class="Batch">Batch: ${data[i].batch}</div>
                             `
                             
            box.classList.add("selected");
            box.setAttribute('id',i+1);
            $(".calender-days").append(box);   
            x = i+1;
            box.addEventListener("click",function(){
                let modal = document.createElement("div");
        modal.classList.add("pop-up");
        modal.innerHTML=`  <div class="pop-head">Edit Schedule</div>
                            <div class="topic">
                                <input class="topic" placeholder="Topic:" type="text">
                            </div>
                            
                            <div class="start">
                                <input  placeholder="Start time:" type="text">
                            </div>
                            
                            <div class="end">
                                <input placeholder="End time:" type="text">
                            </div>

                            <div class="batch">
                                <input placeholder="Batch:" type="text">
                            </div>
                            <button class="submit">Done</div>`

        document.querySelector("body").append(modal);
        modal.animate({
            "height":"310px",
            "width":"570px"
        },300)
        document.querySelector(".submit").addEventListener("click",function(){
            let topic = document.querySelector(".topic input").value
            let st = document.querySelector(".start input").value
            let end = document.querySelector(".end input").value
            let batch = document.querySelector(".batch input").value;
            box.classList.add("selected")
            boxDat[selectedTeacher][i].selected= true;
            boxDat[selectedTeacher][i].topic = topic;
                boxDat[selectedTeacher][i].start = st;
                boxDat[selectedTeacher][i].end = end;
                boxDat[selectedTeacher][i].batch = batch;
                modal.animate({
                    "width":"0vw"
                },300);
                setTimeout(() => {
                    modal.remove();
                }, 250);
            
            loadData();
            
        })


            })

                   
        }
    }
    updateDay();
}

let addBtn = document.querySelector(".add-teacher");
addBtn.addEventListener("click",function(){
    myFunction();
})

function myFunction() {
    let text;
    let teacher = prompt("Please enter teacher name:",);
    if (teacher == null || teacher == "") {
      text = "User cancelled the prompt.";
    } else {
      text = "New Teacher Registered ";
    }
    
    console.log(teacher)
    if(teacher!="" && teacher != null && teacher!= undefined){
            let teacherslct = document.querySelector(".menu-selector");
        let nteacher = document.createElement("option");
        nteacher.value = teacher;
        nteacher.innerText = teacher;
        boxDat[teacher] = [];

        teacherslct.append(nteacher);
        selectedTeacher = teacher;
        nteacher.selected = "selected";
        addRows();
        console.log(boxDat)

    }
    

  }


  $(".menu-selector").change(function (e) {
    
    let value = $(this).val();
    
    console.log(value)
    selectedTeacher = value;
    loadData();
    
})

  function addRows(){
    
     $(".row-day").remove();
    
    for(let i = 1; i <= 31; i++) {
        
        let box = document.createElement("div");
    
        box.classList.add("row-day");
        box.setAttribute('id',i);
        box.innerText=i;
        let boxobj = {"selected":false,"topic":"","start":"","end":"","batch":""}
        boxDat[selectedTeacher].push(boxobj);
        $(".calender-days").append(box);
        addEvent(box,i);
        
    }
    updateDay()
}





function popUp(){


    let modal = document.createElement("div");
        modal.classList.add("pop-up");
        modal.innerHTML=`  <div class="pop-head">Enter Details</div>
                            <div class="date">
                                <input class="date" placeholder="Date:" type="number">
                            </div>
                            <div class="topic">
                                <input class="topic" placeholder="Topic:" type="text">
                            </div>
                            
                            <div class="start">
                                <input  placeholder="Start time:" type="text">
                            </div>
                            
                            <div class="end">
                                <input placeholder="End time:" type="text">
                            </div>
                            <div class="batch">
                                <input placeholder="Batch:" type="text">
                            </div>
                            <button class="submit">Done</div>`

        document.querySelector("body").append(modal);
        modal.animate({
            "height":"310px",
            "width":"570px"
        },300)
        
        document.querySelector(".submit").addEventListener("click",function(){
            let topic = document.querySelector(".topic input").value
            let st = document.querySelector(".start input").value
            let end = document.querySelector(".end input").value
            let date = document.querySelector(".date input").value;
            let batch = document.querySelector(".batch input").value;
            modal.animate({
                "width":"0vw"
            },300);
            setTimeout(() => {
                modal.remove();
            }, 250);
            
            
            boxDat[selectedTeacher][date-1].selected= true;
            boxDat[selectedTeacher][date-1].topic = topic;
                boxDat[selectedTeacher][date-1].start = st;
                boxDat[selectedTeacher][date-1].end = end;
                boxDat[selectedTeacher][date-1].batch = batch;
            loadData();
            
            
        })
}

function updateDay(){
    
    let rows = document.querySelectorAll(".row-day");
    for(let i=0;i<rows.length;i++){
        rows[i].addEventListener("mouseover",function(){
            
            day.innerText = (this).id;
        })
    }
}



