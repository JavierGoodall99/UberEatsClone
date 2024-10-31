"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/store";
import { toast } from "sonner";

interface Restaurant {
  id: number;
  name: string;
  image: string;
  price: number;
}

export default function AddToCartButton({ restaurant }: { restaurant: Restaurant }) {
  const cart = useCart();

  const handleAddToCart = () => {
    cart.addItem({
      id: restaurant.id,
      name: restaurant.name,
      price: restaurant.price,
      image: restaurant.image,
      quantity: 1,
    });
    toast.success(`Added ${restaurant.name} to cart`);
  };

  return (
    <Button onClick={handleAddToCart}>
      Add to Cart
    </Button>
  );
}