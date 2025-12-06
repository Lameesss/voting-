'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface VoteData {
    category: string;
    candidate: string;
    candidateLocal?: string;
}

export default function ConfirmationPage() {
    const router = useRouter();
    const [voteData, setVoteData] = useState<VoteData | null>(null);

    useEffect(() => {
        // Retrieve vote data from sessionStorage
        const storedVote = sessionStorage.getItem('votedCandidate');
        if (storedVote) {
            setVoteData(JSON.parse(storedVote));
        }
    }, []);

    const handleVoteAgain = () => {
        sessionStorage.removeItem('votedCandidate');
        router.push('/');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-3 sm:p-4">
            <div className="max-w-2xl w-full">
                {/* Success Card */}
                <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-green-500 to-green-600 text-white py-6 sm:py-8 px-4 sm:px-6 text-center">
                        <div className="mb-3 sm:mb-4">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center mx-auto">
                                <svg
                                    className="w-10 h-10 sm:w-12 sm:h-12 text-green-500"
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
                        <h1 className="text-2xl sm:text-3xl font-bold mb-2">Vote Successfully Completed</h1>
                        <p className="text-green-100 text-base sm:text-lg">നിങ്ങളുടെ വോട്ട് വിജയകരമായി പൂർത്തീകരിച്ചു</p>
                    </div>

                    {/* Vote Details */}
                    {voteData && (
                        <div className="p-4 sm:p-6 md:p-8">
                            <div className="bg-blue-50 rounded-lg p-4 sm:p-6 mb-4 sm:mb-6">
                                <h2 className="text-base sm:text-lg font-semibold text-gray-700 mb-3 sm:mb-4 text-center">
                                    📋 Vote Summary
                                </h2>
                                <div className="space-y-2 sm:space-y-3">
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 border-b border-blue-200 gap-1 sm:gap-0">
                                        <span className="text-gray-600 font-medium text-sm sm:text-base">Category:</span>
                                        <span className="text-gray-900 font-semibold text-sm sm:text-base">{voteData.category}</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 gap-1 sm:gap-0">
                                        <span className="text-gray-600 font-medium text-sm sm:text-base">Candidate:</span>
                                        <div className="text-left sm:text-right">
                                            <div className="text-gray-900 font-semibold text-sm sm:text-base">{voteData.candidate}</div>
                                            {voteData.candidateLocal && (
                                                <div className="text-gray-600 text-xs sm:text-sm">{voteData.candidateLocal}</div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Information Box */}
                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 sm:p-4 mb-4 sm:mb-6">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <svg
                                            className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <div className="ml-2 sm:ml-3">
                                        <p className="text-xs sm:text-sm text-yellow-700">
                                            <strong>Practice Mode:</strong> This is a practice session. Your vote has not been recorded in any official system.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                <button
                                    onClick={handleVoteAgain}
                                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors shadow-md hover:shadow-lg text-sm sm:text-base"
                                >
                                    🗳️ Practice Again
                                </button>
                                <button
                                    onClick={() => router.push('/tutorial')}
                                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors text-sm sm:text-base"
                                >
                                    📚 View Tutorial
                                </button>
                            </div>

                            {/* Tips Section */}
                            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
                                <h3 className="font-semibold text-gray-700 mb-2 sm:mb-3 text-sm sm:text-base">💡 Quick Tips:</h3>
                                <ul className="text-xs sm:text-sm text-gray-600 space-y-1.5 sm:space-y-2">
                                    <li>✓ Always verify your selection before confirming</li>
                                    <li>✓ The red indicator light confirms your choice</li>
                                    <li>✓ Take your time - there's no rush in the voting booth</li>
                                    <li>✓ Ask poll workers if you need assistance</li>
                                </ul>
                            </div>
                        </div>
                    )}

                    {!voteData && (
                        <div className="p-4 sm:p-8 text-center">
                            <p className="text-gray-600 mb-4 text-sm sm:text-base">No vote data found.</p>
                            <button
                                onClick={() => router.push('/')}
                                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors text-sm sm:text-base"
                            >
                                Go to Voting Page
                            </button>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="text-center mt-4 sm:mt-6 text-xs sm:text-sm text-gray-600 px-4">
                    <p>EVM Practice Machine - Helping citizens learn to vote</p>
                </div>
            </div>
        </div>
    );
}
