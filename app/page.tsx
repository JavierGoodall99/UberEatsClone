import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, Star, Bike } from "lucide-react";
import Image from "next/image";
import AddToCartButton from "@/components/add-to-cart-button";

const restaurants = [
  {
    id: 1,
    name: "Burger House",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&h=400&fit=crop",
    rating: 4.8,
    deliveryTime: "20-30",
    deliveryFee: "2.99",
    cuisine: "American",
    price: 15.99,
  },
  {
    id: 2,
    name: "Sushi Master",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&h=400&fit=crop",
    rating: 4.9,
    deliveryTime: "25-35",
    deliveryFee: "3.99",
    cuisine: "Japanese",
    price: 24.99,
  },
  {
    id: 3,
    name: "Pizza Palace",
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=600&h=400&fit=crop",
    rating: 4.7,
    deliveryTime: "15-25",
    deliveryFee: "1.99",
    cuisine: "Italian",
    price: 18.99,
  },
];

export default function Home() {
  return (
    <div className="container py-8">
      <section className="mb-12">
        <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&h=400&fit=crop"
            alt="Hero"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 flex items-center">
            <div className="container">
              <div className="max-w-lg text-white">
                <h1 className="text-4xl font-bold mb-4">
                  Order food to your door
                </h1>
                <p className="text-lg mb-6">
                  Get fresh food delivered from the best local restaurants
                </p>
                <Button size="lg" className="font-semibold">
                  Order Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Popular Restaurants</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.map((restaurant) => (
            <Card key={restaurant.id} className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={restaurant.image}
                  alt={restaurant.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{restaurant.name}</h3>
                <p className="text-muted-foreground mb-2">{restaurant.cuisine}</p>
                <div className="flex items-center gap-4 text-sm mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>{restaurant.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{restaurant.deliveryTime} min</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bike className="h-4 w-4" />
                    <span>${restaurant.deliveryFee}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">${restaurant.price}</span>
                  <AddToCartButton restaurant={restaurant} />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}