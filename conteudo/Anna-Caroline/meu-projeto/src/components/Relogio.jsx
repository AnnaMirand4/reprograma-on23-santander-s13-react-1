function Relogio () {
    const hora = new Date().toLocaleTimeString

    retun (
        <h2>{hora}</h2>
    )
}

export default Relogio;