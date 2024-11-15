import type { APIRoute } from 'astro';

export const get: APIRoute = async ({ request }) => {
  const response = await fetch('https://commercial-api.vulktech.com/products');
  if (response.ok) {
    const products = await response.json();
    return {
      body: JSON.stringify(products),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  } else {
    return {
      status: 500,
      body: 'Error al obtener productos',
    };
  }
};
