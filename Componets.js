const Contador = () => {

    const [contador, setContador] = React.useState(0)

    return (
        <div>
            <h1 className={contador >= 0 ? "positivo" : "negativo"}>Contador: {contador}</h1>
            <hr/>

            <button className="positivo" onClick={() => setContador(contador + 1)}>Incrementar</button>
            <button className="negativo" onClick={() => setContador(contador - 1)}>Disminuir</button>
        </div>
    )
}