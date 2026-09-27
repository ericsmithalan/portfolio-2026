import {
    EducationComp,
    IdentityComp,
    InovationsComp,
    MilitaryComp,
    SkillsComp,
    ThinkingComp,
    WorkComp,
} from '../../components';
import { masterProfile } from '../../data/portfolio';

export const HomePage = () => {
    return (
        <div className="p-8 max-w-prose">
            <InovationsComp data={masterProfile.innovations} />

            <IdentityComp data={masterProfile.identity} />
            <SkillsComp data={masterProfile.skillsLibrary} />
            <WorkComp data={masterProfile.workHistory} />
            <ThinkingComp data={masterProfile.thinkingAndProblemApproach} />
            <MilitaryComp data={masterProfile.military} />
            <EducationComp data={masterProfile.education} />
        </div>
    );
};
