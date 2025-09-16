import Image from 'next/image';

const categories = [
  { name: "Biscuits", image: "/images/category-1.png" },
  { name: "Bread & Cakes", image: "/images/category-1.png" },
  { name: "Catering & Ethnic", image: "/images/category-1.png" },
  { name: "Cereals & Cereal Bar", image: "/images/category-1.png" },
  { name: "Chilled & Frozen", image: "/images/category-1.png" },
  { name: "Confectionery", image: "/images/category-1.png" },
  { name: "Crisps & Snacks", image: "/images/category-1.png" },
  { name: "Grocery", image: "/images/category-1.png" },
  { name: "Health, Beauty & Baby Products", image: "/images/category-1.png" },
  { name: "Hot Drinks", image: "/images/category-1.png" },
  { name: "Household, Cleaning & Paper", image: "/images/category-1.png" },
  { name: "Non-Food And Stationery", image: "/images/category-1.png" },
  { name: "Pet Food", image: "/images/category-1.png" },
  { name: "Soft Drink", image: "/images/category-1.png" },
  { name: "Spirits", image: "/images/category-1.png" },
  { name: "Tobacco & Vapes", image: "/images/category-1.png" },
  { name: "Water", image: "/images/category-1.png" },
  { name: "Wine", image: "/images/category-1.png" },
];

export const CategoryMenu = () => {
  return (
    <div className="absolute top-full left-0 z-50 flex bg-white rounded-lg shadow-lg w-5xl h-[500px]">
      <div className="p-3 space-y-3 bg-[#FF692533] rounded-lg shadow-lg text-sm overflow-y-auto scroll-box border-1 border-white w-[300px]">
        {categories.map((cat, idx) => (
          <div key={idx} className={`flex items-center space-x-2 space-y-1 px-2 pr-5 cursor-pointer hover:text-orange-600 ${cat.name === "Biscuits" ? "text-orange-600 bg-white py-2 rounded-md" : ""}`}>
            <div className="w-6 h-6 rounded-full overflow-hidden">
              <Image src={cat.image} alt={cat.name} width={24} height={24} className="object-cover" />
            </div>
            <span>{cat.name}</span>
			<div className="flex flex-1 justify-end"> <svg className="self-end" width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.75 1.5L5.25 6L0.750001 10.5" stroke="#212121" stroke-width="2"/>
</svg></div>
          </div>
        ))}
      </div>

      <div className="px-4 py-6 text-sm w-[800px]">
        <ul className="space-y-8">
          <li className="text-orange-600 hover:underline cursor-pointer">Biscuits</li>
          <li className="hover:underline cursor-pointer secondary-text">Continental Biscuits</li>
          <li className="hover:underline cursor-pointer secondary-text">Cookies</li>
          <li className="hover:underline cursor-pointer secondary-text">Crackers</li>
        </ul>
		<div className="flex-1 flex items-center justify-start gap-6 px-6 py-4 mt-6">
			<Image src="/images/becks.png" width={165} height={165} alt="becks" />
			<Image src="/images/heineken.png" width={165} height={165} alt="heineken" />
			<Image src="/images/corona.png" width={165} height={165} alt="corona" />
		</div>
      </div>


    </div>
  );
};
