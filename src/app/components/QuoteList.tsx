// src/components/QuoteList.tsx
import React from 'react';
import { useGetQuoteQuery } from '../../services/quotesApi';
import 'bootstrap/dist/css/bootstrap.min.css';

const QuoteList: React.FC = () => {
  const { data: quote, error, isLoading } = useGetQuoteQuery();

  if (isLoading) return <p className="text-center text-secondary">Loading...</p>;
  if (error) return <p className="text-center text-danger">Error loading quote.</p>;

  return (
    <div className="container mt-4">
      <div className="card p-4 shadow-lg rounded">
        <blockquote className="blockquote text-center">
          <p className="mb-3 mt-3 font-italic">“{quote?.quote}”</p>
          <footer className="blockquote-footer text-secondary mt-2">{quote?.author}</footer>
        </blockquote>
      </div>
    </div>
  );
};

export default QuoteList;