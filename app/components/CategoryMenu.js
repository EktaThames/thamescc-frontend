import Image from 'next/image';

const categories = [
  { name: "Biscuits", image: "/icons/biscuits.png" },
  { name: "Bread & Cakes", image: "/icons/bread.png" },
  { name: "Catering & Ethnic", image: "/icons/catering.png" },
  { name: "Cereals & Cereal Bar", image: "/icons/cereals.png" },
  { name: "Chilled & Frozen", image: "/icons/frozen.png" },
  { name: "Confectionery", image: "/icons/confectionery.png" },
  { name: "Crisps & Snacks", image: "/icons/snacks.png" },
  { name: "Grocery", image: "/icons/grocery.png" },
  { name: "Health, Beauty & Baby Products", image: "/icons/health.png" },
  { name: "Hot Drinks", image: "/icons/hotdrinks.png" },
  { name: "Household, Cleaning & Paper", image: "/icons/household.png" },
  { name: "Non-Food And Stationery", image: "/icons/stationery.png" },
  { name: "Pet Food", image: "/icons/petfood.png" },
  { name: "Soft Drink", image: "/icons/softdrink.png" },
  { name: "Spirits", image: "/icons/spirits.png" },
  { name: "Tobacco & Vapes", image: "/icons/tobacco.png" },
  { name: "Water", image: "/icons/water.png" },
  { name: "Wine", image: "/icons/wine.png" },
];

export const CategoryMenu = () => {
  return (
    <div className="absolute top-full left-0 z-50 flex bg-[#FFEFE7] border shadow-lg w-[900px] h-[400px]">
      <div className="w-[220px] p-4 border-r space-y-3 bg-[#FFEFE7] text-sm overflow-y-auto">
        {categories.map((cat, idx) => (
          <div key={idx} className={`flex items-center space-x-2 cursor-pointer ${cat.name === "Biscuits" ? "text-orange-600 font-semibold" : ""}`}>
            <div className="w-6 h-6 rounded-full overflow-hidden">
              <Image src={cat.image} alt={cat.name} width={24} height={24} className="object-cover" />
            </div>
            <span>{cat.name}</span>
          </div>
        ))}
      </div>

      <div className="w-[200px] px-4 py-6 text-sm border-r">
        <ul className="space-y-2">
          <li className="font-bold text-orange-600 mb-2 hover:underline cursor-pointer">Biscuits</li>
          <li className="hover:underline cursor-pointer">Continental Biscuits</li>
          <li className="hover:underline cursor-pointer">Cookies</li>
          <li className="hover:underline cursor-pointer">Crackers</li>
        </ul>
      </div>

      <div className="flex-1 flex items-center justify-start gap-6 px-6 py-4">
        <Image src="/belvita.png" width={80} height={80} alt="Belvita" />
        <Image src="/jar.png" width={80} height={80} alt="Jar" />
        <Image src="/fingers.png" width={80} height={80} alt="Fingers" />
        <Image src="/maryland.png" width={80} height={80} alt="Maryland" />
      </div>
    </div>
  );
};
