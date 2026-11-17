import {surface,label,panel,read,persist,wrap,mint,amber,type Frame,type Key} from "@shared/surface";
import deck from "./deck.json";
type Entry={due:number; days:number; reviews:number};
let journal=read<Record<string,Entry>>("progress",{}), reverse=read("reverse",false);
let index=-1,revealed=false,grade=1,notice="";
const grades=["Again","Good","Easy"];
function available(){
 const now=Date.now();
 return deck.map((_,i)=>i).filter(i=>!journal[i]||journal[i].due<=now)
  .sort((a,b)=>(journal[a]?.due||Infinity)-(journal[b]?.due||Infinity)||a-b);
}
function choose(){const pool=available();index=pool.length?pool[0]:-1;revealed=false;grade=1;}
function draw():Frame{
 const pool=available(), pair=deck[index], side=reverse?1:0;
 let answer=pair?pair[revealed?1-side:side]:"All caught up";
 let next=Object.keys(journal).reduce((min,k)=>Math.min(min,journal[k].due),Infinity);
 return [label("phase",revealed?"RATE: "+grades[grade]:reverse?"ES > EN":"EN > ES",1,0,amber,"front","tiny"),label("word",answer,1,7,mint),
 ...panel("WORD FLIP",pair?[revealed?pair[side]+" = "+pair[1-side]:"Recall: "+pair[side],pool.length+" due / "+deck.length+" cards",
 Object.keys(journal).length+" studied",revealed?"Wheel: Again / Good / Easy":"Click: reveal / wheel: browse",
 revealed?"Click: save rating":"Start: reverse direction",notice]:
 ["Next in "+Math.max(1,Math.ceil((next-Date.now())/60000))+" min","Click to check due cards",notice])];
}
function input(k:Key){
 const pool=available();
 if(index<0){choose();return;}
 if(k==="start"){reverse=!reverse;persist("reverse",reverse);revealed=false;notice="";return;}
 if(k==="up"||k==="down"){
   const delta=k==="up"?1:-1;
   if(revealed)grade=wrap(grade+delta,3);
   else if(pool.length)index=pool[wrap(pool.indexOf(index)+delta,pool.length)];
 }else if(k==="ok"&&!revealed){revealed=true;notice="";grade=1;}
 else if(k==="ok"){
   const old=journal[index];const days=grade===0?0:Math.min(45,Math.max(1,old?.days||0)*(grade===1?2:4));
   const delay=days?days*86400000:60000;
   journal[index]={due:Date.now()+delay,days,reviews:(old?.reviews||0)+1};persist("progress",journal);
   console.log("review",index,grades[grade],"minutes",delay/60000);
   notice=grades[grade]+" / "+(days?days+" days":"1 min");choose();
 }
}
choose();console.log("deck",deck.length,"studied",Object.keys(journal).length,"due",available().length);
surface(draw,input);
