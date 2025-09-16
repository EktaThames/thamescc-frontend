import { Button } from "../ui/button";

export default function Pagination() {
    const currentPage = 1;
    const totalPages = 7;

    return (
        <div className="flex justify-center mt-6 space-x-2 p-12">
            <Button
                size="sm"
                variant="outline"
                className="rounded-full w-10 h-10 text-orange-500"
                disabled={currentPage === 1}
            >
                ←
            </Button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                    key={page}
                    size="sm"
                    variant={page === currentPage ? "default" : "outline"}
                    className={`rounded-full w-10 h-10 ${page === currentPage
                        ? "bg-orange-500 text-white"
                        : "text-orange-500"
                        }`}
                >
                    {String(page).padStart(2, "0")}
                </Button>
            ))}

            <Button
                size="sm"
                variant="outline"
                className="rounded-full w-10 h-10 text-orange-500"
                disabled={currentPage === totalPages}
            >
                →
            </Button>
        </div>
    );
}
