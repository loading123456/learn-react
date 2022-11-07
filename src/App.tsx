import React, { FC, Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
interface IFragmentProps {
    children?: React.ReactElement;
}

const App = () => {
    return (
        <div className="App">
            <Router>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        let Layout: FC<IFragmentProps> = ({ children }) => {
                            return <>{children}</>;
                        };

                        if (route.layout !== null) {
                            Layout = route.layout;
                        }
                        return (
                            <Route 
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page></Page>
                                    </Layout>
                                }
                            ></Route>
                        );
                    })}
                </Routes>
            </Router>
        </div>
    );
};

export default App;
