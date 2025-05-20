export const Categories = () => (
    <section className="py-10 px-6 bg-white top-cat">
        <div className="max-1376 mx-auto">
            <h2 className="text-2xl font-bold mb-6">Top Categories</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-4">
                {[...Array(12)].map((_, i) => (
                    <div key={i} className="bg-white rounded-lg text-center overflow-hidden">
                        <img src={`/category-${i + 1}.png`} alt={`Category ${i + 1}`} className="mx-auto mb-2 h-64" />
                        <p className="text-sm p-4 font-semibold">Category {i + 1}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);