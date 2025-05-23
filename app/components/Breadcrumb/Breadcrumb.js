'use client'; // Important: make this a Client Component

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Breadcrumb() {
    const pathname = usePathname();
    const pathSegments = pathname.split('/').filter(Boolean);

    const formatSegment = (segment) =>
        segment
            .replace(/-/g, ' ')
            .replace(/\b\w/g, (l) => l.toUpperCase());

    return (
        <div className="w-full border-b border-gray-200 py-4 px-6 flex justify-between items-center bg-white">
            <h1 className="text-sm font-semibold tracking-wider text-gray-900 uppercase">
                {formatSegment(pathSegments[pathSegments.length - 1] || 'Home')}
            </h1>
            <nav className="text-sm text-gray-500">
                <ol className="flex items-center space-x-1">
                    <li>
                        <Link href="/" className="hover:underline text-gray-500">
                            Home
                        </Link>
                    </li>
                    {pathSegments.map((segment, index) => {
                        const href = '/' + pathSegments.slice(0, index + 1).join('/');
                        const isLast = index === pathSegments.length - 1;
                        return (
                            <li key={index} className="flex items-center">
                                <span className="mx-1 text-gray-400">{'>'}</span>
                                {isLast ? (
                                    <span className="text-orange-500">{formatSegment(segment)}</span>
                                ) : (
                                    <Link href={href} className="hover:underline text-gray-500">
                                        {formatSegment(segment)}
                                    </Link>
                                )}
                            </li>
                        );
                    })}
                </ol>
            </nav>
        </div>
    );
}
