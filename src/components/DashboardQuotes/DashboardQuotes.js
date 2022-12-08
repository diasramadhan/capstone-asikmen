import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import getFamousQuotes from '../../utils/quotesAPI';
import './DashboardQuotes.scss';

export default function DashboardQuotes() {
  const [quotes, setQuotes] = React.useState({});

  React.useEffect(() => {
    const getQuotes = async () => {
      const { content, author } = await getFamousQuotes();
      setQuotes({ content, author });
    };

    getQuotes();
  }, []);

  if (Object.keys(quotes).length === 0) {
    return (
      <div className="d-flex justify-content-center">
        <div className="dashboard-quotes p-4 rounded-3 shadow-sm">
          <p className="mb-0">Loading Quotes...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="dashboard-quotes p-4 rounded-3 shadow-sm">
        <div className="row">
          <div className="col-2">
            <FaQuoteLeft className="fs-1 opacity-25" />
          </div>
          <div className="col-10">
            <p className="mb-1">{quotes.content}</p>
            <p className="fw-bold mb-0">{`- ${quotes.author}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
