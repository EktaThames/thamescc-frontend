export const BestSellers = () => (
    <section className="py-10 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Bestsellers</h2>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="bg-white p-4">
                        <img src={`/product-${i + 1}.png`} alt={`Product ${i + 1}`} className="h-55 mx-auto mb-2" />
                        <h3 className="text-sm font-semibold mb-1">Product {i + 1}</h3>
                        <p className="text-orange-600 font-bold">€{(i + 1) * 2}.99</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);