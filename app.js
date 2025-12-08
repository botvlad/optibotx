let tvWidget;

function loadChart(pair="EUR/USD"){
    if(typeof TradingView==="undefined") return;
    const symbol = pair.replace("/","");
    if(tvWidget){ tvWidget.setSymbol(symbol); return; }

    tvWidget = new TradingView.widget({
        container_id:"tvchart",
        width:"100%",
        height:200,
        symbol:symbol,
        interval:"1",
        theme:"dark",
        hide_top_toolbar:true,
        hide_legend:true,
        hide_side_toolbar:true,
        autosize:true
    });
}

document.addEventListener("DOMContentLoaded",()=>{
    loadChart();

    document.querySelectorAll(".tf").forEach(btn=>{
        btn.addEventListener("click",()=>{
            document.querySelectorAll(".tf").forEach(b=>b.classList.remove("active"));
            btn.classList.add("active");
        });
    });

    document.getElementById("pair").addEventListener("change", e=>{
        loadChart(e.target.value);
    });

    document.getElementById("analyze").addEventListener("click",()=>{
        document.getElementById("result").textContent="Signal generated!";
    });
});
