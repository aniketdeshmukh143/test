import React from 'react';
import MainNavbar from '../MainNavbar/MainNavbar';
import LessonSection from '../LessonSection/LessionSection';

export default function MainContainer() {
    return (
        <div className="flex-container">
            <div className="flex-item-left">
                <MainNavbar />
            </div>
            <div className="flex-item-right">
                <LessonSection />
            </div>
        </div>
    )
}
