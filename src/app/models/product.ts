export interface Product {
    id: number,
    gtin: number,
    product_name: string,
    product_desc: string,
    price: number | string,
    currency: string,
    category: string,
    gender: string,
    quantity: number | string,
    size: string,
    style: string,
    color: string,
    url: string,
    image: string,
    image_additional: string,
    additional: string | number,
    source_video: string
}