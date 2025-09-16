export function Button({
    children,
    size = "base",
    variant = "default",
    className = "",
    ...props
}) {
    const sizeClasses = {
        base: "px-4 py-2 text-sm",
        sm: "px-3 py-1.5 text-sm",
        icon: "p-2",
    };

    const variantClasses = {
        default: "bg-blue-600 text-white hover:bg-blue-700",
        outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
        ghost: "text-gray-500 hover:text-red-500",
    };

    return (
        <button
            className={`rounded-xl font-medium ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}