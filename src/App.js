import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var k=0;
var arr;
var info;
var info_b;
var hour=[];
var slots_no;
var hour_number;
var spec_time=[];
var selected_date;
var indexing;
var minute_slots;
var minute_box;
var appointment_time;
var chnge;


class App extends Component {
  constructor(props){
    super(props)
    this.state={change:0,appointment:[ { date:"Wed,Dec 06", date_slots:[]},
    { date:"Thu,Dec 07", date_slots:[]},
    { date:"Fri,Dec 08", date_slots:[]},
    { date:"Sat,Dec 09", date_slots:[]},
    { date:"Today", date_slots:[{hour:"3", hour_slots:[{time:"3:00pm",id:"slotid005"}
    ,{time:"3:30pm",id:"slotid007"}
  ]}]},
   {date:"Tomorrow", date_slots:[]  },
   {
     date:"Wed,Dec 13" , date_slots:[ { hour:"4", hour_slots:[{time:"4:30pm",id:"slotId105"}
     ,{time:"4:50pm",id:"slotid106"}
   ]  }, {hour:"5", hour_slots:[{
     time:"5:30pm", id :"slotid202"
   },
{time:"5:45pm",id:"slotid208"}
 ]}  ]
   }


    ]}
  }

  c(i){

  }


  componentDidMount()
  {
var chnge= document.getElementsByClassName("slot")

    arr=document.getElementsByClassName("date");
    console.log(arr)
minute_slots=document.getElementsByClassName("with_minutes");
minute_box=document.getElementById("spec_time");

   info_b=this.state.appointment;
    var doc=document.getElementById("div");
    var hour_box=document.getElementById("tim");
slots_no=    document.getElementsByClassName("slot");
    if(this.state.change==0)
    doc.scrollTop=90;

    doc.onscroll = (ev)=> {
hour=[]
for(var i=0;i<info.length;i++)
{ if(Math.abs(arr[i].getBoundingClientRect().top-357)<16){
  var wdth=24;
  var string = wdth+"px";
  arr[i].style.fontSize=string;}
  else {
if(Math.abs(arr[i].getBoundingClientRect().top-357)>16 &&Math.abs(arr[i].getBoundingClientRect().top-357)<80)
{
  var wdth=17;
  var string = wdth+"px";
  arr[i].style.fontSize=string;
}
if(Math.abs(arr[i].getBoundingClientRect().top-357)>80)
{
  var wdth=13;
  var string = wdth+"px";
  arr[i].style.fontSize=string;

}
  }
  if(Math.abs(arr[i].getBoundingClientRect().top-357)<12)
  {
  //  console.log(i+"  "+Math.abs(arr[i].getBoundingClientRect().top-357))
  selected_date=info[i].date;
  indexing=i;
    if(info[i].date_slots.length>0)
  for(var j=0 ;j<info[i].date_slots.length;j++)
  { if(hour[0]=="no slots available on this day")
  hour=[]
  hour.push(info[i].date_slots[j].hour)}

  var extra=hour.length
  for(var k=0;k<5;k++){

  for(var t=0;t<extra;t++)
{
  if(hour[0]!=="no slots available on this day")
  if(hour.length>0)
  hour.push(hour[t])
}
}
hour_b=hour;
  arr[i].classList.remove("dull");
  arr[i].classList.add("date");
  this.setState({change:1})

  break;

  }
  else {
    arr[i].classList.add("dull");
   hour=["no slots available on this day"]
  }

}

console.log(hour)
if(chnge.length>0)
if(hour[0]=="no slots available on this day" && chnge[0].innerHTML=="no slots available on this day")
chnge[0].classList.add("red")
else {
    chnge[0].classList.remove("red")
}




      if ((doc.offsetHeight + doc.scrollTop) >= doc.scrollHeight-1) {
            console.log(arr[0].getBoundingClientRect())
        {  info=info.concat(info_b);
     console.log(info)
     k+=1;
          this.setState({change:k})

        }
        }






if (doc.scrollTop==0)
{console.log("scroll Top")


}




for(var i=0;i<info.length;i++)
{
  if(info[i].date_slots.length==0){
console.log("gg");
arr[i].classList.add("strike");
}

}





       };


       var hour_b=hour;

  hour_box.onscroll = (ev)=> {

  console.log();
for(var i=0;i<slots_no.length;i++)
{
  if(Math.abs(slots_no[i].getBoundingClientRect().top-357)<16){
   var wdth=24;
   var string = wdth+"px";
   slots_no[i].style.fontSize=string;}
   else {
 if(Math.abs(slots_no[i].getBoundingClientRect().top-357)>16 &&Math.abs(slots_no[i].getBoundingClientRect().top-357)<80)
 {
   var wdth=14;
   var string = wdth+"px";
   slots_no[i].style.fontSize=string;
 }
 if(Math.abs(slots_no[i].getBoundingClientRect().top-357)>80)
 {
   var wdth=11;
   var string = wdth+"px";
   slots_no[i].style.fontSize=string;

 }
   }

   if(Math.abs(slots_no[i].getBoundingClientRect().top-357)<15){
hour_number= slots_no[i].innerHTML;
for(var m=0;m<info[indexing].date_slots.length;m++)
{  if(info[indexing].date_slots[m].hour==hour_number)
//  console.log(info[indexing].date_slots[m]);
{  var lo=info[indexing].date_slots[m].hour_slots.length;
  for(var b=0;b<lo;b++)
  {
    spec_time.push(info[indexing].date_slots[m].hour_slots[b].time);
  }

}



}
break;
}
else {
  spec_time=[]
}


}

console.log(spec_time)
if(this.state.change=1)
if(spec_time.length>0)
for(var i=0;i<6;i++)
{
  spec_time.push(spec_time[i])
}




console.log("hour "+hour_box.offsetHeight+" "+hour_box.scrollTo+" "+ hour_box.scrollHeight);
              if ((hour_box.offsetHeight + hour_box.scrollTop) >= hour_box.scrollHeight-1) {

                  hour=hour.concat(hour_b);
             console.log("kuch hua")
             k+=1;
             console.log(hour_b)
                  this.setState({change:k})


                }




this.setState({change:2})
}

var spec_timeb=spec_time;








  minute_box.onscroll = (ev)=> {


              if ((minute_box.offsetHeight + minute_box.scrollTop) >= minute_box.scrollHeight-1) {

                  spec_time=spec_time.concat(spec_timeb);
             console.log("kuch hua")
             k+=1;
                  this.setState({change:k})


                }

for(var i=0;i<minute_slots.length;i++)

{
  if(Math.abs(minute_slots[i].getBoundingClientRect().top-357)<16){
   var wdth=24;
   var string = wdth+"px";
  minute_slots[i].style.fontSize=string;}
   else {
 if(Math.abs(minute_slots[i].getBoundingClientRect().top-357)>16 &&Math.abs(minute_slots[i].getBoundingClientRect().top-357)<80)
 {
   var wdth=15;
   var string = wdth+"px";
   minute_slots[i].style.fontSize=string;
 }
 if(Math.abs(minute_slots[i].getBoundingClientRect().top-357)>80)
 {
   var wdth=14;
   var string = wdth+"px";
   minute_slots[i].style.fontSize=string;

 }
   }






  if(Math.abs(minute_slots[i].getBoundingClientRect().top-357)<15){
appointment_time=minute_slots[i].innerHTML;
}


}
  }
}





submit(){
  console.log(indexing +" "+hour_number+" "+appointment_time);
  for(var i=0;i<info[indexing].date_slots.length;i++)
  {
     if(info[indexing].date_slots[i].hour==hour_number)
     {
      for(var j=0;j<info[indexing].date_slots[i].hour_slots.length;j++)
      {
        if(info[indexing].date_slots[i].hour_slots[j].time==appointment_time)
{
  alert("Your ID is "+info[indexing].date_slots[i].hour_slots[j].id +" "+"and date is "+ info[indexing].date);
}
}
     }
  }
}




  render() {
    console.log(this.state.change)

    console.log(spec_time)
  if(this.state.change>0)
//    if(Math.abs(arr[5].getBoundingClientRect().top-350)>=5)
    {}
    if(this.state.change==0)
    info=this.state.appointment;

    return (
      <div>
      <div id="title"> Available Slots for Dr. Sumit</div>
      <div className="Ap" id="div">
 {info.map((list,index) =>
   <div className="date" key={index} onWheel={this.c.bind(this,index)}>{list.date}</div>


)}



  </div>


  <div id="tim"className="hour">
  {
    hour.map((hr,index)=>
    <div className="slot" id="no" key={index}>{hr}</div>
  )}


  </div>

  <div id="spec_time" className="timings">
 {spec_time.map((time,index) =>
 <div className="with_minutes">{time}</div>

)}
  </div>
<div id="box"></div>



<div id="button"onClick={this.submit.bind(this)}>Confirm date</div>
      </div>

    );
  }


}


















export default App;
