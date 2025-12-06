export interface Candidate {
    id: string;
    number: number;
    name: string;
    nameLocal?: string; // For Malayalam or other local language
    party?: string;
    symbol?: string;
    logo?: string; // Path to party/candidate logo image
}

export interface ElectionCategory {
    id: string;
    name: string;
    nameLocal?: string;
    candidates: Candidate[];
}

export type VoteStatus = 'idle' | 'voting' | 'confirmed';
