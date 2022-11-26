import { getStoredCart } from "../utilities/fakedb";

export const productsAndcartLoader=async()=>{
    const productsData= await fetch('products.json');
    const products= await productsData.json();

    const saveCart=getStoredCart();
    const previousCart=[]
    console.log('saved',saveCart);
    for(const id in saveCart){
        //finding the added product from all products by comparing id of saved product and all other products
        const addedProduct=products.find(product=>product.id==id);
        if(addedProduct)
        {
            const quantity=saveCart[id];
            addedProduct.quantity=quantity;
            previousCart.push(addedProduct);
        }
    }

    return {products:products,initialCart:previousCart};
}