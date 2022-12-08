import React from 'react';
import { MdHistory } from 'react-icons/md';
import BackButton from '../components/BackButton/BackButton';
import HistoryList from '../components/HistoryList/HistoryList';
import AuthContext from '../contexts/AuthContext';
import Loading from '../components/Loading/Loading';
import useGetValue from '../hooks/useGetValue';

function HistoryPage() {
  const currentUser = React.useContext(AuthContext);
  const history = useGetValue(`history/${currentUser.uid}`);

  if (history.isLoading) {
    return (<Loading />);
  }

  return (
    <div className="history-container">
      <BackButton />
      <h3 className="history-title">
        <MdHistory className="history-icon" />
        Riwayat Tes
      </h3>
      { history.snapshot == null ? (
        <HistoryList dataHistory={null} />
      ) : (
        <HistoryList dataHistory={Object.values(history.snapshot)} />
      )}
    </div>
  );
}

export default HistoryPage;
