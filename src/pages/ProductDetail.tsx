import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Para acceder a los parámetros de la URL
import Navbar from '../components/navbar.astro';

const ProductDetail = () => {
  const { id } = useParams();
  
  const [product, setProduct] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Efecto para obtener el producto por ID
  useEffect(() => {
    if (id) {
      fetch(`https://commercial-api.vulktech.com/products/product/${id}`)
        .then(response => response.json())
        .then(data => {
          setProduct(data);
          setLoading(false);
        })
        .catch(err => {
          setError('Error al cargar el producto');
          setLoading(false);
        });
    } else {
      setError('ID de producto no proporcionado');
      setLoading(false);
    }
  }, [id]); // Dependiendo de 'id', vuelve a cargar el producto
  
  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <Navbar />
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : product ? (
        <div className="container mx-auto max-w-screen-lg px-4 py-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Imagen del Producto */}
            <div className="flex-1">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="rounded-lg shadow-lg max-w-4xl object-cover"
              />
            </div>

            {/* Información del Producto */}
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              <p className="text-gray-600 mb-6 text-1xl">{product.description}</p>
              <p className="text-2xl font-semibold text-blue-500 mb-6">
                {product.price} USD
              </p>
              <p className="font-bold text-1xl">{product.stock}</p>
              <button
                id="add-to-cart"
                className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition w-full"
                data-product-id={product.id}
              >
                Agregar al Carrito
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-red-500">Producto no encontrado</p>
      )}
    </div>
  );
};

export default ProductDetail;
