import { Route, Routes } from 'react-router-dom';
import IndexPage from "../pages/IndexPage/IndexPage";
import MatchPage from '../pages/MatchPage/MatchPage';
import SitGuides from "../pages/SitGuidesPage/SitGuidesPage"
import MatchDetails from "../components/MatchDetails/MatchDetails";


const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<IndexPage />}/>
            <Route path="/match" element={<MatchPage />} />
            <Route path="/sitguides" element={<SitGuides />} />
            <Route path="/details" element={<MatchDetails />} />
        </Routes>
    )
}

export default AppRoutes;