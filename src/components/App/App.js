import {useEffect, useState} from 'react';
import api from "../../utils/Api";
import './App.css';
import Card from "../Card/Card";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Spinner from "../Spinner/Spinner";

function App() {
    const [searchQuery, setSearchQuery] = useState('dog');
    const [cards, setCards] = useState([])
    const [isLoading, setIsloading] = useState(false)

    useEffect(() => {
        // console.log('--------------------------')
        // console.log('####:UseEffect DONE');
        // console.log('--------------------------')
        handleRequest()
    }, [])

    const handleRequest = () => {
        if (searchQuery !== '') {
            setIsloading(true)
            api.search(searchQuery)
                .then(data => {
                    const cards = data.results.map(item => {
                        return {
                            id: item.id,
                            src: item.urls.regular,
                            alt: item.alt_description,
                            title: item.user.name,
                            subtitle: item.description
                        }
                    })
                    setCards(cards);

                })
                .catch( err => console.log(err))
                .finally(() => setIsloading(false))
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleRequest()
    }

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    }

    // console.log('####:SearchState', searchQuery);
    // console.log('####:cards', cards);
    // console.log('####:isLoading', isLoading);
    return (
        <div className="app">
            <div className="app__content">
                <form className="app__search" onSubmit={handleFormSubmit}>
                    <Input placeholder="Search free high-resolution photos" handleChange={handleInputChange}/>
                    <Button text="Search" type="submit" handleClick={() => console.log('Click')} />
                </form>

                {
                    isLoading
                        ? <Spinner/>
                        : (
                            <div className="app__cards">
                                {
                                    cards.map(item =>
                                        <Card
                                            key={item.id}
                                            src={item.src}
                                            title={item.title}
                                            subtitle={item.subtitle}
                                            alt={item.alt}
                                        />)
                                }
                            </div>
                        )
                }

            </div>

        </div>
    );
}

export default App;
