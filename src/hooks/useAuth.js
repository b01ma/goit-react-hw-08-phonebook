import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectToken,
  selectIsLoading,
} from 'redux/auth/authSelectors';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/authOperations';

const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectIsLoading);
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);

  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(authOperations.logOut());
  };

  return {
    isLoggedIn,
    isLoading,
    user,
    token,
    handleLogOut,
  };
};

export default useAuth;
