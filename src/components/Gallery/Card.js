import React from 'react';
import PropTypes from 'prop-types';

const Card = ({
  title,
  description,
  image,
  footer,
  className = '',
  children
}) => {
  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '0.75rem',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    overflow: 'hidden',
    transition: 'transform 0.3s ease',
  };

  const cardHoverStyle = {
    transform: 'scale(1.05)'
  };

  const imageContainerStyle = {
    position: 'relative',
    height: '12rem',
    overflow: 'hidden'
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease'
  };

  const imageHoverStyle = {
    transform: 'scale(1.1)'
  };

  const contentStyle = {
    padding: '1.25rem'
  };

  const titleStyle = {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: '0.5rem'
  };

  const descriptionStyle = {
    color: '#4B5563',
    marginBottom: '1rem'
  };

  const footerStyle = {
    marginTop: '1rem',
    paddingTop: '1rem',
    borderTop: '1px solid #E5E7EB'
  };

  return (
    <div 
      className={className}
      style={cardStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = cardHoverStyle.transform;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'none';
      }}
    >
      {image && (
        <div style={imageContainerStyle}>
          <img
            src={image}
            alt={title}
            style={imageStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = imageHoverStyle.transform;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
            }}
          />
        </div>
      )}
      
      <div style={contentStyle}>
        <h3 style={titleStyle}>
          {title}
        </h3>
        
        {description && (
          <p style={descriptionStyle}>
            {description}
          </p>
        )}
        
        {children}
        
        {footer && (
          <div style={footerStyle}>
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  footer: PropTypes.node,
  className: PropTypes.string,
  children: PropTypes.node
};

export default Card;
