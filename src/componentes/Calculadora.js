import './Calculadora.css';
import React, { useState } from 'react';

const Calculadora = () => {
    let [pantalla, setPantalla] = useState('');
    let [almacenar, setAlmacenar] = useState('');
    let [porcentaje, setPorcentaje] = useState(false);
    let [entreAporcentaje, setEntreAPorcentaje] = useState(false);
    let [potenciaN, setPotenciaN] = useState(false);
    let [entreApotenciaN, setEntreApotenciaN] = useState(false);
    let [raizN, setRaizN] = useState();
    let [entreAraizN, setEntreAraizN] = useState();
    let [factorial, setFactorial] = useState();
    let [entreAfactorial, setEntreAfactorial] = useState();

    const mostrarPantalla = value => {
        if (porcentaje === true) {
            setPantalla('');
            setPorcentaje(false);
            setEntreAPorcentaje(true);
            setPantalla(pantalla + value);

        } else {
            if (potenciaN === true) {
                setPantalla('');
                setPotenciaN(false);
                setEntreApotenciaN(true);
                setPantalla(pantalla + value);

            }
            if (raizN === true) {
                setPantalla('');
                setRaizN(false);
                setEntreAraizN(true);
                setPantalla(pantalla + value);

            }
            if (factorial === true) {
                setPantalla('');
                setFactorial(false);
                setEntreAfactorial(true);
                setPantalla(pantalla + value);

            }
            else {
                setPantalla(pantalla + value)
            }
        }

    }

    const calcular = () => {
        let almacenar2 = '';
        let almacenar3 = '';

        if (entreAporcentaje === true) {
            almacenar2 = pantalla.slice(almacenar.length);
            almacenar3 = almacenar2.replace('%', '');
            let calcPorcentaje = (almacenar3 / 100) * almacenar;
            // eslint-disable-next-line
            setPantalla(eval(calcPorcentaje));
            setEntreAPorcentaje(false);

        } else {
            if (entreApotenciaN === true) {
                almacenar2 = '';
                almacenar3 = '';
                almacenar2 = pantalla.slice(almacenar.length);
                almacenar3 = almacenar2.replace('×ⁿ', '')
                let calcPotencia = Math.pow(almacenar, almacenar3);
                // eslint-disable-next-line
                setPantalla(eval(calcPotencia));
                setEntreApotenciaN(false);
            }
            if (entreAraizN === true) {
                almacenar2 = '';
                almacenar3 = '';
                almacenar2 = pantalla.slice(almacenar.length);
                almacenar3 = almacenar2.replace('ⁿ√', '')
                let calcRaiz = Math.pow(almacenar, 1 / almacenar3);
                // eslint-disable-next-line
                setPantalla(eval(calcRaiz));
                setEntreAraizN(false);
            } else {
                if (entreAfactorial === true) {
                    almacenar2 = '';
                    almacenar3 = '';
                    almacenar2 = pantalla.slice(almacenar.length);
                    almacenar3 = almacenar2.replace('x!', '')
                    let calcFactorial = () => {
                        if (almacenar3 === 0) return 1;
                        let f = 1;
                        for (let i = 1; i < almacenar3; i++) {
                            f = f * (i + 1);
                        }
                        return f;
                        ;
                    }
                    setPantalla(calcFactorial);
                    setEntreAraizN(false);
                }
                else {
                    if (pantalla) {
                        // eslint-disable-next-line
                        setPantalla(eval(pantalla));
                    }
                    else {
                        alert('Ingresar valores')
                    }
                }

            }

        }
    }

    const raizCuadrada = () => {
        setPantalla(Math.pow(pantalla, 1 / 2));
    }

    const raizCubica = () => {
        setPantalla(Math.pow(pantalla, 1 / 3));
    }

    const funcionRaizN = num => {
        setAlmacenar(pantalla);
        setRaizN(true);
        setPantalla(pantalla + num);
    }

    const potencia = () => {
        setPantalla(Math.pow(pantalla, 2));
    }

    const potencia3 = () => {
        setPantalla(Math.pow(pantalla, 3));
    }

    const funcionPotenciaN = num => {
        setAlmacenar(pantalla);
        setPantalla(pantalla + num);
        setPotenciaN(true);
    }

    const funcionPorcentaje = num => {
        setAlmacenar(pantalla);
        setPantalla(pantalla + num);
        setPorcentaje(true);
    }

    const funcionFactorial = num => {
        setAlmacenar(pantalla);
        setPantalla(pantalla + num);
        setFactorial(true);
    }

    const funcionIn = () => {
        setPantalla(Math.log(pantalla))
    };

    const funcionLog = () => {
        setPantalla(Math.log10(pantalla))
    };

    const funcionE = () => {
        setPantalla(Math.E)
    };

    const valorPi = num => {
        setPantalla(pantalla + num)
    }

    const funcionSin = () => {
        setPantalla(Math.sin(pantalla))
    };
    const funcionCos = () => {
        setPantalla(Math.cos(pantalla))
    };
    const funcionTg = () => {
        setPantalla(Math.tan(pantalla))
    };

    const funcionAC = () => {
        setPantalla('')
    };

    const funcionCE = () => {
        if (pantalla === '');
        const value = pantalla.slice(0, -1);
        setPantalla(value);
    }

    return (
        <div >
            <div id='contenedor-ppal' className='row justify-content-center mt-5' >
                <div className="col-md-4">
                    <div className="contenedor alert alert-primary" role="alert">
                        <form id="calculadora" className="" name='calculadora'>
                            {/* <!-- mostrar resultado-->*/}
                            <input id="contenedorRes" className='alert alert-warning' defaultValue={pantalla} type={'textfield'} autoComplete='off' readOnly />
                            {/*<!--botones-->*/}
                            <div className="contenedorButtons">
                                <input type={'button'} value='(' className="btn btn-primary boton" onClick={() => mostrarPantalla('(')} />
                                <input type={'button'} value=")" className="btn btn-primary boton" onClick={() => mostrarPantalla(')')} />
                                <input type={'button'} value="x!" className="btn btn-success boton" onClick={() => funcionFactorial('x!')} />
                                <input type={'button'} value="×²" className="btn btn-success boton" onClick={potencia} />
                                <input type={'button'} value="√" className="btn btn-success boton" onClick={raizCuadrada} />
                                <input type={'button'} value="ⁿ√" className="btn btn-success boton" onClick={() => funcionRaizN('ⁿ√')} />

                                <input type={'button'} value='sin' className="btn btn-success boton" onClick={funcionSin} />
                                <input type={'button'} value="cos" className="btn btn-success boton" onClick={funcionCos} />
                                <input type={'button'} value="tg" className="btn btn-success boton" onClick={funcionTg} />
                                <input type={'button'} value="×³" className="btn btn-success boton" onClick={potencia3} />
                                <input type={'button'} value="³√" className="btn btn-success boton" onClick={raizCubica} />
                                <input type={'button'} value="×ⁿ" className="btn btn-success boton" onClick={() => funcionPotenciaN('×ⁿ')} />

                                <input type={'button'} value='1' className="btn btn-primary boton" onClick={() => mostrarPantalla('1')} />
                                <input type={'button'} value="2" className="btn btn-primary boton" onClick={() => mostrarPantalla('2')} />
                                <input type={'button'} value="3" className="btn btn-primary boton" onClick={() => mostrarPantalla('3')} />
                                <input type={'button'} value="/" className="btn btn-success boton" onClick={() => mostrarPantalla('/')} />
                                <input type={'button'} value="%" className="btn btn-success boton" onClick={() => funcionPorcentaje('%')} />
                                <input type={'button'} value="In" className="btn btn-success boton" onClick={funcionIn} />

                                <input type={'button'} value='4' className="btn btn-primary boton" onClick={() => mostrarPantalla('4')} />
                                <input type={'button'} value="5" className="btn btn-primary boton" onClick={() => mostrarPantalla('5')} />
                                <input type={'button'} value="6" className="btn btn-primary boton" onClick={() => mostrarPantalla('6')} />
                                <input type={'button'} value="*" className="btn btn-success boton" onClick={() => mostrarPantalla('*')} />
                                <input type={'button'} value="log" className="btn btn-success boton" onClick={funcionLog} />
                                <input type={'button'} value="e" className="btn btn-success boton" onClick={funcionE} />

                                <input type={'button'} value='7' className="btn btn-primary boton" onClick={() => mostrarPantalla('7')} />
                                <input type={'button'} value="8" className="btn btn-primary boton" onClick={() => mostrarPantalla('8')} />
                                <input type={'button'} value="9" className="btn btn-primary boton" onClick={() => mostrarPantalla('9')} />
                                <input type={'button'} value="-" className="btn btn-success boton" onClick={() => mostrarPantalla('-')} />
                                <input type={'button'} value="AC" className="btn btn-success boton" onClick={funcionAC} />

                                <input type={'button'} value='CE' className="btn btn-success boton" onClick={funcionCE} />
                                <input type={'button'} value="." className="btn btn-success boton" onClick={() => mostrarPantalla('.')} />
                                <input type={'button'} value="0" className="btn btn-primary boton" onClick={() => mostrarPantalla('0')} />
                                <input type={'button'} value="π" className="btn btn-success boton" onClick={() => valorPi('3.141592653589793')} />
                                <input type={'button'} value="+" className="btn btn-success boton" onClick={() => mostrarPantalla('+')} />
                                <input type={'button'} value="=" id='igual' className="btn btn-danger" onClick={calcular} />

                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <footer>
                <div className='divFoot'>
                    <p>Mariano Munarriz</p>
                </div>
            </footer>
        </div>
    );
}
export default Calculadora 