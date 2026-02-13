import { Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { CaseStudies } from './pages/CaseStudies'
import { CaseStudyDetail } from './pages/CaseStudyDetail'
import { Articles } from './pages/Articles'
import { ArticleDetail } from './pages/ArticleDetail'
import { OperatingManual } from './pages/OperatingManual'
import { AiLab } from './pages/AiLab'
import { Now } from './pages/Now'
import { Resources } from './pages/Resources'

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="case-studies" element={<CaseStudies />} />
        <Route path="case-studies/:slug" element={<CaseStudyDetail />} />
        <Route path="articles" element={<Articles />} />
        <Route path="articles/:slug" element={<ArticleDetail />} />
        <Route path="operating-manual" element={<OperatingManual />} />
        <Route path="ai-lab" element={<AiLab />} />
        <Route path="now" element={<Now />} />
        <Route path="resources" element={<Resources />} />

        {/* Convenience: /admin route goes to static admin index in /public/admin/ */}
        <Route path="admin" element={<Navigate to="/admin/" replace />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
