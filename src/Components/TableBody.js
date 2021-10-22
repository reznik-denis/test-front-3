import { useState } from 'react';

const goods = [
    { id: 1, good: 'Красный носок', total: 0},
    { id: 2, good: 'Синий носок', total: 0},
    { id: 3, good: 'Бесцветный носок', total: 0},]

function TableBody() {
    const [number, setNumber] = useState(0);
    const [price, setPrice] = useState(0);
    const [total, setTotal] = useState(0);
    const [good, setGoods] = useState(goods)

    const handleChangeNumber = event => {
        setNumber(event.currentTarget.value);
    };

    const handleChangePrice = event => {
        setPrice(event.currentTarget.value);
    };
    
    const handleSubmit = event  => {
        event.preventDefault();
        if (number !== 0 && price !== 0) {
            setTotal(number * price)
        }
        
        reset();
        // goods.find((good) => { if (good.id === id) {return good.total = total}})
    }

    
    
    const reset = () => {
        setPrice(0);
        setNumber(0);
    };

    return (<tbody>
        {good.map(({ id, good, total }) => (
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