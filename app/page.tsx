'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { electionData } from './data';
import { Candidate } from './types';

export default function Home() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState(0);
    const [selectedCandidate, setSelectedCandidate] = useState<string | null>(null);

    // Check for next tab on component mount
    useEffect(() => {
        const nextTab = sessionStorage.getItem('nextTab');
        if (nextTab !== null) {
            const tabIndex = parseInt(nextTab, 10);
            if (tabIndex >= 0 && tabIndex <= 2) {
                setActiveTab(tabIndex);
            }
            // Clear the nextTab from storage
            sessionStorage.removeItem('nextTab');
        }
    }, []);

    const currentCategory = electionData[activeTab];

    const handleVote = (candidate: Candidate) => {
        // Play loud EVM-style buzzer sound (2 seconds)
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.frequency.value = 2000; // High frequency for loud buzzer
        oscillator.type = 'square'; // Square wave for buzzer sound

        gainNode.gain.setValueAtTime(0.5, audioContext.currentTime); // Loud volume
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 2.0);

        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 2.0); // 2 second beep

        // Set selected candidate to show glowing light
        setSelectedCandidate(candidate.id);

        // Store the vote in sessionStorage with current tab index
        sessionStorage.setItem('votedCandidate', JSON.stringify({
            category: currentCategory.name,
            candidate: candidate.name,
            candidateLocal: candidate.nameLocal,
            tabIndex: activeTab, // Store which tab was active
        }));

        // Navigate to success page after sound completes
        setTimeout(() => {
            router.push('/success');
        }, 2200); // Wait 2.2 seconds for sound to finish
    };

    // Get button style based on index
    const getButtonStyle = (index: number) => {
        if (activeTab === index) {
            // Active tab - dark gray
            return 'bg-gray-600 text-white shadow-md';
        } else if (index === 1) {
            // Block tab - light pink
            return 'bg-pink-300 text-white';
        } else if (index === 2) {
            // District tab - light blue
            return 'bg-blue-300 text-white';
        } else {
            // Ward tab when inactive
            return 'bg-gray-400 text-white';
        }
    };

    // Get card background color based on active tab
    const getCardBgColor = () => {
        if (activeTab === 0) {
            // Ward - gray (current color)
            return 'bg-gray-100';
        } else if (activeTab === 1) {
            // Block - pink
            return 'bg-pink-300';
        } else if (activeTab === 2) {
            // District - blue
            return 'bg-blue-300';
        }
        return 'bg-gray-100';
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-2 sm:p-4">
            <div className="w-full max-w-[95%] sm:max-w-lg md:max-w-xl lg:max-w-2xl">
                {/* Tabs */}
                <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 lg:gap-5 mb-8 sm:mb-10 md:mb-12 lg:mb-14 justify-center">
                    {electionData.map((category, index) => (
                        <button
                            key={category.id}
                            onClick={() => {
                                setActiveTab(index);
                                setSelectedCandidate(null);
                            }}
                            className={`px-10 sm:px-16 md:px-24 lg:px-32 py-3 sm:py-4 md:py-5 lg:py-6 mb-0 rounded-2xl sm:rounded-3xl font-bold text-white text-sm sm:text-base md:text-lg lg:text-xl transition-all shadow-lg hover:shadow-xl ${getButtonStyle(index)}`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* Ballot Unit Card */}
                <div className={`${getCardBgColor()} rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-5 md:p-6 lg:p-8 border-2 sm:border-4 border-gray-300 transition-colors duration-300`}>
                    {/* Header */}
                    <div className="flex justify-center items-center mb-4 sm:mb-6 pb-3 sm:pb-4 border-b-2 border-gray-300">
                        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 md:gap-6">
                            <div className="flex items-center gap-2 sm:gap-3">
                                <span className="font-bold text-black text-lg sm:text-xl md:text-2xl">Ready</span>
                                <span
                                    className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${selectedCandidate !== null
                                        ? 'bg-red-600 shadow-[0_0_15px_5px_rgba(220,38,38,0.8)] animate-pulse'
                                        : 'bg-green-500'
                                        }`}
                                ></span>
                            </div>
                            <div className="font-bold text-black text-lg sm:text-xl md:text-2xl">Ballot Unit 1</div>
                        </div>
                    </div>

                    {/* Candidates Table - Using Grid for Perfect Alignment */}
                    <div className="space-y-0 overflow-x-auto">
                        <div className="px-0 sm:px-2 md:px-4 lg:px-6">
                            {/* Candidates Rows */}
                            {currentCategory.candidates.map((candidate, index) => (
                                <div
                                    key={candidate.id}
                                    className={`grid grid-cols-[35px_1px_1fr_1px_35px_65px] sm:grid-cols-[50px_1px_1fr_1px_50px_100px] md:grid-cols-[60px_1px_1fr_1px_60px_120px] lg:grid-cols-[70px_1px_1fr_1px_70px_150px] gap-1 sm:gap-2 md:gap-3 items-center ${index !== currentCategory.candidates.length - 1 ? 'border-b-2 border-gray-300' : ''
                                        } py-2 sm:py-2 md:py-3 min-h-[52px] sm:min-h-[48px] md:min-h-[52px] lg:min-h-[56px]`}
                                >
                                    {/* Number Column - Fixed Width */}
                                    <div className="flex items-center justify-center">
                                        <span className="font-bold text-gray-800 text-xs sm:text-sm md:text-base lg:text-lg text-center">
                                            {candidate.number}
                                        </span>
                                    </div>

                                    {/* Vertical Divider 1 */}
                                    <div className="w-full h-6 sm:h-8 md:h-9 lg:h-10 bg-gray-400"></div>

                                    {/* Candidate Name Area - Flexible */}
                                    <div className="flex items-center px-1 sm:px-2 md:px-3 min-h-[36px] sm:min-h-[40px] md:min-h-[44px]">
                                        {candidate.name ? (
                                            <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
                                                <span className="font-semibold text-black text-[10px] sm:text-xs md:text-sm lg:text-base truncate">
                                                    {candidate.nameLocal || candidate.name}
                                                </span>
                                                {candidate.logo && (
                                                    <div className="relative w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 flex-shrink-0">
                                                        <Image
                                                            src={candidate.logo}
                                                            alt={`${candidate.name} logo`}
                                                            fill
                                                            className="object-contain"
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        ) : (
                                            <div></div>
                                        )}
                                    </div>

                                    {/* Vertical Divider 2 */}
                                    <div className="w-full h-6 sm:h-8 md:h-9 lg:h-10 bg-gray-400"></div>

                                    {/* Indicator Light Column - Fixed Width */}
                                    <div className="flex items-center justify-center pl-1.5 sm:pl-3 md:pl-4 lg:pl-5">
                                        <div
                                            className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 rounded-full transition-all duration-300 ${selectedCandidate === candidate.id
                                                ? 'bg-red-600 shadow-[0_0_20px_8px_rgba(220,38,38,0.8)] animate-pulse'
                                                : 'bg-red-800'
                                                }`}
                                        />
                                    </div>

                                    {/* Vote Button Column - Fixed Width */}
                                    <div className="flex items-center justify-center pl-1 sm:pl-2 md:pl-3 lg:pl-4">
                                        <button
                                            onClick={() => handleVote(candidate)}
                                            disabled={selectedCandidate !== null || !candidate.name}
                                            className={`w-full max-w-[60px] sm:max-w-[70px] md:max-w-[80px] lg:max-w-[90px] px-2 sm:px-3 md:px-4 lg:px-6 py-2 sm:py-3 md:py-4 lg:py-6 rounded sm:rounded-md md:rounded-lg font-bold text-white text-[10px] sm:text-xs md:text-sm transition-all shadow-md hover:shadow-lg ${selectedCandidate !== null || !candidate.name
                                                ? 'bg-gray-400 cursor-not-allowed opacity-50'
                                                : 'bg-blue-900 hover:bg-blue-950 active:scale-95'
                                                }`}
                                        >
                                            VOTE
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
