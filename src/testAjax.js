import {useState, useEffect} from 'react';
import $ from 'jquery';

const URL = 'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1';

const postBodyJson = {
    type: "hot",
    limit: 10
};

//Envia datos por ajax utilizando fetch
const PricesCryptoByFetch = () =>{
    const [prices1, setPrices1] = useState([]);

    const requestMetadata = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        data: JSON.stringify(postBodyJson)
    };

    useEffect(() => {
        fetch(URL, requestMetadata) 
        .then(res => res.json())
        .then(res => setPrices1(res.prices)); 
    }, []); 
    
    return (<textarea name="result" defaultValue={prices1}></textarea>);
}

//Envia datos por ajax utilizando jquery.ajax
const PricesCryptoByJqueryAjax = () =>{
    const [prices2, setPrices2] = useState([]);

    useEffect(() => {
        $.ajax({
            url: URL,
            dataType: "json",
            method: "GET",
            data: postBodyJson,
            success: function(response) {
                setPrices2(response.prices);
            }
        });
    }, []);     

    return (<textarea name="result" defaultValue={prices2}></textarea>);
}

export {PricesCryptoByFetch, PricesCryptoByJqueryAjax};
