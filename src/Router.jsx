import { Route, Routes } from 'react-router-dom'
import { Inicial, NotFound, SobreNos } from './pages'
import { LayoutPadrao } from './layouts'

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<LayoutPadrao />}>
                <Route path="/" element={<Inicial />} />
                <Route path="/about-dev" element={<SobreNos />} />
                <Route path='*' element={<NotFound />} />
            </Route>
        </Routes>
    )
}

export { Router }