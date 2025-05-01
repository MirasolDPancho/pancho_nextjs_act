'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    fetch('/api/building')
      .then((res) => res.json())
      .then((data) => setShoes(data));
  }, []);

  return (
    <div className="container" style={{
      padding: '16px',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        textAlign: 'center',
        color: '#111',
      }}>iPhone Models</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '16px'
      }}>
        {shoes.map((shoe, index) => (
          <div key={index}
            style={{
              border: '1px solid #333',
              borderRadius: '8px',
              padding: '40px',
              width: '100%',
              textAlign: 'center',
              color: '#111',
              backgroundColor: '#f9f9f9'
            }} >
            <Image
              src={shoe.image}
              alt={shoe.name}
              width={150}
              height={100}
              style={{ width: '100%', height: 'auto', marginBottom: '8px', objectFit: 'cover' }}
              priority={index < 4} />
            <h3 style={{ fontSize: '1.5rem', margin: '10px 0' }}>{shoe.name}</h3>
            <p>{shoe.description}</p>
            <p><strong>PHP {shoe.price.toLocaleString()}</strong></p> {/* Format the price */}
          </div>
        ))}
      </div>
    </div>
  );
}
