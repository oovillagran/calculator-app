import { useState, useEffect } from 'react';

function Quote() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const category = 'faith';
  const url = 'https://api.api-ninjas.com/v1/quotes?category=';
  const URL = url + category;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(URL, {
          headers: { 'X-Api-Key': 'VCuPtFKrZqieJvVJIYMd9w==CYE6lboEGOeZOd8d' },
        });
        const json = await response.json();
        setData(json);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [URL, setIsLoading]);

  if (isLoading) {
    return (
      <div className="loading">
        <div className="lds-ring">
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    );
  }

  if (hasError) return <div className="error">Something went wrong!</div>;

  return (
    <div className="quote-section">
      <div className="quote-container">
        <h2>Quote:</h2>
        {data.map((item) => (
          <p className="quote-text" key={item.quote}>{item.quote}</p>
        ))}
        {data.map((item) => (
          <h3 className="quote-author" key={item.author}>{item.author}</h3>
        ))}
      </div>
    </div>
  );
}

export default Quote;
