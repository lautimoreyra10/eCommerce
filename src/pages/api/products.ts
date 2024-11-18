import type { APIRoute } from 'astro';

export const get: APIRoute = async ({ request }) => {
  const response = await fetch('https://commercial-api.vulktech.com/products');
  if (response.ok) {
    const products = await response.json();
    return new Response(JSON.stringify(products), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } else {
    return new Response('Error al obtener productos', {
      status: 500,
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  }
};
