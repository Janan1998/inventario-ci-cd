import { useEffect, useState } from "react";

const API_URL = 'http://localhost:3000/api/productos';

function App() {

  const [productos, setProductos] = useState([]);

  const [sku, setSku] = useState('');
  const [nombre, setNombre] = useState('');

  useEffect(() => {

    fetch(API_URL)
      .then((res) => res.json())
      .then((json) => setProductos(json.data ?? []));

  }, []);

  const handleSubmit = async(e) => {

    e.preventDefault();

    const nuevo = { sku, nombre };

    const resp = await fetch(API_URL, {
      method : 'POST',
      headers : { 'Content-Type': 'application/json' },
      body: JSON.stringify(nuevo )
    });

    if(resp.ok){

      const json = await resp.json();

      setProductos((prev) => [...prev, json.data]);

      setSku('');
      setNombre('');
    }
  };

  return (
    <div>

      <h1>Inventario Web (Demo)</h1>

      <form onSubmit={handleSubmit}>

        <input
          value={sku}
          onChange={(e) => setSku(e.target.value)}
          placeholder="SKU"
        />

        <input
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Nombre"
        />

        <button type="submit">
          Crear producto
        </button>

      </form>

      <hr />

      <ul>
        {productos.map((p) => (
          <li key={p.id}>
            {p.sku} - {p.nombre}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;