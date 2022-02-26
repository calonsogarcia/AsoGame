import { Route, Routes } from 'react-router-dom';
import IndexPage from "../pages/IndexPage/IndexPage";
import MatchPage from '../pages/MatchPage/MatchPage';
import SitGuides from "../pages/SitGuidesPage/SitGuidesPage"

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<IndexPage />}/>
            <Route path="/match" element={<MatchPage />} />
            <Route path="/sitguides" element={<SitGuides />} />
        </Routes>
    )
}

export default AppRoutes;