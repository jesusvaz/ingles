import React, {useState} from 'react';
import TENSE_VERBS from '../../data/verbs';
import FlashCard from '../flash-card/flash-card.component';
import '../practice-tense-verbs/practice-tense-verbs.scss';


const PracticeTenses = () => {
    const [tense, setTense] = useState('Infinitive');
    const [count, setCount] = useState(0);

    const Advance = (add) => {
        add === '+' ? setCount(count + 1) : setCount(count - 1)
    }

    const Translate = (tense, verb) => {
        if (count >= 0) {
            switch (tense) {
                case "Infinitive":
                    return "To " + verb.Infinitive.toLowerCase() + " = " + verb.SignificadoPresente
                case 'Past':
                    return verb.Past + " = " + verb.SignificadoPasado
                case "Future":
                    return "Will " + verb.Infinitive.toLowerCase() + " = " + verb.SignificadoFuturo
                default:
                    return "";
            }
        } else {
            setCount(0)
        }
    }


    return (
        <div className="flash-card">
            <h1>Verbs flash cards</h1>
            <div>
                <select name="tense"
                    onChange={
                        e => setTense(e.target.value)
                }>
                    <option value="Infinitive">Presente</option>
                    <option value="Past">Pasado</option>
                    <option value="Future">Futuro</option>
                </select>
                <div>
                    <p/>


                    <button onClick={
                        () => Advance('-')
                    }>PREVIOUS</button>

                    <button onClick={
                        () => Advance('+')
                    }>NEXT</button>
                </div>
                {
                < FlashCard translation = {
                    Translate(tense, TENSE_VERBS.data[count])
                } />
            } </div>
        </div>
    )
}

export default PracticeTenses
