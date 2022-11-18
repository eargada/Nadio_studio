import React from 'react'
import {Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import ProjectPage from './pages/ProjectPage'
import VoicePage from './pages/VoicePage'


const Root = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />}/>
            <Route path="/projects" element={<ProjectPage />}/>
            <Route path="/projects/:projectId" element={<VoicePage />}/>
        </Routes>
    )
}

export default Root
