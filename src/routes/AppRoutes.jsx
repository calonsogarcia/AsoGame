import { Route, Routes } from 'react-router-dom';
import IndexPage from "../pages/IndexPage/IndexPage";
import MatchPage from '../pages/MatchPage/MatchPage';

const AppRoutes = () => {

    return (
        <Routes>
            {/* <Route path="/" element={<IndexPage />}/> */}
            <Route path="/match" element={<MatchPage />} />
        </Routes>
    )
}

export default AppRoutes;