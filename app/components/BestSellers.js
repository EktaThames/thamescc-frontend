export const BestSellers = () => (
    <section className="py-10 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
		
		 <h2 className="text-3xl font-bold mb-6 border-b pb-2 flex justify-between items-end"><span>Bestsellers</span> <a href="#" className="text-sm text-blue-500 font-normal">See All</a></h2>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="bg-white p-4">
                        <img src={`/product-${i + 1}.png`} alt={`Product ${i + 1}`} className="h-55 mx-auto mb-6" />
                        <h3 className="text-base mb-1 uppercase mb-4">Product {i + 1}</h3>
						<div className="flex justify-between"> 
							<p className="text-base mb-1 uppercase">24X50ML</p>
							<p className="text-base mb-1 inline-flex items-center gap-2"><svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="5" cy="5.5" r="5" fill="#01AA28"/>
</svg>
 In Stock</p>
						</div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);