export async function GET() {
  const iphones = [
    { id: 1, name: 'iPhone 16', color: 'Natural Titanium', storage: ['128GB', '256GB', '512GB', '1TB'], price: 50000, description: 'Experience next-gen performance with the A18 chip and enhanced camera system.', image: '/images/iphone01.jpg' },
    { id: 2, name: 'iPhone 16', color: 'Blue', storage: ['128GB', '256GB', '512GB'], price: 50000, description: 'Featuring the powerful A18 chip, Dynamic Island, and improved battery life.', image: '/images/iphone02.jpg' },
    { id: 3, name: 'iPhone 16', color: 'Midnight', storage: ['128GB', '256GB', '512GB'], price: 50000, description: 'Capture stunning photos with the advanced dual-camera system and enjoy all-day battery.', image: '/images/iphone03.jpg' },
    { id: 4, name: 'iPhone 11', color: 'Red', storage: ['64GB', '128GB', '256GB'], price: 30000, description: 'A fantastic dual-camera system and great performance with the A13 Bionic chip.', image: '/images/iphone04.jpg' },
    { id: 5, name: 'iPhone 11', color: 'White Titanium', storage: ['256GB', '512GB', '1TB'], price: 30000, description: 'Reliable performance and essential features powered by the A13 Bionic chip.', image: '/images/iphone05.jpg' },
    { id: 6, name: 'iPhone 11', color: 'Pink', storage: ['128GB', '256GB', '512GB'], price: 30000, description: 'Classic design with Liquid Retina display and the capable A13 Bionic chip.', image: '/images/iphone05.jpg' },
  ];

  return Response.json(iphones);
}
