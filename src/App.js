import './App.css';

function App() {
  return (
    <div className="App">
        <table>
          <tr>
            <th>Название товара</th>
            <th>Количество</th>
            <th>Стоимость 1 ед.</th>
            <th>Общая <br /> стоимость</th>
          </tr>
          <tr>
            <td className="textAlign">Красный носок</td>
            <td>
              <form action="">
              <input className="textAlign" type="number" name="red-socks"/>
            </form>
            </td>
            <td>
              <form action="">
              <input className="textAlign" type="number" name="red-socks"/>
            </form>
            </td>
            <td>
              3
            </td>
          </tr>
          <tr>
            <td className="textAlign">Синий носок</td>
            <td>
              <form action="">
              <input className="textAlign" type="number" name="red-socks"/>
            </form>
            </td>
            <td>
              <form action="">
              <input  className="textAlign" type="number" name="red-socks"/>
            </form>
            </td>
            <td>
              3
            </td>
          </tr>
          <tr>
            <td className="textAlign">Бесцветный носок</td>
            <td>
              <form action="">
              <input className="textAlign" type="number" name="red-socks"/>
            </form>
            </td>
            <td>
              <form action="">
              <input className="textAlign" type="number" name="red-socks"/>
            </form>
            </td>
            <td>
              3
            </td>
          </tr>
          <tr className="textColor">
            <td className="textAlign" colspan="3">Общая стоимость всех товаров</td>
            <td>20</td>
          </tr>
        </table>
    </div>
  );
}

export default App;
