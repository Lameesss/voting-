'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SuccessPage() {
    const router = useRouter();

    useEffect(() => {
        // Auto-redirect to candidate info page after 3 seconds
        const timer = setTimeout(() => {
            router.push('/candidate-info');
        }, 3000);

        return () => clearTimeout(timer);
    }, [router]);

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="text-center w-full max-w-md">
                {/* Green Checkmark Circle */}
                <div className="flex justify-center mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center">
                        <svg
                            className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>
                </div>

                {/* Success Text */}
                <h1 className="text-xl sm:text-2xl font-semibold text-green-600 mb-2 px-4">
                    Vote Successfully Completed
                </h1>

                {/* Malayalam Text */}
                <p className="text-base sm:text-lg text-gray-700 px-4">
                    നങ്ങളുടെ വോട്ട് വിജയകരമായി പൂർത്തീകരിച്ചു
                </p>
            </div>
        </div>
    );
}
