'use client';

import { useRouter } from 'next/navigation';

export default function TutorialPage() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-4 sm:py-6 px-3 sm:px-4 shadow-lg">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-2xl sm:text-3xl font-bold text-center mb-1 sm:mb-2">
                        📚 How to Use an EVM
                    </h1>
                    <p className="text-center text-blue-100 text-xs sm:text-sm">
                        Electronic Voting Machine Tutorial
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-3 sm:px-4 py-4 sm:py-6 md:py-8">
                {/* Introduction */}
                <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-4 sm:mb-6">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                        Welcome to EVM Practice!
                    </h2>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        An Electronic Voting Machine (EVM) is a simple device that allows you to cast your vote electronically.
                        This tutorial will guide you through the voting process step by step.
                    </p>
                </div>

                {/* Step-by-Step Guide */}
                <div className="space-y-4 sm:space-y-6">
                    {/* Step 1 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="bg-blue-600 text-white px-4 sm:px-6 py-2.5 sm:py-3">
                            <h3 className="text-lg sm:text-xl font-bold">Step 1: Select Election Category</h3>
                        </div>
                        <div className="p-4 sm:p-6">
                            <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                                At the top of the voting machine, you'll see tabs for different election categories:
                            </p>
                            <ul className="list-disc list-inside text-sm sm:text-base text-gray-600 space-y-1.5 sm:space-y-2 ml-2 sm:ml-4">
                                <li><strong>Ward</strong> - Local ward representative</li>
                                <li><strong>Block</strong> - Block-level representative</li>
                                <li><strong>District</strong> - District-level representative</li>
                            </ul>
                            <p className="text-sm sm:text-base text-gray-700 mt-3 sm:mt-4">
                                Click on the tab for the election you want to vote in.
                            </p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="bg-green-600 text-white px-4 sm:px-6 py-2.5 sm:py-3">
                            <h3 className="text-lg sm:text-xl font-bold">Step 2: Review Candidates</h3>
                        </div>
                        <div className="p-4 sm:p-6">
                            <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                                You will see a list of candidates with the following information:
                            </p>
                            <div className="bg-gray-50 rounded-lg p-3 sm:p-4 space-y-2 sm:space-y-3">
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-sm sm:text-base">
                                        1
                                    </div>
                                    <div>
                                        <p className="font-semibold text-sm sm:text-base">Candidate Number</p>
                                        <p className="text-xs sm:text-sm text-gray-600">Each candidate has a unique number</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 flex items-center justify-center text-sm sm:text-base">
                                        👤
                                    </div>
                                    <div>
                                        <p className="font-semibold text-sm sm:text-base">Candidate Name</p>
                                        <p className="text-xs sm:text-sm text-gray-600">Name in English and local language</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-red-100 flex items-center justify-center text-sm sm:text-base">
                                        ⚪
                                    </div>
                                    <div>
                                        <p className="font-semibold text-sm sm:text-base">Indicator Light</p>
                                        <p className="text-xs sm:text-sm text-gray-600">Red circle that lights up when you vote</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <div className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-600 text-white rounded font-semibold text-xs sm:text-sm">
                                        VOTE
                                    </div>
                                    <div>
                                        <p className="font-semibold text-sm sm:text-base">Vote Button</p>
                                        <p className="text-xs sm:text-sm text-gray-600">Blue button to cast your vote</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="bg-purple-600 text-white px-4 sm:px-6 py-2.5 sm:py-3">
                            <h3 className="text-lg sm:text-xl font-bold">Step 3: Cast Your Vote</h3>
                        </div>
                        <div className="p-4 sm:p-6">
                            <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                                Once you've decided on your candidate:
                            </p>
                            <ol className="list-decimal list-inside text-sm sm:text-base text-gray-600 space-y-2 sm:space-y-3 ml-2 sm:ml-4">
                                <li>Find your preferred candidate in the list</li>
                                <li>Click the blue <strong>VOTE</strong> button next to their name</li>
                                <li>Watch the red indicator light fill up - this confirms your selection</li>
                                <li>The system will automatically proceed to the confirmation page</li>
                            </ol>
                            <div className="mt-3 sm:mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-3 sm:p-4">
                                <p className="text-xs sm:text-sm text-yellow-800">
                                    <strong>Important:</strong> Once you click VOTE, you cannot change your selection for that category.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="bg-teal-600 text-white px-4 sm:px-6 py-2.5 sm:py-3">
                            <h3 className="text-lg sm:text-xl font-bold">Step 4: Confirmation</h3>
                        </div>
                        <div className="p-4 sm:p-6">
                            <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                                After voting, you'll see a confirmation screen showing:
                            </p>
                            <ul className="list-disc list-inside text-sm sm:text-base text-gray-600 space-y-1.5 sm:space-y-2 ml-2 sm:ml-4">
                                <li>Success message in English and local language</li>
                                <li>Summary of your vote (category and candidate)</li>
                                <li>Option to practice again</li>
                            </ul>
                            <div className="mt-3 sm:mt-4 bg-green-50 border-l-4 border-green-400 p-3 sm:p-4">
                                <p className="text-xs sm:text-sm text-green-800">
                                    <strong>Remember:</strong> In a real election, your vote is secret and cannot be traced back to you.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Important Tips */}
                <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mt-4 sm:mt-6">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 flex items-center gap-2">
                        💡 Important Tips
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                        <div className="bg-blue-50 rounded-lg p-3 sm:p-4">
                            <h3 className="font-semibold text-blue-900 mb-1.5 sm:mb-2 text-sm sm:text-base">✓ Take Your Time</h3>
                            <p className="text-xs sm:text-sm text-blue-800">
                                There's no rush. Review all candidates carefully before voting.
                            </p>
                        </div>
                        <div className="bg-green-50 rounded-lg p-3 sm:p-4">
                            <h3 className="font-semibold text-green-900 mb-1.5 sm:mb-2 text-sm sm:text-base">✓ Verify Selection</h3>
                            <p className="text-xs sm:text-sm text-green-800">
                                Always check the red indicator light to confirm your choice.
                            </p>
                        </div>
                        <div className="bg-purple-50 rounded-lg p-3 sm:p-4">
                            <h3 className="font-semibold text-purple-900 mb-1.5 sm:mb-2 text-sm sm:text-base">✓ Ask for Help</h3>
                            <p className="text-xs sm:text-sm text-purple-800">
                                Poll workers are there to assist you if you have questions.
                            </p>
                        </div>
                        <div className="bg-orange-50 rounded-lg p-3 sm:p-4">
                            <h3 className="font-semibold text-orange-900 mb-1.5 sm:mb-2 text-sm sm:text-base">✓ Practice Makes Perfect</h3>
                            <p className="text-xs sm:text-sm text-orange-800">
                                Use this practice machine as many times as you need.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
                    <button
                        onClick={() => router.push('/')}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-lg transition-colors shadow-md hover:shadow-lg text-base sm:text-lg"
                    >
                        🗳️ Start Practicing Now
                    </button>
                    <button
                        onClick={() => router.back()}
                        className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-lg transition-colors text-base sm:text-lg"
                    >
                        ← Go Back
                    </button>
                </div>

                {/* Footer */}
                <div className="mt-6 sm:mt-8 text-center text-xs sm:text-sm text-gray-500 px-4">
                    <p>Practice as many times as you need to feel confident!</p>
                </div>
            </div>
        </div>
    );
}
