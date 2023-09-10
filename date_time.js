function formatedyear(date){
    const options={
        year:'numeric'
    };
    return date.toLocaleDateString('en-US',options);
}
function formatedmonth(date){
    const options={
        month:'long'
    };
    return date.toLocaleDateString('en-US',options);
}
function formatedDay(date){
    const options={
        day:'2-digit'
    };
    return date.toLocaleDateString('en-US',options);
}

function formatedhour(date){
    const datas={
        hour:'2-digit'
    };
    return date.toLocaleTimeString('en-US',datas);
}

function formatedmin(date){
    const datas={
        minute:'2-digit'
    };
    return date.toLocaleTimeString('en-US',datas);
}
function formatedsec(date){
    const datas={
        second:'2-digit'
    };
    return date.toLocaleTimeString('en-US',datas);
}

function formatedperiod(date){
    const datas={
        hour12:true
    };
    return date.toLocaleTimeString('en-US',datas);
}


function print(){

    const now = new Date();
    const fyear=formatedyear(now);
    const fmon=formatedmonth(now);
    const fday=formatedDay(now);
    const fhour=formatedhour(now);
    const fmin=formatedmin(now);
    const fsec=formatedsec(now);
    const fper=formatedperiod(now);
    document.getElementById("year").textContent=fyear;
    document.getElementById("mon").textContent=fmon+"-";
    document.getElementById("day").textContent=fday+"-";
    let my = fhour;
    const arr = my.split(" ");
    document.getElementById("hour").textContent=arr[0];
    document.getElementById("min").textContent=fmin;
    document.getElementById("sec").textContent=fsec;
    document.getElementById("period").textContent=arr[1];

    
}
print();

setInterval(print,1000);