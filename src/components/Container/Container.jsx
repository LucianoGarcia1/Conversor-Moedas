import "./Container.css";

const converter = ()=>{
    const valor = document.querySelector("input");
    const select1 = document.querySelector("#select1");
    const select2 = document.querySelector("#select2");
    let calculo;
    const res = document.querySelector(".resultado");

    const url = `http://economia.awesomeapi.com.br/json/last/${select1.value}-${select2.value}`;

    const apiConverte = async ()=>{
        const request = await fetch(url, {})
        .then(Response => Response.json())
        .then((data)=>{
            if(select1.value === "USD" && select2.value === "BRL"){
                calculo = valor.value * data.USDBRL.ask;

            }else if(select1.value === "BRL" && select2.value === "USD"){
                calculo = valor.value * data.BRLUSD.ask;

            }else if(select1.value === "EUR" && select2.value === "BRL"){
                calculo = valor.value * data.EURBRL.ask;

            }else if(select1.value === "BRL" && select2.value === "EUR"){
                calculo = valor.value * data.BRLEUR.ask;

            }else if(select1.value === "USD" && select2.value === "EUR"){
                calculo = valor.value * data.USDEUR.ask;

            }else if(select1.value === "EUR" && select2.value === "USD"){
                calculo = valor.value * data.EURUSD.ask;

            }

        })
        .catch((erro)=>{
            alert(erro);
        })

        
        res.innerText = calculo.toFixed(2);
        res.classList.add("active");
    }
    apiConverte();
}


export const Container = ()=>{
    return(
        <div className="Container">
            <h1>Conversor de Moedas</h1>

            <div className="conversor">
                <label>
                    Valor
                    <input type="number" placeholder="0,00" required/>
                </label>
                <label>
                    Converter de
                    <select id="select1">
                        <option value="USD">Dólar(USD)</option>
                        <option value="EUR">Euro(EUR)</option>
                        <option value="BRL">Real(BRL)</option>
                    </select>
                </label>

                <label>
                    Para
                    <select id="select2">
                        <option value="BRL">Real(BRL)</option>
                        <option value="USD">Dólar(USD)</option>
                        <option value="EUR">Euro(EUR)</option>
                    </select>
                </label>
            </div>

            <button type="button" onClick={converter}>Converter</button>


            <div className="resultado"></div>
        </div>
    );
    
}