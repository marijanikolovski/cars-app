import { useDispatch, useSelector } from 'react-redux';
import { setSerch } from '../store/cars/slice';
export const CarsSearch = () => {
    const dispatch = useDispatch()

    return (
        <form>
            <input
                type="text"
                placeholder="Search"
                onChange={({ target }) =>
                dispatch(setSerch(target.value))
                }
            />
        </form>
    )
}
