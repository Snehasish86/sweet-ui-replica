export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviews: number;
  image: string;
  isWishlisted?: boolean;
}

export const bestsellers: Product[] = [
  { id: 1, name: "Heavenly Red Velvet Cake", price: 549, originalPrice: 699, discount: 21, rating: 4.9, reviews: 2847, image: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=400&h=400&fit=crop" },
  { id: 2, name: "Classic Chocolate Truffle Cake", price: 499, rating: 4.8, reviews: 3521, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop" },
  { id: 3, name: "Butterscotch Bliss Cake", price: 549, originalPrice: 649, discount: 15, rating: 4.7, reviews: 1893, image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=400&h=400&fit=crop" },
  { id: 4, name: "Fresh Fruit Cream Cake", price: 649, rating: 4.8, reviews: 2156, image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=400&fit=crop" },
  { id: 5, name: "Black Forest Gateau", price: 599, originalPrice: 749, discount: 20, rating: 4.9, reviews: 4012, image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=400&h=400&fit=crop" },
  { id: 6, name: "Pineapple Paradise Cake", price: 449, rating: 4.6, reviews: 1567, image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=400&fit=crop" },
  { id: 7, name: "Mango Delight Cake", price: 699, originalPrice: 849, discount: 18, rating: 4.8, reviews: 987, image: "https://images.unsplash.com/photo-1557979619-445218f326b9?w=400&h=400&fit=crop" },
  { id: 8, name: "Strawberry Dream Cake", price: 599, rating: 4.7, reviews: 2345, image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=400&fit=crop" },
  { id: 9, name: "Blueberry Cheesecake", price: 749, rating: 4.9, reviews: 1678, image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&h=400&fit=crop" },
  { id: 10, name: "Coffee Walnut Cake", price: 649, originalPrice: 799, discount: 19, rating: 4.7, reviews: 892, image: "https://images.unsplash.com/photo-1551879400-111a9087cd86?w=400&h=400&fit=crop" },
];

export const categories = [
  { name: "CLASSIC", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=200&h=200&fit=crop" },
  { name: "GOURMET", image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=200&h=200&fit=crop" },
  { name: "DESIGNER", image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=200&h=200&fit=crop" },
  { name: "PHOTO CAKES", image: "https://images.unsplash.com/photo-1558301211-0d8c8ddee5a8?w=200&h=200&fit=crop" },
  { name: "Desserts", image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=200&h=200&fit=crop" },
  { name: "Hampers", image: "https://images.unsplash.com/photo-1549312142-d608f28d9b29?w=200&h=200&fit=crop" },
];

export const instagramImages = [
  "https://images.unsplash.com/photo-1562440499-64c9a111f713?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1587668178277-295251f900ce?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1558301211-0d8c8ddee5a8?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1551879400-111a9087cd86?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=300&h=300&fit=crop",
];
