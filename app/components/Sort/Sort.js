export default function Sort() {
    return <div className="flex justify-end mb-4">
        <select
            className="border border-gray-300 text-sm rounded px-4 py-2"
        >
            <option value="">Sort By</option>
            <option value="az">Alphabetically (A to Z)</option>
            <option value="za">Alphabetically (Z to A)</option>
            <option value="priceLowHigh">Price (Low to High)</option>
            <option value="priceHighLow">Price (High to Low)</option>
            <option value="relevance">Relevance</option>
            <option value="sku">SKU</option>
            <option value="newest">Newest First</option>
        </select>
    </div>
}