

$(()=>{
    $('#historical-charts-detail-tabs').append('<a id="downlink"></a>')
    $('#historical-charts-detail-tabs').append('<a style="position:absolute;top:10px;left:10px" id="download">Download</a>')
    $('#download').click(e=>{
        let name = $('#historical-charts-detail-tabs>li.active').text()
        let url = `https://www.apmex.com/spotprice/gethistoricalchart?metalname=${name}&metalId=3`
        console.log(url)
        fetch(url).then(r=>{
            r.text().then(txt=>{
                let url = `data:text/json;charset=utf-8,${encodeURIComponent(txt)}`
                $('#downlink').attr('download', `${name}.json`)
                $('#downlink').attr('href', url)
                $('#downlink')[0].click()
            })
        })
        
    })
})
