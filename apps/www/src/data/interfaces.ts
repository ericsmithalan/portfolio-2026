export interface Location {
    city: string;
    state: string;
    zip: string;
    street: string;
}

export interface InnovationProject {
    title: string;
    tagline: string;
    originStory: string[];
    initialRequirements: string[];
    extendedFeatures: string[];
    developmentProcess: string[];
    engineeringChallenges: string[];
    productOutcomes: string[];
    designPhilosophy: string;
    marketStrategy?: {
        brandingAndIdentity: string;
        packagingConcept?: string;
        pricingAnalysis?: string;
    };
    currentStatus: string;
}

export interface InventionsAndConcepts {
    hardwareInventions: InnovationProject[];
    softwareApplications: InnovationProject[];
}

export interface Contact {
    name: string;
    title: string;
    contactMethod: string;
}

export interface OnlineProfiles {
    website: string;
    github: string;
    linkedin: string;
    vercelDeploy: string;
}

export interface Identity {
    name: string;
    contact: {
        phone: string;
        email: string;
        address: Location;
    };
    online: OnlineProfiles;
}

export interface Military {
    branch: string;
    rank: string;
    stationed: string;
    entryDate: Date;
    separationDate: Date;
    dischargeStatus: string;
    disabilityRatingPercent: number;
    veteransPreference: string;
    coreDuties: string[];
}

export interface MriFindings {
    date: Date;
    findings: string[];
}

export interface HealthAndLimitations {
    diagnoses: string[];
    mriFindings: MriFindings;
    workplaceRestrictions: string[];
}

export interface CareerGoals {
    primaryTargets: string[];
    parameters: string[];
}

export interface ThinkingAndProblemApproach {
    analysis: string[];
}

export interface SkillsLibrary {
    designAndPrototyping: string[];
    frontendEngineering: string[];
    backendToolsAndFullStack: string[];
    mobileAndWebPlatforms: string[];
    manufacturingAnd3D: string[];
    administrativeAndOperational: string[];
}

export interface SideConcepts {
    title: string;
    details: string;
}

export interface SubTeam {
    name: string;
    dates: string;
    summary: string;
}

export interface WorkExperience {
    company: string;
    location: Location;
    phone: string;
    title: string;
    startDate: Date;
    endDate: Date;
    contacts: Contact[];
    responsibilitiesSummary: string;
    resumeBullets: string[];
    userStories: string[];
    subTeams?: SubTeam[];
    sideConcepts?: SideConcepts;
}

export interface VolunteerExperience {
    organization: string;
    location: Location;
    website: string;
    title: string;
    startDate: Date;
    endDate: Date;
    contacts: Contact[];
    summary: string;
    bullets: string[];
    userStories: string[];
}

export interface ProfessionalReference {
    name: string;
    phone: string;
    email: string;
    relationship: string;
}

export interface SystemMapNode {
    label: string;
    transitionsTo: string[];
}

export interface CognitiveEcosystemMap {
    title: string;
    asciiFlowDiagram: string;
    nodes: SystemMapNode[];
}

export interface CognitivePillar {
    id: string;
    title: string;
    tagline: string;
    coreParadigm: string;
    manifestationParagraphs: string[];
    realWorldProofPoints: {
        context: string;
        action: string;
    }[];
}

export interface DeepThinkingAndProblemApproach {
    ecosystemMap: CognitiveEcosystemMap;
    architecturalPillars: CognitivePillar[];
}

export interface MasterProfile {
    identity: Identity;
    military: Military;
    healthAndLimitations: HealthAndLimitations;
    careerGoals: CareerGoals;
    thinkingAndProblemApproach: DeepThinkingAndProblemApproach; // Transformed here
    skillsLibrary: SkillsLibrary;
    workHistory: WorkExperience[];
    volunteerWork: VolunteerExperience[];
    references: ProfessionalReference[];
    innovations: InventionsAndConcepts;
}
