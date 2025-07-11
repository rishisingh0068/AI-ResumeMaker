import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import React, { useContext } from 'react'
import PersonalDetailPreview from './preview/PersonalDetailPreview'
import SummeryPreview from './preview/SummeryPreview'
import ExperiencePreview from './preview/ExperiencePreview'
import EducationalPreview from './preview/EducationalPreview'
import SkillsPreview from './preview/SkillsPreview'

function ResumePreview() {

    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext)

    return (
        <div className='shadow-lg h-full p-10 '>
            {/* Personal Detail  */}
            <PersonalDetailPreview resumeInfo={resumeInfo} />
            {/* Summery  */}
            <SummeryPreview resumeInfo={resumeInfo} />
            {/* Professional Experience  */}
            {/* {resumeInfo?.Experience?.length > 0 &&  */}
            <ExperiencePreview resumeInfo={resumeInfo} />
            {/* // } */}
            {/* Educational  */}
            {/* {resumeInfo?.education?.length > 0 &&  */}
            <EducationalPreview resumeInfo={resumeInfo} />
            {/* // } */}
            {/* Skills  */}
            {/* {resumeInfo?.skills?.length > 0 &&  */}
            <SkillsPreview resumeInfo={resumeInfo} />
            {/* // } */}
        </div>
    )
}

export default ResumePreview