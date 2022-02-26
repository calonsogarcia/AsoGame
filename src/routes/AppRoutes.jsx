import { Route, Routes } from 'react-router-dom';
import IndexPage from "../pages/IndexPage/IndexPage";
import MatchPage from '../pages/MatchPage/MatchPage';
import SitLocation from "../pages/SitLocationPage/SitLocationPage"


const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<IndexPage />}/>
            <Route path="/match" element={<MatchPage />} />
            <Route path="/sitlocation" element={<SitLocation />} />
        </Routes>
    )
}

export default AppRoutes;