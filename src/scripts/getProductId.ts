type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    stock: number;
}

export async function fetchProducts() {
    const response = await fetch('https://commercial-api.vulktech.com/products');
    if (response.ok) {
      const products: Product[] = await response.json();  
      console.log(products);
      
      return products;
    } else {
      throw new Error('Error al obtener productos');
    }
  }
