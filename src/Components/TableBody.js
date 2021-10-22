import { useState } from 'react';

const goods = [
    { id: 1, good: 'Красный носок' },
    { id: 2, good: 'Синий носок' },
    { id: 3, good: 'Бесцветный носок' },]

function TableBody() {
    const [number, setNumber] = useState(0);
    const [price, setPrice] = useState(0);
    const [total, setTotal] = useState(0);

    const handleChangeNumber = event => {
        setNumber(event.currentTarget.value);
    };

    const handleChangePrice = event => {
        setPrice(event.currentTarget.value);
    };
    
    const handleSubmit = event => {
        event.preventDefault();
        setTotal(number * price);
        reset();
    }
    
    const reset = () => {
        setPrice(0);
        setNumber(0);
    };

    return (<tbody>
        {goods.map(({ id, good }) => (
            <tr key={id} >
                <td className="textAlign">{good}</td>
                <td>
                    <form onSubmit={handleSubmit}>
                        <input
                            className="textAlign"
                            type="number"
                            name="number"
                            value={number}
                            onChange={handleChangeNumber}
                        />
                    </form>
                </td>
                <td>
                    <form onSubmit={handleSubmit}>
                        <input
                            className="textAlign"
                            type="number"
                            name="price"
                            value={price}
                            onChange={handleChangePrice}
                        />
                    </form>
                </td>
                <td>
                    {total}
                </td>
            </tr>))}
         <tr className="textColor">
            <td className="textAlign" colSpan="3">Общая стоимость всех товаров</td>
            <td>20</td>
        </tr>
        </tbody>)
};

export default TableBody;