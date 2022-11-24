import { useDispatch, useSelector } from 'react-redux';
import { selectCars } from '../store/cars/selectors';
import { setCars, setSerch } from '../store/cars/slice';

export const CarsSearch = () => {
    const dispatch = useDispatch()
    const term = useSelector(selectCars)
    const cars = useSelector(selectCars)

    function handleChangeSearchTerm(event) {
        dispatch(setSerch(event.target.value));
    }

    function handleSearch() {
        dispatch(setCars({...cars, brand: term, model: term}));
    }

    return (
        <form>
            <input
                type="text"
                placeholder='Brand'
                onChange={handleChangeSearchTerm}
            />
            <input
                type="text"
                placeholder='Model'
                onChange={handleChangeSearchTerm}
            />
            <button onClick={handleSearch}>Search</button>
        </form>
    )
}
