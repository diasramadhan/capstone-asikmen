import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';
import useGetValue from '../hooks/useGetValue';
import Loading from '../components/Loading/Loading';
import ResultItem from '../components/TestResults/ResultItem';

function Result({ historyTestId }) {
  const navigate = useNavigate();
  const currentUser = React.useContext(AuthContext);
  const history = useGetValue(`/history/${currentUser.uid}/${historyTestId}`);
  const result = useGetValue('results');

  useEffect(() => {
    if (historyTestId == null) {
      navigate('/test');
    }
  }, []);

  const loading = history.isLoading || result.isLoading;
  if (loading) {
    return (<Loading />);
  }

  const dataHistory = Object.values(history.snapshot);
  const dataResult = Object.values(result.snapshot);

  let resultCode = null;
  let img = null;

  if (dataHistory[1] < 14) {
    resultCode = 0;
    img = '/img/feel-fine.svg';
  } else if (dataHistory[1] < 40) {
    resultCode = 1;
    img = '/img/feel-blue.svg';
  } else {
    resultCode = 2;
    img = '/img/feel-depress.svg';
  }
  return (
    <ResultItem
      dataHistory={dataHistory[2]}
      dataResult={dataResult}
      resultCode={resultCode}
      img={img}
    />
  );
}
export default Result;
