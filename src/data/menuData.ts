export interface MenuColumn {
  title: string;
  items: string[];
}

export interface MenuItem {
  label: string;
  badge?: string;
  columns: MenuColumn[];
}

export const menuItems: MenuItem[] = [
  {
    label: "Cakes",
    columns: [
      { title: "Trending Cakes", items: ["Butterscotch Cakes", "Red Velvet Cakes", "Chocolate Truffle Cakes", "Black Forest Cakes", "Pineapple Cakes", "Fruit Cakes"] },
      { title: "By Type", items: ["Eggless Cakes", "Sugar Free Cakes", "Photo Cakes", "Tier Cakes", "Heart Shaped Cakes", "Pull Me Up Cakes"] },
      { title: "By Flavours", items: ["Chocolate Cakes", "Vanilla Cakes", "Strawberry Cakes", "Mango Cakes", "Blueberry Cakes", "Coffee Cakes"] },
      { title: "Delivery Cities", items: ["Delhi", "Mumbai", "Bangalore", "Hyderabad", "Chennai", "Pune"] },
    ],
  },
  {
    label: "Theme Cakes",
    columns: [
      { title: "Kids Cakes", items: ["Barbie Cakes", "Spiderman Cakes", "Unicorn Cakes", "Dinosaur Cakes", "Princess Cakes"] },
      { title: "Character Cakes", items: ["Mickey Mouse Cakes", "Minion Cakes", "Peppa Pig Cakes", "Doraemon Cakes"] },
      { title: "Grown Up Cakes", items: ["Bachelor Party Cakes", "Gym Cakes", "Travel Cakes", "Cricket Cakes"] },
      { title: "More Cakes", items: ["Floral Cakes", "Number Cakes", "Pinata Cakes", "Bomb Cakes"] },
    ],
  },
  {
    label: "By Relationship",
    columns: [
      { title: "For Him", items: ["For Husband", "For Boyfriend", "For Father", "For Brother", "For Son", "For Friend"] },
      { title: "For Her", items: ["For Wife", "For Girlfriend", "For Mother", "For Sister", "For Daughter", "For Friend"] },
    ],
  },
  {
    label: "Desserts",
    columns: [
      { title: "All Desserts", items: ["Jar Cakes", "Pastries", "Cheesecakes", "Cupcakes", "Brownies", "Cookies", "Tea Cakes", "Dry Cakes"] },
    ],
  },
  {
    label: "Birthday",
    columns: [
      { title: "By Age", items: ["1st Birthday", "18th Birthday", "21st Birthday", "25th Birthday", "30th Birthday", "40th Birthday", "50th Birthday", "60th Birthday"] },
      { title: "By Recipient", items: ["For Kids", "For Teens", "For Adults", "For Seniors"] },
    ],
  },
  {
    label: "Hampers",
    badge: "New",
    columns: [
      { title: "Gift Hampers", items: ["Birthday Hampers", "Anniversary Hampers", "Congratulations Hampers", "Thank You Hampers", "Get Well Soon Hampers", "Festival Hampers"] },
    ],
  },
  {
    label: "Anniversary",
    columns: [
      { title: "By Year", items: ["1st Anniversary", "5th Anniversary", "10th Anniversary", "25th Anniversary", "50th Anniversary"] },
      { title: "For Couple", items: ["For Parents", "For Friends", "Romantic Cakes", "Heart Cakes"] },
    ],
  },
  {
    label: "Occasions",
    columns: [
      { title: "Festive Celebrations", items: ["Christmas Cakes", "New Year Cakes", "Valentine's Day", "Diwali Cakes", "Holi Cakes", "Raksha Bandhan"] },
      { title: "Special Milestones", items: ["Baby Shower", "Farewell Cakes", "Promotion Cakes", "Congratulations", "Thank You Cakes"] },
    ],
  },
  {
    label: "Customized Cakes",
    columns: [
      { title: "Custom Options", items: ["Design Your Cake", "Photo Cakes", "Message Cakes", "Corporate Cakes", "Wedding Cakes"] },
    ],
  },
];

export const cities = [
  "Delhi", "Mumbai", "Bangalore", "Hyderabad", "Chennai", "Pune", "Kolkata",
  "Ahmedabad", "Jaipur", "Lucknow", "Chandigarh", "Noida", "Gurgaon", "Ghaziabad",
];
