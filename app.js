let tvWidget;

function loadChart(pair="EUR/USD"){
if(typeof TradingView==="undefined") return;
const symbol = pair.replace("/","");
if(tvWidget){tvWidget.setSymbol(symbol);return;}
tvWidget = new TradingView.widget({
container_id:"tvchart",width:"100%",height:230,symbol:symbol,interval:"1",
theme:"dark",hide_top_toolbar:true,hide_legend:true,hide_side_toolbar:true,autosize:true});
}

document.addEventListener("DOMContentLoaded",()=>{

loadChart();

setTimeout(()=>{document.getElementById("splash").style.display="none";},1800);

document.querySelectorAll(".tf").forEach(btn=>{
btn.addEventListener("click",()=>{
navigator.vibrate?.(30);
document.querySelectorAll(".tf").forEach(b=>b.classList.remove("active"));
btn.classList.add("active");
});
});

document.getElementById("pair").addEventListener("change",e=>{
loadChart(e.target.value);
navigator.vibrate?.(10);
});

document.getElementById("analyze").addEventListener("click",()=>{
navigator.vibrate?.([20,40,20]);
document.getElementById("result").textContent="Signal generated!";
});

document.getElementById("theme").addEventListener("click",()=>{
let b=document.body;
b.classList.toggle("dark");
b.classList.toggle("light");
navigator.vibrate?.(15);
});
});
