//
import {
    useEffect,
    useState,
} from 'react';

//
import tw from 'twin.macro';

//
import Header from '../components/utils/Header';
import Card from '../components/dashboards/Card';
import {
    getTestProps,
    getRandomKey,
} from '../utils/testUtil';

const BoardContainer = tw.div`w-full px-20 py-32 grid grid-cols-1 md:grid-cols-5 gap-16`;


function Home() {
    const [bottom, setBottom] = useState(null);
    const [isLoading, setIsLoading] = useState(false)
    const [testProps, setTestProps] = useState([]);

    const getDashBoardData = async () => {
        setIsLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setTestProps(prev => [...prev,...getTestProps()]);
        setIsLoading(false);
    }

    const onIntersect = async ([entry], observer) => {
        if (entry.isIntersecting && !isLoading) {
            observer.unobserve(entry.target);
            await getDashBoardData();
            observer.observe(entry.target);
        }
    };

    useEffect(() => {
        let observer;
        if (bottom) {
            observer = new IntersectionObserver(onIntersect, {
                threshold: 0.4,
            });
            observer.observe(bottom);
        }
        return () => observer && observer.disconnect();
    }, [bottom]);

    return (
        <>
            <Header />
            <BoardContainer>
                { testProps.map(props => (
                    <Card props={props} key={getRandomKey(12)} />
                )) }
            </BoardContainer>
            <div ref={setBottom} />
        </>
    );
}

export default Home;