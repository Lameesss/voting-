'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface CandidateData {
    category: string;
    candidate: string;
    candidateLocal: string;
    position?: number;
    tabIndex?: number; // Add tabIndex to track which tab was active
}

export default function CandidateInfoPage() {
    const router = useRouter();
    const [candidateData, setCandidateData] = useState<CandidateData | null>(null);

    useEffect(() => {
        // Get the voted candidate from sessionStorage
        const votedData = sessionStorage.getItem('votedCandidate');
        if (votedData) {
            const data = JSON.parse(votedData);
            setCandidateData(data);
        }
    }, []);

    // Map candidate to image
    const getCandidateImage = () => {
        if (!candidateData) return '/images/candidate1.jpg';

        if (candidateData.candidate === 'SHAMSAD NAJEEB') return '/images/candidate1.jpg';
        if (candidateData.candidate === 'VINOD PADANILAM') return '/images/candidate11.jpg';
        if (candidateData.candidate === 'SEENA') return '/images/candidate3.jpg';

        return '/images/candidate1.jpg';
    };

    // Get ward/position number
    const getPosition = () => {
        if (!candidateData) return '3';

        if (candidateData.candidate === 'SHAMSAD NAJEEB') return '3';
        if (candidateData.candidate === 'VINOD PADANILAM') return '4';
        if (candidateData.candidate === 'SEENA') return '2';

        return '3';
    };

    const handleVoteAgain = () => {
        // Get the current tab index from candidate data
        const currentTabIndex = candidateData?.tabIndex ?? 0;

        // Calculate next tab index (0: Ward, 1: Block, 2: District)
        // After District (2), go back to Ward (0)
        const nextTabIndex = (currentTabIndex + 1) % 3;

        // Clear the vote data
        sessionStorage.removeItem('votedCandidate');

        // Store the next tab index to open
        sessionStorage.setItem('nextTab', nextTabIndex.toString());

        // Navigate back to voting page
        router.push('/');
    };

    if (!candidateData) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
                <p className="text-gray-600 text-base sm:text-xl">Loading candidate information...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4 sm:p-6">
            <div className="max-w-md w-full">
                {/* Main Card */}
                <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
                    {/* Candidate Image Container with Padding */}
                    <div className="relative p-4 sm:p-6 bg-white">
                        <div className="relative h-64 sm:h-72 md:h-80 rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300">
                            <Image
                                src={getCandidateImage()}
                                alt={candidateData.candidate}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* VOTED Badge */}
                        <div className="absolute top-4 right-4 sm:top-8 sm:right-8">
                            <div className="bg-green-500 text-white px-3 sm:px-5 py-1.5 sm:py-2 rounded-full shadow-lg flex items-center gap-1.5 sm:gap-2">
                                <svg
                                    className="w-4 h-4 sm:w-5 sm:h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="font-bold text-xs sm:text-sm">VOTED</span>
                            </div>
                        </div>
                    </div>

                    {/* Candidate Details */}
                    <div className="px-4 sm:px-6 md:px-8 pb-6 sm:pb-8">
                        {/* Candidate Name - Large Malayalam */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">
                            {candidateData.candidateLocal || candidateData.candidate}
                        </h1>

                        {/* Location */}
                        <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
                            <svg
                                className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                            <p className="text-base sm:text-lg font-medium text-gray-600">KUNNAMANGALAM</p>
                        </div>

                        {/* Category and Position Info */}
                        <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 mb-4 sm:mb-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs sm:text-sm text-gray-500 mb-1">Category</p>
                                    <p className="text-lg sm:text-xl font-bold text-gray-900">{candidateData.category.toUpperCase()}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs sm:text-sm text-gray-500 mb-1">Position</p>
                                    <p className="text-3xl sm:text-4xl font-bold text-blue-600">{getPosition()}</p>
                                </div>
                            </div>
                        </div>

                        {/* Vote Again Button */}
                        <button
                            onClick={handleVoteAgain}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                        >
                            VOTE AGAIN
                        </button>
                    </div>
                </div>

                {/* Footer Text */}
                <p className="text-center text-gray-600 mt-4 sm:mt-6 text-xs sm:text-sm px-4">
                    Thank you for practicing! Your vote has been recorded.
                </p>
            </div>
        </div>
    );
}
